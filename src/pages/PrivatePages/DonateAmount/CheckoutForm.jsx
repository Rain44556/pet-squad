import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useDonation from '@/hooks/useDonation';
import { AuthContext } from '@/provider/AuthProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
   

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const amount = e.target.amount.value;

        const res = await axiosSecure.post("/create-payment-intent", { amount });
        const clientSecret = res.data.clientSecret;
        
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error);
            setError(error.message);
        }
        else {
            // console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('error')
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // console.log('transactionId', paymentIntent.id);
                setTransactionId(paymentIntent.id);
        }
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <Label htmlFor="email" className="text-gray-700 font-bodyFont">
                    Donation Amount
                </Label>
                <Input
                    name="amount"
                    id="amount"
                    type="amount"
                    placeholder="Enter your amount"
                    className="mt-1 font-bodyFont"
                    required
                />
                 <button 
                 className=" font-bodyFont bg-colorPrimary my-4 px-4 py-2 rounded text-colorSecondary" 
                 type="submit"
                // disabled={!stripe}
                  >
                    Donate
            </button>
            <p className="text-sm font-bodyFont text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
                </form>
        </div>
    );
};

export default CheckoutForm;
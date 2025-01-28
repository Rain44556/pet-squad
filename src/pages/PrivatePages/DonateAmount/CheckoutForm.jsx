import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useDonation from '@/hooks/useDonation';
import { AuthContext } from '@/provider/AuthProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ donation }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
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
            // console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // console.log('transactionId', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // payment save in db
                const donationData = {
                    image: donation.image,
                    name: donation.petName,
                    donatedAmount: amount,
                    transactionId: paymentIntent.id,
                    donorEmail: user.email,
                }
                const res = await axiosSecure.post('/myDonation', donationData);
                // console.log(res.data);

                if (res.data?.donateResult?.insertedId) {
                    Swal.fire({
                        title: 'Thank you for your donation!',
                        html: `
                           <h3 style=" font-weight: bold;">More Recommended Donation Campaigns!!</h3>
                           <div style="
                           display: flex; 
                           justify-content: center; 
                           align-items: center; 
                           flex-direction: column; 
                           padding: 20px; 
                           border: 1px solid #ddd; 
                           border-radius: 10px; 
                           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                           background-color: #fff; 
                           max-width: 400px; 
                           margin: auto;
                           margin-bottom: 15px;">
                           <h1 style="font-size: 1.5rem; color: #333;">Jerry</h1>
                           <p style="font-size: 1rem; color: #666;">Required Fund: 9000 BDT</p>
                           <p style="font-size: 1rem; color: #555; text-align: center;">
                             Help us create a cozy and safe environment for our furry friends by upgrading our shelter facilities.
                           </p>
                           <a href="/donationCampaigns" style="
                             margin-top: 15px; 
                             padding: 10px 20px; 
                             background-color: #4CAF50; 
                             color: white; 
                             text-decoration: none; 
                             border-radius: 5px; 
                             font-size: 1rem;">
                             Donate
                           </a>
                           </div>
                                       
                           <div style="
                           display: flex; 
                           justify-content: center; 
                           align-items: center; 
                           flex-direction: column; 
                           padding: 20px; 
                           border: 1px solid #ddd; 
                           border-radius: 10px; 
                           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                           background-color: #fff; 
                           max-width: 400px; 
                           margin: auto;
                           margin-bottom: 15px;">
                           <h1 style="font-size: 1.5rem; color: #333;">Tom </h1>
                           <p style="font-size: 1rem; color: #666;">Required Fund: 7000 BDT</p>
                           <p style="font-size: 1rem; color: #555; text-align: center;">
                             Support the daily needs of our animals with food, medical care, and essential supplies.
                           </p>
                           <a href="/donationCampaigns" style="
                             margin-top: 15px; 
                             padding: 10px 20px; 
                             background-color: #4CAF50; 
                             color: white; 
                             text-decoration: none; 
                             border-radius: 5px; 
                             font-size: 1rem;">
                             Donate
                           </a>
                           </div>
                                       
                           <div style="
                           display: flex; 
                           justify-content: center; 
                           align-items: center; 
                           flex-direction: column; 
                           padding: 20px; 
                           border: 1px solid #ddd; 
                           border-radius: 10px; 
                           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                           background-color: #fff; 
                           max-width: 400px; 
                           margin: auto;
                           margin-bottom: 15px;">
                           <h1 style="font-size: 1.5rem; color: #333;">Lucky </h1>
                           <p style="font-size: 1rem; color: #666;">Required Fund: 5000 BDT</p>
                           <p style="font-size: 1rem; color: #555; text-align: center;">
                             Help us control the pet population and promote healthier adoptions through spay and neuter programs.
                           </p>
                           <a href="/donationCampaigns" style="
                             margin-top: 15px; 
                             padding: 10px 20px; 
                             background-color: #4CAF50; 
                             color: white; 
                             text-decoration: none; 
                             border-radius: 5px; 
                             font-size: 1rem;">
                             Donate
                           </a>
                           </div>
                                `,
                        
                        showCancelButton: false,
                        focusConfirm: false,
                        confirmButtonText: 'Close'
                    });
                }
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
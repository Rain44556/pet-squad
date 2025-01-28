import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from '../SectionTitle/SectionTitle';
import CheckoutForm from '@/pages/PrivatePages/DonateAmount/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const DonateModal = () => {

    return (
          <div>
            <SectionTitle title={"Donate now!!"}
                        subTitle={"Your generosity can bring hope and change lives!"}>
            </SectionTitle>
              <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
            </div>
          </div>
    );
};

export default DonateModal;
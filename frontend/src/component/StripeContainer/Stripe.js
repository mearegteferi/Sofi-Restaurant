import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Footer from '../Footer';

const stripePromise = loadStripe('your-publishable-key');

const Stripe = () => {
  return (
    <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    <Footer />
    </div>
  );
};

export default Stripe;

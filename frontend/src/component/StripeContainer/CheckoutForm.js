// CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a token using the card element
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // You can now send the token and additional form data to your server for processing
      console.log(token, formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}
    >
      <h2 style={styles.heading}>
        Complete Your Purchase
      </h2>

      {/* Card Details */}
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Card details
        </label>
        <CardElement
          options={styles.cardElementOptions}
        />
      </div>

      {/* Additional Form Fields */}
      {['name', 'email', 'address', 'city', 'country', 'postalCode'].map((field) => (
        <div key={field} style={styles.formGroup}>
          <label style={styles.label}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            name={field}
            onChange={handleChange}
            value={formData[field]}
            style={styles.input}
          />
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe}
        style={styles.button}
      >
        Pay Now
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    fontFamily: 'Helvetica, sans-serif',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '16px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  cardElementOptions: {
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
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#6772e5',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
  },
};

export default CheckoutForm;

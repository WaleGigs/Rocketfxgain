import React, { useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Nav from './Nav';
const API_KEY = 'c52fd630-fe3d-4adb-a7fe-b9a66809f105';
const API_URL = 'https://api.commerce.coinbase.com/charges';

function PaymentButton() {
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CC-Api-Key': API_KEY,
        },
        body: JSON.stringify({
          name: 'Rocket GainFX',
          description: 'Deposit Your Cryptocurrencies',
          pricing_type: 'fixed_price',
          local_price: {
            amount: '10.00',
            currency: 'USD',
          },
          logo_url: "https://res.cloudinary.com/dm3qp8ucl/image/upload/v1683806345/cld-sample-4.jpg",
          redirect_url: 'https://your-website.com/checkout/success',
          cancel_url: 'https://your-website.com/checkout/cancel',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCheckoutUrl(data.data.hosted_url);
      } else {
        console.error('Failed to create charge.');
      }
    } catch (error) {
      console.error('Error occurred while creating charge.');
      console.error(error);
    }
  };

  return (
    <DefaultLayout>
      <Nav page="Deposits" />
      <div >
        <h1>Checkout Page</h1>
        <button onClick={handlePayment}>Pay with Coinbase Commerce</button>
        {checkoutUrl && (
          <p>
            To complete the payment, please proceed to{' '}
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Coinbase Commerce Checkout
            </a>
            .
          </p>
        )}
      </div>
    </DefaultLayout>
  );
}

export default PaymentButton;

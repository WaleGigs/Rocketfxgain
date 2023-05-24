import React, { useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
const API_KEY = '612eb1ac-5d72-4a13-8941-04cd7f9d4698';
const API_URL = 'https://api.commerce.coinbase.com/charges';
function Deposits() {
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [selected, setSelected] = useState('');
  const [currency, setCurrency] = useState('');
  // const [arry, setArry] = useState([]);
  let show = document.getElementById("show")
  let ayyy = []
  let time = new Date()
  let date = time.toDateString()
  let timing = time.toTimeString()
  let data = {
    currency,
    date,
    timing
  };
  const pppp = () => {

    ayyy.push(data)
    localStorage.setItem("data", JSON.stringify(ayyy))
  }
  const ooop = () => {
    pppp()
    let display = JSON.parse(localStorage.getItem("data"))

    for (let i = 1; i < display.length; i++) {
      const element = display[i];
      show.innerHTML += `
          <div class="juj">
              <span>Deposited : $<span>${element.currency}</span></span>
              
              <span>on : <span>${element.date}</span></span>
              
              <span>Time : <span>${element.timing}</span></span>
              
          </div>
      `
    }
  }
  ooop()
  const handlePayment = async () => {
    if (currency == "") {
      alert("No amount specified")
    } else {
      ooop()
    alert("Have a screenshot of the transaction history first")

    }
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
            amount: currency,
            currency: 'USD',
          },
          logo_url: "https://res.cloudinary.com/dm3qp8ucl/image/upload/v1684336910/IMG-20230504-WA0014_zpxjzi.jpg",
          redirect_url: 'http://localhost:5173/dashboard',
          cancel_url: 'http://localhost:5173/deposits',
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
    <div>
      <DefaultLayout>
        <Nav page={"Deposits"} />

        <div className='cop'>
          <h3>Deposits Your Cryptocurrencies here</h3>
          <p>Trust it's save with us</p>

          <div>
            <div className="d-flex mt-5 justify-content-between w-100 gap-3">
              <select onChange={(e) => setSelected(e.target.value)} class="form-select yy" aria-label="Default select example">
                <option selected>Choose your Currency</option>
                <option value="1">Dollars ($)</option>
              </select>

              <input type="number" placeholder='Amount to be deposited' onChange={(e) => setCurrency(e.target.value)} className="form-control  yy" />
            </div>
            <button className='btn btn-primary mt-2' onClick={handlePayment}>Deposit</button>
            {checkoutUrl && (
              <p>
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                  Deposit  Now
                </a>
              </p>
            )}
          </div>

          <div className='mt-5'>
            <h2 className='fs-3'>Transaction History</h2>
            <div id='show' className='mt-3'></div>

          </div>
        </div>







      </DefaultLayout>
    </div>
  );
}

export default Deposits;

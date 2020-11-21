const express = require('express');
const path = require('path');

// Middleware
const cors = require('cors');

// Import "dotenv" Lib => ONLY in Dev/Test Env
// -- this ensures our Secret Key remains private
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Import Stripe Library => passing Stripe Secret Key as arg.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Instantiate Express
const app = express();

// Set Port Number
const port = process.env.PORT || 5000;

// Parse Request Bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Serve Static Client Files => ONLY in Production Env
if (process.env.NODE_ENV === 'production') {
  // Allow static files to be served from: __dirname/client/build
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve index.html for any incoming HTTP GET Request
  // -- all static files are built into small modules/packages from index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Pass Data for Payment Charge to Stripe Service via Stripe Library
app.post('/payment', (req, res) => {
  // Extract required data from request.body & set currency
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  // Create Stripe payment charge & handle success & failure cases
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

// Listen For Connections
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on Port: ${port}`);
});

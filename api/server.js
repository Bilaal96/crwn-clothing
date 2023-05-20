require('dotenv').config();
const express = require('express');

// Middleware
const cors = require('cors');
const compression = require('compression');

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
app.use(
  cors({
    origin:
      (process.env.NODE_ENV === 'production' && process.env.ORIGIN) || '*',
  })
);

if (process.env.NODE_ENV === 'production') {
  // Apply compression to all files via Gzipping
  app.use(compression());
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

// Listen For Connections on "port"
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on Port: ${port}`);
});

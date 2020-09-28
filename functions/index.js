const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HRkX7B0K2yYMIw3B90nZ9goVdc0yGyutYDFYCYG2xAdNXobfgNyJr1O4WF3Dj5JFH193jDyTf4UvTlKcqyqZW0g00bdvq2x2X"
);

// - API

// - App config
const app = express();

// - Middlewear
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount --> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunits of the Currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2ed52/us-central1/api

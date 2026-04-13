const { onRequest } = require("firebase-functions/v2/https");
const stripe = require("stripe")("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");

exports.createPaymentIntent = onRequest({ cors: true }, async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(req.body.amount * 100),
      currency: "GBP",
      automatic_payment_methods: { enabled: true },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

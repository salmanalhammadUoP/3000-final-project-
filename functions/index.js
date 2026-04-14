const { onRequest } = require("firebase-functions/v2/https");
//stripe key 
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
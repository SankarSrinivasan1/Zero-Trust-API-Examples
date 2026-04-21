// What is wrong here
// No authentication
// No authorization
// No input validation
// No rate limiting
// Blind trust everywhere
// This is how most “internal APIs” look.

const express = require("express");
const app = express();

app.use(express.json());

app.get("/public", (req, res) => {
  res.json({ message: "This is public" });
});

app.get("/admin", (req, res) => {
  // No auth check at all
  res.json({ message: "Welcome admin" });
});

app.post("/transfer", (req, res) => {
  const { amount } = req.body;

  // No validation
  res.json({ success: true, amount });
});

app.listen(3000, () => console.log("Bad API running on 3000"));

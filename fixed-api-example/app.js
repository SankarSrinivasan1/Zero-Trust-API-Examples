const express = require("express");
const auth = require("./middleware/auth");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();
app.use(express.json());

app.get("/public", (req, res) => {
  res.json({ message: "Public OK" });
});

app.get("/admin", auth, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  res.json({ message: "Secure admin access" });
});

app.post("/transfer", auth, rateLimiter, (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  res.json({ success: true });
});

app.listen(3000, () => console.log("Secure API running"));

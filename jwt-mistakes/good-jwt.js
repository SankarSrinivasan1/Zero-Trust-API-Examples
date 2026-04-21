const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 1, role: "admin" },
  process.env.JWT_SECRET,
  { expiresIn: "15m" }
);

console.log(token);

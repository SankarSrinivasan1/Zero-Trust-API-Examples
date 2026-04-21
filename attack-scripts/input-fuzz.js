// Input Fuzzing Attack
// Missing validation
// Type confusion
// Unexpected inputs breaking logic
// Most bugs hide here.

const axios = require("axios");

const URL = "http://localhost:3000/transfer";

const payloads = [
  {},
  { amount: -100 },
  { amount: "DROP TABLE users" },
  { amount: null },
  { amount: 999999999999999999999 },
  { amount: "<script>alert(1)</script>" }
];

async function attack() {
  for (let payload of payloads) {
    try {
      const res = await axios.post(URL, payload);
      console.log("Response:", res.data);
    } catch (err) {
      console.log("Error:", payload);
    }
  }
}

attack();

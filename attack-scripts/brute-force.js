const axios = require("axios");

const URL = "http://localhost:3000/admin";

async function attack() {
  for (let i = 0; i < 1000; i++) {
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: "Bearer invalid-token-" + i
        }
      });

      console.log("SUCCESS:", res.data);
    } catch (err) {
      console.log("FAILED:", i);
    }
  }
}

attack();

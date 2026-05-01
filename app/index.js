const express = require("express");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("App funcionando 🚀");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log("App en puerto 3000");
});
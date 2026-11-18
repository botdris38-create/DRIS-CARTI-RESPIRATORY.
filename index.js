const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dashboard
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    project: "COSZI BATANG HENERAL",
    version: "1.0.0"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`COSZI BATANG HENERAL running on port ${PORT}`);
});

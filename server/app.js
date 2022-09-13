const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config({ path: "./dependency/.env" });
server_port = process.env.SERVER_PORT;
database_connection_url = process.env.DATABASE_CONNECTION_URL;

app.get("/", (req, res) => {
  res.send("Hello Folks");
});

app.listen(server_port, () => {
  console.log(`SERVER PORT RUNNING AT ${server_port}`);
});

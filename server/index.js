const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
//
//app.delete(`/api/houses/:id`, deleteHouse)
//app.post(`/api/houses`, createHouse)
//app.put(`/api/houses/:id`, updateHouse)

app.listen(4000, () => console.log("Server running on 4000"));

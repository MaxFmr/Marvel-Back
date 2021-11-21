const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
const apiKey = process.env.API_KEY;

//route personnages avec requête axios vers api (page d'accueil du front)
app.get("/characters", async (req, res) => {
  try {
    await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${req.query.skip}&name=${req.query.name}&apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//route route comics (page comics)

app.get("/comics", async (req, res) => {
  try {
    await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?title=${req.query.title}&apiKey=${apiKey}&skip=${req.query.skip}`
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//comics par id de personnages
app.get("/comics/:_id", async (req, res) => {
  try {
    console.log(req.params);
    await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params._id}?apiKey=${apiKey}`
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from marvel backend by Max" });
});
//------------------------------

app.listen(process.env.PORT, () => {
  console.log("Marvel server has started");
});

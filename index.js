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
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?name=${req.query.name}&apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        res.send(response.data);
        console.log(req.params.skip);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//route route comics (page comics)

app.get("/comics", async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?title=${req.query.title}&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data); // Affichera la réponse du serveur
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
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params._id}?apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data); // Affichera la réponse du serveur
        res.send(response.data);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//------------------------------

app.listen(3000, () => {
  console.log("Marvel server has started");
});

const express = require("express");
const axios = require("axios");

const app = express();

//route personnages avec requête axios vers api (page d'accueil du front)
app.get("/characters", async (req, res) => {
  try {
    axios
      .get(
        "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=EeXJWoEelJUypNAG"
      )
      .then((response) => {
        console.log(response.data); // Affichera la réponse du serveur
        res.send(response.data);
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
        "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=EeXJWoEelJUypNAG"
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
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params._id}?apiKey=EeXJWoEelJUypNAG`
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
  console.log("Server has started");
});
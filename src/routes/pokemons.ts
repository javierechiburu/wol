import express from "express";
import * as pokemonServices from "../services/pokemonServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Entro");
});

router.get("/:id", (req, res) => {
  const pokemon = pokemonServices.getEntry(Number(req.params.id));
  return pokemon !== null ? res.send(pokemonServices.getEntry) : res.send(404);
});

router.post("/", (_req, res) => {
  res.send("guardado");
});

export default router;

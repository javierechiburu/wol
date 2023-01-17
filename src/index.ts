import express from "express";
import pokemonsRouter from "./routes/pokemons";

const wol = require("wake_on_lan");
const macAddress = "00:1A:7D:DA:71:15";

const app = express();
app.use(express.json()); //middleware que transforma la request.body a un json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  wol.wake(macAddress, function (error: any) {
    if (error) {
      console.log("aa", error);

      res.send("pong false");
    } else {
      console.log(
        "Paquete Wake-on-LAN enviado al dispositivo con dirección MAC: " +
          macAddress
      );

      res.send({ responde: "pong" });
    }
  });
});

app.use("/api/pokemons", pokemonsRouter);

app.listen(PORT, () => {
  console.log(`server puerto ${PORT}`);
});

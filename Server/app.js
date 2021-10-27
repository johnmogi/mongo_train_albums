const express = require("express");
const cors = require("cors");
const albumsController = require("./controllers/albums-controller");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/albums", albumsController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));
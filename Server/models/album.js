const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema(
  {
    albumName: String,
    albumImage: String,
    artist: String,
    date: String,
  },
  { versionKey: false }
);

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;

import Song from "../models/songModel.js";
// Example controller function
const getStatement = (req, res) => {
  const statement = "This is a sample statement";
  res.status(200).json({ statement });
};

const createSong = async (req, res) => {
    console.log("sent body ",req)
  const song = new Song(req.body);
  try {
    await song.save();
    res.status(201).send(song);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).send();
    }
    res.send(song);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!song) {
      return res.status(404).send();
    }
    res.send(song);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).send();
    }
    res.send(song);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default {
  getStatement,
  createSong,
  getAllSongs,
  getSong,
  updateSong,
  deleteSong,
};


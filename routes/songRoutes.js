import express from "express";
import songController from "../controllers/songController.js";
const router = express.Router();

router.get("/fetch", songController.getStatement);
router.post("/songs", songController.createSong);
router.get("/songs", songController.getAllSongs);
router.get("/songs/:id", songController.getSong);
router.put("/songs/:id", songController.updateSong);
router.delete("/songs/:id", songController.deleteSong);

export default router;

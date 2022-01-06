import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";
const videoRouter = express.Router();

export default videoRouter;

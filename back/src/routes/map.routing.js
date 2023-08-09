import { Router } from "express";
import { getDep } from "../controllers/map.js";

export const map = Router()

map.get("/getDepList", getDep);

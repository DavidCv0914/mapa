import { Router } from "express";
import { getDep, getMun } from "../controllers/map.js";

export const map = Router()

map.get("/getDepList", getDep);
map.get("/getMunList", getMun);

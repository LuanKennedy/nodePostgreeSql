import express from "express"
import {getTurmas} from "../controllers/turma.js"

const router = express.Router()
router.get("/", getTurmas)

export default router;
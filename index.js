import express from "express"
import turmaRoutes from "./routes/turmas.js"
import cors from "cors"

//index.js
const db = require("./db");

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", turmaRoutes )
app.listen(8800)
import express from "express"
import cors from "cors"
import { getData } from "./db"

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const data = getData(req.query)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server listening at Port: ${port}`)
})
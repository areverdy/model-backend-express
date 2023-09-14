import express from "express"
import "dotenv/config"
import cors from "cors"

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT as string) : 3030
app.use(cors())

app.get('/hello', (req, res) => {
  res. send('Hello World!')
})

app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
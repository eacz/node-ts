import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('Hello from ts')
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Running on port ${port}`);
})
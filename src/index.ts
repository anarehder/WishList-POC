import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get('/health', (_req, res) => res.send('OK!'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
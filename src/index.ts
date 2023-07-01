import express from "express";
import dotenv from "dotenv";
import router from "@/routers/index.routes";

dotenv.config();

const app = express();

app.get('/health', (_req, res) => res.send('OK!'));
app.use(router)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
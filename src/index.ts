import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "@/routers/index.routes";
import { handleApplicationErrors } from "./middlewares/error-handling.middleware";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.get('/health', (_req, res) => res.send('OK!'));
app.use(router);
app.use(handleApplicationErrors);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
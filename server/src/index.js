import express from "express";
import { sessionMiddleware } from "./middlewares/session.js";
import rateLimiter from "./middlewares/rateLimit.js";
import speedLimiter from "./middlewares/speedLimiter.js";
import router from "./routes/index.js";

const app = express();

app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);
app.use(speedLimiter);

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
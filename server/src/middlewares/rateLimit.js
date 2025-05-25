import rateLimit from "express-rate-limit";
import { HTTP_MESSAGES } from "../utils/httpMessages.js";

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  message: JSON.stringify({ message: HTTP_MESSAGES[429] }),
  statusCode: 429,
  handler: (_, res) => res.status(429).json({ message: HTTP_MESSAGES[429] }),
  skip: (req) => {
    if (req.method === "OPTIONS") return true;
    return Boolean(req.session.user);
  },
});

export default rateLimiter;
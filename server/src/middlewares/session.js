import session from "express-session";
import { RedisStore } from "connect-redis"
import { createClient } from "redis"

const redisClient = createClient({ url: "redis://redis:6379" });
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
  prefix: "sparrow:",
});

export const sessionMiddleware = session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  store: redisStore,
  saveUninitialized: false,
  cookie: {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
  },
});

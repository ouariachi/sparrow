import slowDown from "express-slow-down";

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 1,
  delayMs: () => 500,
});

export default speedLimiter; 
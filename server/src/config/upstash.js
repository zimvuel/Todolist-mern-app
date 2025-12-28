import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export default ratelimit;
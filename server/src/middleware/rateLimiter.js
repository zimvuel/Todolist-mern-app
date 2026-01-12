import ratelimit from "../config/upstash.js";

const rateLimiter = async (_, res, next) => {
    try {
        const {success} = await ratelimit.limit("user-id");
        
        if(!success){
            return res.status(429).json({message: "too many request"});
        }

        next();
    } catch (error) {
        console.log("ratelimiter error", error);
        next(error);
    }
}

export default rateLimiter;
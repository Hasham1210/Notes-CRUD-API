import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("my-limitljey")

        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." 
            });
        }
    next();
    }
    catch (error) {
    console.error("Rate limiting error:", error.message);
    next(error);
}

};
export default rateLimiter;
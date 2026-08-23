
// import {Ratelimit} from "@upstash/ratelimit";
// import {Redis} from "@upstash/redis";

// import dotenv from "dotenv";
// dotenv.config();

// //Creating a ratelimiter that allows 10 request per 20 seconds
// const rateLimite = new Ratelimit({
//   redis:Redis.fromEnv(),    
//   limiter:Ratelimit.slidingWindow(5, "10 s"),  
  
// })
// export default rateLimite   
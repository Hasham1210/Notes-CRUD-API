// import mongoose from "mongoose";
// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
        
//         console.log("MongoDB connected successfully");

//     }
//     catch (error) {
//         console.error("MongoDB connection failing!!:", error.message);
//     }

// };                  
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to:", process.env.MONGO_URI);

        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");
        console.log("Host:", conn.connection.host);
    } catch (error) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error(error);
    }
};
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();


//Midelewre:
app.use(express.json());//Aloows access to req.body in the routes
app.use(rateLimiter);  

app.use ((req, res, next) => {
    console.log('Request received at ' + new Date().toISOString());
    next();
});     

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});


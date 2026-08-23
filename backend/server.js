import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import cors from "cors";
import "dotenv/config";
import express from "express";

import { connectDB } from "./src/config/db.js";
import notesRoutes from "./src/routes/notesroutes.js";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error(
      "❌ Server startup failed because MongoDB could not connect."
    );

    process.exit(1);
  }
};

startServer();
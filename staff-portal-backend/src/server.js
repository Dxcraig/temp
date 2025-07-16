import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000', // Alternative local
    'https://main.d6vlokc3yxo2r.amplifyapp.com/', // Replace with your actual Amplify URL
    'https://main.d6vlokc3yxo2r.amplifyapp.com/' // Replace with your actual Amplify URL
  ],
  credentials: true
}));
app.use("/api", authRoutes);
app.use("/users", userRoutes);
app.use(express.static(path.join(__dirname, "../public")));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(port, '0.0.0.0', () =>
  console.log(`STAFF PORTAL listening at http://0.0.0.0:${port}`)
);

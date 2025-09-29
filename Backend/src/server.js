import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'; 
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();
app.use(express.json());
// Routes
app.use("/api/notes", notesRoutes);

// Basic route
app.get("/", (req, res) => {
    res.json({ message: "Backend server is running from src!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from "express";

const router = express.Router();

// GET all notes
router.get("/", (req, res) => {
    res.json({ message: "Get all notes" });
});

// POST create a new note
router.post("/", (req, res) => {
    res.json({ message: "Note created Successfully" });
});

// GET a specific note by ID
router.get("/:id", (req, res) => {
    res.json({ message: `Get note with ID: ${req.params.id}` });
});

// PUT update a note by ID
router.put("/:id", (req, res) => {
    res.json({ message: `Update note with ID: ${req.params.id}` });
});

// DELETE a note by ID
router.delete("/:id", (req, res) => {
    res.json({ message: `Delete note with ID: ${req.params.id}` });
});

export default router;
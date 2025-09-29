import Note from "../models/noteModel.js";
export async function getAllNotes(req,res) {
    try{
        const notes=await Note.find({});
        res.status(200).res.json(notes);
    }
    catch(err){
        console.error("Error in getAllNotes",err);
        res.status(500).json({message:"Server error"});
    }
}
export async function createNote(req,res) {
    try{
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully",note:newNote});
       }
       catch(err){
        console.error("Error in getAllNotes",err);
        res.status(500).json({message:"Server error"});
    }
    }

export async function updateNote(req,res) {
    try{
        const{title,content}=req.body
        await Note.findByIdAndUpdate(req.params.id,{title,content});
        
        if(!updateNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({message:"Note updated successfully"});
    }catch(err){
        console.error("Error in getAllNotes",err);
        res.status(500).json({message:"Server error"});
    }
}
export async function deleteNote(req,res) {
    try{
        const deleteNote=await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({message:"Note deleted successfully"});
    }
    catch(err){
        console.error("Error in getAllNotes",err);
        res.status(500).json({message:"Server error"});
    }
}
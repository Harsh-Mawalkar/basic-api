const express = require('express');
var notesRouter = express.Router()
const NoteModel = require('../../db/models/note.model');


//get all notes**********

notesRouter.get('/',async(req,res)=>{
   try{
    const notes = await NoteModel.find({});
    res.json({
       notes,
    });
   }
   catch(err){
    console.error(err);
    res.status(500).json({ error:"An error occured while fetching notes"});
   }
});


//add all notes**********
notesRouter.post('/',async(req,res)=>{
    console.log(req.body);
    const  newNote =new NoteModel(req.body);
    newNote.save().then((savedNote)=>{
        res.json({
            note:savedNote,
         });
    })
     
    
 });


 //add  notes by id**********

 notesRouter.get('/:id', async (req, res) => {
   const noteId = req.params.id;
   try {
     const note = await NoteModel.findById(noteId);
     if (!note) {
       return res.status(404).json({ error: 'Note not found' });
     }
     res.json({
       reply: "note by id",
       note
     });
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'An error occurred while fetching the note' });
   }
 });
 

//delete  notes by id**********

notesRouter.delete('/:id', async (req, res) => {
   const noteId = req.params.id;
   try {
     const note = await NoteModel.findByIdAndDelete(noteId);
     if (!note) {
       return res.status(404).json({ error: 'Note not found' });
     }
     res.json({
       reply: "deleted",
     });
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'An error occurred while deleting the note' });
   }
 });



//Update  notes by id**********


notesRouter.put('/:id', async (req, res) => {
   const noteId = req.params.id;
   const updatedBody = req.body; // Corrected to req.body
 
   try {
     const updatedNote = await NoteModel.findByIdAndUpdate(noteId, updatedBody, { new: true });
     if (!updatedNote) {
       return res.status(404).json({ error: 'Note not found' });
     }
     res.json({
       reply: "Updated the note",
       note: updatedNote,
     });
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'An error occurred while updating the note' });
   }
 });




module.exports = {
notesRouter
}


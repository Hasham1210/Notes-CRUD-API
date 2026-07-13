import express from 'express';
const router =express.Router();

import {getAllNotes} from "../controllers/notesController.js";
import {createNotes} from "../controllers/notesController.js";
import {updateNotes} from "../controllers/notesController.js";
import {deleteNotes} from "../controllers/notesController.js";


router.get("/",getAllNotes);

router.post("/",createNotes);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);

export default router

 



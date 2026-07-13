import mongoose from 'mongoose';

//Schema for my Notes data to be stored as json..

const noteSchema = new mongoose.Schema({
    title: {
        type: String,     
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
    {timestamps: true}
);


 const Note = mongoose.model('Note', noteSchema);
export default Note;

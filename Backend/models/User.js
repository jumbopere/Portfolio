const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: {
        type: String,
        required: true
      
    },
    studentNumber: {
        type: String,
        required: true
       
    },
    
    studentAddress: {
        type: String,
        required: true
    },
    studentEntry: {
        type: String,
     required: true
    },
    studentYear: {
        type: String,
        required:true
    },
   studentVerfication : {
        type: Boolean,
        required: true,
        default: true
    },
    Date: { type: Date, required: true, default: Date.now },

}
);




const Crud = mongoose.model('schoolStudents', studentSchema);


module.exports = Crud
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: {
        type: String
      
    },
    studentNumber: {
        type: String
       
    },
    
    studentAddress: {
        type: String,
        
    },
    studentEntry: {
        type: String,
     
    },
    studentYear: {
        type: String
    },
   studentVerfication : {
        type: Boolean,
       
        default: false
    },
    Date: { type: Date, required: true, default: Date.now }

}
);




const Crud = mongoose.model('schoolStudents', studentSchema);


module.exports = Crud
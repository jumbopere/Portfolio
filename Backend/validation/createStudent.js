const Validator = require('validator');
const isEmpty = require('../is-empty')

module.exports = function createStudent(data) {
    let errors = {};
    data.studentName = !isEmpty(data.studentName) ? data.studentName : '';
    data.studentNumber = !isEmpty(data.studentNumber) ? data.studentNumber : '';
    data.studentAddress = !isEmpty(data.studentAddress) ? data.studentAddress : '';
    data.studentEntry = !isEmpty(data.studentEntry) ? data.studentEntry : '';
    data.studentYear = !isEmpty(data.studentYear) ? data.studentYear : '';

    if(!Validator.isLength(data.studentName, { min: 2, max: 30 })) {
        errors.studentName = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.studentName)) {
        errors.studentName = 'Name field is required';
    }

    if(!Validator.isNumeric(data.studentNumber)) {
        errors.studentNumber = 'Student Number is invalid';
    }

    if(Validator.isEmpty(data.studentNumber)) {
        errors.studentNumber = 'Student Number is required';
    }

   
    if(Validator.isEmpty(data.studentEntry)) {
        errors.studentEntry = 'Student Entry is required';
    }

    if(Validator.isEmpty(data.studentAddress)) {
        errors.studentAddress = 'Student Address is required';
    }


    if(Validator.isEmpty(data.studentYear)) {
        errors.studentYear = 'Student Year is required';
    }

    if(!Validator.isLength(data.studentYear, {min:4, max:4})) {
        errors.studentYear = 'Year is Invalid';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
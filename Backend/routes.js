const express = require('express');
const crudRoutes = express.Router();
const Crud = require('./models/User');
const createStudent = require('./validation/createStudent')

crudRoutes.route('/').get((req, res) => {
    Crud.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

crudRoutes.route('/edit-student/:id').get((req, res) => {
    Crud.findById(
        req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

crudRoutes.post('/add',(req, res) => {
    const { errors, isValid } = createStudent(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Crud.findOne({
        studentNumber: req.body.studentNumber
    }).then(user => {
        if(user) {
            return res.status(400).json({
                studentNumber: 'Student already exists'
            });
        }
        else {
      
            const newStudent = new Crud({
                studentName: req.body.studentName,
                studentAddress: req.body.studentAddress,
                studentNumber: req.body.studentNumber,
                studentEntry: req.body.studentEntry,
                studentYear: req.body.studentYear,
                
            });
                
                           
                            newStudent
                                .save()
                                .then(user=> {
                                    if (!user) {
                                        return res.status(400).send({
                                            message: 'an errror occured'
                                        })
                                    }
                                    res.json(user)
                                    
                                }).catch(err=>{
                                    console.log(err); 
                                })
                        
                    
                
            
        }
    });
 
})



   

crudRoutes.route('/update/:id').post((req, res) => {
    Crud.findById(req.params.id, (err, data) => {
        if (!data) res.status(404).send("Student is not found");
        else {
            data.studentName = req.body.studentName;
            data.studentAddress = req.body.studentAddress;
            data.studentNumber = req.body.studentNumber;
            data.studentEntry = req.body.studentEntry;
            data.studentYear = req.body.studentYear;
            data.studentVerification = req.body.studentVerification;

            data.save().then(data => {
                res.json('Data student is updated!');
            }).catch(err => {
                res.status(400).send("Update isn't possible");
            });
        }
    });
});

crudRoutes.route('/delete/:id').delete((req, res) => {
    Crud.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(`Student ${data.studentName} was deleted`);
    })
})

module.exports = crudRoutes
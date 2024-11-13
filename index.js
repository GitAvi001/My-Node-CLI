const mongoose =require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connecting to the db
const db = mongoose.connect('mongodb://localhost:27017/studentcli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//Importing modules

const Student = require('./models/student'); 

//Add a student 
const addStudent=(student)=>{

    Student.create(student).then(student=>{

        console.info('New Student Added');
        db.close();
    })
}

// Find a Student
const findStudent = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Student.find({$or: [{firstname: search}, {lastname: search}]})
      .then(student => {
        console.info(student);
        console.info(`${student.length} matches`);
        db.close();
      });
  }
  
  // Update a Student
  const updateStudent = (_id, student) => {
    Student.update({ _id }, student)
      .then(student => {
        console.info('Student Updated');
        db.close();
      });
  }
  
  // Remove a Student
  const removeStudent = (_id) => {
    Student.remove({ _id })
      .then(student => {
        console.info('Student Removed');
        db.close();
      });
  }
  
  // List Students
  const listStudents = () => {
    Student.find()
      .then(students => {
        console.info(students);
        console.info(`${students.length} Students`);
        db.close();
      });
  }



  //Exporting all methods

  module.exports={

    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudents,
  }
#!/usr/bin/env node
 
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} = require('./index');


// Customer Questions
const questions = [
    {
      type: 'input',
      name: 'firstname',
      message: 'Customer First Name'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Customer Last Name'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Customer Phone Number'
    },
    {
      type: 'input',
      name: 'stream',
      message: 'Customer Email Address'
    }
  ];

  program 
  .version('1.0.0')
  .alias('v')
  .description('Student Management System')
// program
//   .help(`
// Function                  Alias        Description
// version                   v            To check the version of the student-cli
// student-cli add            a            To add new studnets in the database
// student-cli list           l            To check all the student in the database
// student-cli update [_ID]   u            To update details for specific students in the database
// student-cli remove [_ID]   r            To remove details for specific students in the database
// student-cli find [NAME]    f            To find a specific students in the database
// `)

// How the program goes
//   .command('add <firstname> <lastname> <school> <stream>')
//   .alias('a')
//   .description('Add a student')
//   .action((firstname, lastname, school, stream) => {
//     addCustomer({firstname, lastname, school, stream});
//   });


//Add a student
program
  .command('add')
  .alias('a')
  .description('Add a student')
  .action(()=>{
    prompt(questions).then(answers=>addCustomer(answers));
  });

//Find a student 
program
  .command('find <name>')
  .alias('f')
  .description('Find a student')
  .action(name => findStudent(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a student')
  .action(_id => {
    prompt(questions).then(answers => updateStudent(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a student')
  .action(_id => removeStudent(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listStudents());

program.parse(process.argv);
const inquirer = require('inquirer');
// const shape = require('./lib/shapes.js');
const fs = require('fs');
const {Triangle} = require('./lib/triangle');
const {Square} = require('./lib/square');
const {Circle} = require('./lib/circle');


inquirer
    .prompt(
    [
        {
            type: 'input',
            name: 'characters',
            message: 'What text should go inside of the svg(at most 3 characters)?',
            validate: function (answer) {
                if (answer.length > 3) {
                    return false;
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be(must be a valid color or a hexadecimal)?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape should the logo be?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the svg be?',
        }
    ]
)
.then((answers) => {
    if(answers.shape === 'circle' ){
        const newCircle = new Circle(
            answers.characters,
            answers.textColor,
            answers.shape,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', newCircle.render(newCircle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else if (answers.shape === 'square'){
        const newSquare = new Square(
            answers.characters,
            answers.textColor,
            answers.shape,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', newSquare.render(newSquare), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else if(answers.shape === 'triangle'){
        const newTriangle = new Triangle(
            answers.characters,
            answers.textColor,
            answers.shape,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', newTriangle.render(newTriangle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else {
        console.log('oh dear...');
    }
    console.log(answers);
    
})


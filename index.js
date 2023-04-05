const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./generateSVG');

const questions = [
    {
        type: 'input',
        message: 'Enter the text for your logo (Between 1-3 characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a color or hex code for the text color',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please select a shape for your logo',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a color or a hex code for the color of the shape',
        name: 'shapeColor',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Generated ${fileName}`),
        );
    };
    
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        const data = JSON.stringify(response, null, 1);
        writeToFile('response.json', data);
        const svgFileContent = generateSVG(JSON.parse(data));
        
        console.log(svgFileContent); 
        writeToFile(`./examples/logo.svg`, svgFileContent);
    })
        .catch((err) => {
            console.error(err);
        });
}

init();
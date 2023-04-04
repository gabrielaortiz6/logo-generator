const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');

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
        err ? console.error(err) : console.log('File was created!')
    );
};

function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        const data = JSON.stringify(response, null, 1);
        writeToFile('response.json', data);
        const svgFileContent = generateSVG(JSON.parse(data));
        writeToFile(`${this.shape}.svg`, svgFileContent);

        console.log(svgMarkup); // Output the SVG markup to the console

       //fs.writeFileSync('output.svg', svgMarkup); // Save the SVG to a file
    })
        .catch((err) => {
            console.error(err);
        });
}

init();
# Logo Generator

## Description

This project creates a command line app that will generate a logo based on a few user inputs, namely text, text color, shape, and shape color. After the user has entered their responses, a .svg file is created using these inputs, which can then be viewed in a browser. This app uses inquirer for the prompts and jest for testing. 

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

![Google Drive Video](https://drive.google.com/file/d/1c0NiFTop-87JJhRRNY-33uFRt2pCV8_B/view)

![Sample logo](/Users/marilinlago/Desktop/bootcamp/weekly-challenges/logo-generator/examples/screenshot.png)
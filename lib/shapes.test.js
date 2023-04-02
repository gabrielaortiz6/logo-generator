const Shapes = require('./shapes.js');

//edit tests based on the new functions

// i will have three suit of tests (Triangle, Circle, Square)
//for each suite, there will be 2 tests
//1.  see if each shape can render a colored shape based on setcolor function
//2.  does she shape accept a fillcolor param
describe('Shapes', () => {
    describe('Triangle', () => {
        it('should render a blue triangle', () => {
            const shape = new Triangle(100, 100, 50);
            shape.setColor("blue");

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    describe('Circle', () => {
        it('should render a red circle', () => {
            const shape = new Circle(150, 100, 80);
            shape.setColor("red");

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        })
    })
    describe('Square', () => {
        it('should render a green square', () => {
            const shape = new Square(10, 10, 80, 80);
            shape.setColor("green");

            expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="green" />');
        })
    })
})
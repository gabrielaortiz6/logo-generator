const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('Blue Triangle', () => {
        it('should render a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    describe('Red Circle', () => {
        it('should render a red circle', () => {
            const shape = new Circle();
            shape.setColor("red");

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        })
    })
    describe('Green Square', () => {
        it('should render a green square', () => {
            const shape = new Square();
            shape.setColor("green");

            expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="green" />');
        })
    })
})
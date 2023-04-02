const Validate = require('./validate.js');

describe('Validate', () => {
    describe('Text Input Min', () => {
        it('should return false when passed an empty string for text input', () => {
        const input = '';
        const validator = new Validate();
        const result = validator.isInput(input);

        //assert what should happen
        expect(result).toEqual(false);
        })
    })
    describe('Text Input Max', () => {
        it('should return false when input is more than 3 characters', () => {
        const input = 'svgh'
        const validator = new Validate();
        const result = validator.isInput(input);

        //assert what should happen
        expect(result).toEqual(false);
    });
});
describe('Text Input Valid', () => {
    it('should return true when input is between 1 and 3 characters', () => {
    const input = 'svg';
    const validator = new Validate();
    const result = validator.isInput(input);

    //assert what should happen
    expect(result).toEqual(true);
});
});
})

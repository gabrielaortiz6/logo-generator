class Validate {}

Validate.prototype.isInput = (input) => {
    if (input.length == "" || input.length > 3) {
        return false;
    } else if (input.length >= 1 && input.length <= 3) {
        return true;
    }

    //write code to see if input has at least one character entered

}

// TODO: Export the Validate class from this file.

module.exports = Validate;

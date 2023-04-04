class Shapes {
    constructor(x, y, color,) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.svgElement = null;
    }

    setColor(color) {
        this.color = color;

        if (this.svgElement) {
            this.svgElement.setAttribute('fill', this.color);
          }
    }

    render() {
        //implement rendering logic
    }
}

class Circle extends Shapes {
    // constructor(x, y, radius, color,) {
    //     super(x, y, color);
    //     this.radius = radius;
    // }

    render() {
        const circleString = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
       return circleString;
    }
}

class Square extends Shapes {

    render() {
       const squareString = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
       return squareString;
    }
}

class Triangle extends Shapes {
    // constructor(x, y, base, height, color) {
    //     super(x, y, color);
    //     this.base = base;
    //     this.height = height;
    // }
        render() {
            const triangleString = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
            return triangleString;
         }
}

module.exports = {Triangle, Circle, Square};
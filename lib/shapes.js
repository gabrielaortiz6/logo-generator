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
    constructor(x, y, radius, color,) {
        super(x, y, color);
        this.radius = radius;
    }

    render() {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle.setAttribute('cx', this.x);
        circle.setAttribute('cy', this.y);
        circle.setAttribute('r', this.radius);

        //add color
        this.setColor(this.color);

        const svg = document.getElementById('canvas');
        svg.appendChild(circle);

        this.svgElement = circle;
    }
}

class Square extends Shapes {
    constructor(x, y, size, color) {
        super(x, y, color);
        this.size = size;
    }

    render() {
        const square = document.createElementNS('http://www.w3.org/2000/svg', 'rec');
        
        // set the position and size of the square based on its position and size
        square.setAttribute('x', this.x - (this.size / 2));
        square.setAttribute('y', this.y - (this.size / 2));
        square.setAttribute('width', this.size);
        square.setAttribute('height', this.size);

        //add color
        this.setColor(this.color);

        const svg = document.getElementById('canvas');
        svg.appendChild(square);

        this.svgElement = square;
    }
}
class Triangle extends Shapes {
    constructor(x, y, base, height, color) {
        super(x, y, color);
        this.base = base;
        this.height = height;
    }

    render() {
        const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

        // set the vertices of the triangle based on its position, base, and height
        const vertices = `${this.x},${this.y} ${this.x + this.base},${this.y} ${this.x + (this.base / 2)},${this.y + this.height}`;
        triangle.setAttribute('points', vertices);

        //add color
        this.setColor(this.color);

        // add the triangle to the SVG document
        const svg = document.getElementById('canvas');
        svg.appendChild(triangle);

        this.svgElement = triangle;
    }
}

module.exports = Shapes;

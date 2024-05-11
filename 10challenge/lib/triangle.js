const Shapes = require('./shapes');


class Triangle extends Shapes {
    constructor(characters, color, shape, shapeColor){
        super(color);
            this.shape = shape;
            this.color = color;
            this.characters = characters;
            this.shapeColor = shapeColor;
        
    }

    render(triangle) {
        return `
        <svg version="1.1" height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 150,190 50,190" style="fill:${triangle.shapeColor};stroke:purple;stroke-width:3" />
        <text x="100" y="175" text-anchor="middle" fill="${triangle.color}" font-size="40">${triangle.characters}</text>
        </svg>`
    };
}

module.exports = {Triangle};
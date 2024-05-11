const Shapes = require('./shapes');


class Square extends Shapes {
    constructor(characters, color, shape, shapeColor) {
        super(color);
        this.shape = shape;
        this.color = color;
        this.characters = characters;
        this.shapeColor = shapeColor;

    }

    render(square) {
        return `
        <svg width="300" height="170" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="10" y="10"
        style="fill:'${square.color}'';stroke:pink;stroke-width:5;opacity:0.5" />
        <text x="85" y="115" font-size="60" text-anchor="middle" fill="${square.color}">${square.characters}</text>
        </svg>`          
    };
}

module.exports = { Square };
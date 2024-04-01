class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`The perimeter of the ${this.name} is ${perimeter}`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength); 
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`The area of the square is ${area}`);
  }
}

// Create a square instance
const square = new Square(5);
square.calcPerimeter(); 
square.calcArea(); 

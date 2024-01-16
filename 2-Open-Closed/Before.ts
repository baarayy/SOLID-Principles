class Rectangle {
  public width: number
  public height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
}

class Circle {
  public radius: number

  constructor(radius: number) {
    this.radius = radius
  }
}

class Square {
  public side: number

  constructor(side: number) {
    this.side = side
  }
}

class ShapePrinter {
  public printRectangleArea(rectangle: Rectangle) {
    console.log('The area of the rectangle is ' + rectangle.width * rectangle.height)
  }

  public printCircleArea(circle: Circle) {
    console.log('The area of the circle is ' + Math.PI * circle.radius * circle.radius)
  }

  public printSquareArea(square: Square) {
    console.log('The Are of the square is ' + square.side * square.side)
  }
  public drawShape(shape: any) {
    if (shape instanceof Rectangle) {
      this.printRectangleArea(shape)
    } else if (shape instanceof Circle) {
      this.printCircleArea(shape)
    } else if (shape instanceof Square) {
      this.printSquareArea(shape)
    }
  }
}
const square = new Square(2)
new ShapePrinter().drawShape(square)
const rectangle = new Rectangle(2, 3)
new ShapePrinter().drawShape(rectangle)
const circle = new Circle(2)
new ShapePrinter().drawShape(circle)

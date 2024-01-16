abstract class shape {
  abstract draw(): void
}

class CircleAfter extends shape {
  public radius: number
  constructor(radius: number) {
    super()
    this.radius = radius
  }
  draw(): void {
    console.log('The area of the circle is ' + Math.PI * this.radius * this.radius)
  }
}

class RectangleAfter extends shape {
  public width: number
  public height: number
  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }
  draw(): void {
    console.log('The area of the rectangle is ' + this.width * this.height)
  }
}

class SquareAfter extends shape {
  public side: number
  constructor(side: number) {
    super()
    this.side = side
  }
  draw(): void {
    console.log('The Are of the square is ' + this.side * this.side)
  }
}

class ShapePrinterAfter {
  public drawShape(shape: shape) {
    shape.draw()
  }
}

const squareAfter: shape = new SquareAfter(2)
const rectangleAfter: shape = new RectangleAfter(2, 3)
const circleAfter: shape = new CircleAfter(2)

squareAfter.draw()
rectangleAfter.draw()
circleAfter.draw()

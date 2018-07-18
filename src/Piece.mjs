export default class Piese {
  constructor({ ctx, width, height, color, speed, direction}) {
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.width = width
    this.height = height
    this.speed = speed
    this.direction = null
    this.color = color
  }



  move() {
    if (this.speed < 0 || this.direction === null) return
    let newX = this.x + this.speed * Math.cos(this.direction * (Math.PI / 180))
    let newY = this.y + this.speed * Math.sin(this.direction * (Math.PI / 180))

    this.render(newX, newY)
  }

  render(x, y) {
    this.x = x
    this.y = y
    const path = new Path2D()
    path.moveTo(x, y)
    return path
  }
}
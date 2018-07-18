export default class Piese {
  constructor({ ctx, width, height, color, speed, direction}) {
    this.ctx = ctx
    this.x = this.width
    this.y = this.height
    this.width = width
    this.height = height
    this.speed = speed
    this.direction = null
    this.color = color
  }



  move(scene) {
    if (this.speed < 0 || this.direction === null) return
    let newX = this.x + this.speed * Math.cos(this.direction * (Math.PI / 180))
    let newY = this.y + this.speed * Math.sin(this.direction * (Math.PI / 180))


    if (newX < this.width / 2) {
      newX = this.width / 2
      this.direction = 180 - this.direction
    } else if (newX + this.width / 2 > scene.width) {
      newX = scene.width - this.width / 2
      this.direction = 180 - this.direction
    }

    if (newY < this.height / 2) {
      newY = this.height / 2
      this.direction = 360 - this.direction
    } else if (newY + this.height / 2 > scene.height) {
      newY = scene.height - this.height / 2
      this.direction = 360 - this.direction
    }

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
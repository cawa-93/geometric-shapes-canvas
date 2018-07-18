export default class Piese {
  constructor({ scene, width, height, color, speed, direction, x, y}) {
    this.scene = scene
    this.x = this.width
    this.y = this.height
    this.width = width
    this.height = height
    this.speed = speed
    this.direction = direction
    this.color = color
    this.x = x
    this.y = y
  }



  move() {
    if (this.speed < 0 || this.direction === null) return
    let newX = this.x + this.speed * Math.cos(this.direction * (Math.PI / 180))
    let newY = this.y + this.speed * Math.sin(this.direction * (Math.PI / 180))


    if (newX < this.width / 2) {
      newX = this.width / 2
      this.direction = 180 - this.direction
    } else if (newX + this.width / 2 > this.scene.width) {
      newX = this.scene.width - this.width / 2
      this.direction = 180 - this.direction
    }

    if (newY < this.height / 2) {
      newY = this.height / 2
      this.direction = 360 - this.direction
    } else if (newY + this.height / 2 > this.scene.height) {
      newY = this.scene.height - this.height / 2
      this.direction = 360 - this.direction
    }

    this.render(newX, newY)
    return this
  }

  render(x, y, path = null) {
    this.x = x
    this.y = y
    if (path) {
      this.scene.ctx.fillStyle = this.color
      this.scene.ctx.fill(path)
    }
    return this
  }
}
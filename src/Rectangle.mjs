import Piece from "./Piece.mjs";

export default class Reactangle extends Piece {
  render(x, y) {
    const path = super.render(x, y)
    path.moveTo(...this.vertices[0])
    path.lineTo(...this.vertices[1])
    path.lineTo(...this.vertices[2])
    path.lineTo(...this.vertices[3])
    path.lineTo(...this.vertices[0])

    this.ctx.fillStyle = this.color
    this.ctx.fill(path)
  }

  get vertices() {
    const w = this.width / 2
    const h = this.height / 2
    return [
      [this.x - w, this.y - h],
      [this.x + w, this.y - h],
      [this.x + w, this.y + h],
      [this.x - w, this.y + h],
    ]
  }
}
import Piece from "./Piece.mjs";

export default class Reactangle extends Piece {
  constructor (params) {
    super(params)
  }

  render(x, y) {
    const path = super.render(x, y)
    path.lineTo(x+this.width, y)
    path.lineTo(x+this.width, y+this.height)
    path.lineTo(x, y+this.height)
    path.lineTo(x, y)

    this.ctx.fillStyle = this.color
    this.ctx.fill(path)
  }
}
import Piece from "./Piece.mjs";

export default class Circle extends Piece {
  constructor (params) {
    params.height = params.width
    super(params)
  }

  render(x, y) {
    const path = super.render(x, y)
    path.arc(x, y, this.width/2, 0, 2*Math.PI)

    this.ctx.fillStyle = this.color
    this.ctx.fill(path)
  }
}
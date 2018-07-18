import Piece from "./Piece.mjs";
import { SHOW_OUTLINES } from "./config.mjs";

export default class Circle extends Piece {
  constructor (params) {
    params.height = params.width
    super(params)
  }

  render(x, y) {
    const path = new Path2D()
    path.moveTo(x, y)
    path.arc(x, y, this.width/2, 0, 2*Math.PI)

    if (SHOW_OUTLINES) {
      const outlinePath = new Path2D()
      const w = this.width / 2
      const h = this.height / 2
      const outline = [
        [x - w, y - h],
        [x + w, y - h],
        [x + w, y + h],
        [x - w, y + h],
      ]
      outlinePath.moveTo(...outline[0])
      outlinePath.lineTo(...outline[1])
      outlinePath.lineTo(...outline[2])
      outlinePath.lineTo(...outline[3])
      outlinePath.lineTo(...outline[0])
      this.scene.ctx.stroke(outlinePath)
    }

    super.render(x, y, path)
  }
}
import Piece from "./Piece.mjs";
import { SHOW_OUTLINES } from "./config.mjs";
export default class Triangle extends Piece {
  constructor (params) {
    // x = r * cos(fi)
    // y = r * sin(fi)
    const arrayOfX = params.vertices.map(c => c[0])
    const arrayOfY = params.vertices.map(c => c[1])
    params.width = Math.max(...arrayOfX) - Math.min(...arrayOfX)
    params.height = Math.max(...arrayOfY) - Math.min(...arrayOfY)
    super(params)

    this.deltaVertices = params.vertices
  }

  render(x, y) {
    const path = new Path2D()
    path.moveTo(...this.vertices[0])
    path.lineTo(...this.vertices[1])
    path.lineTo(...this.vertices[2])
    path.lineTo(...this.vertices[0])
    
    if (SHOW_OUTLINES) {
      const outlinePath = new Path2D()
      const w = this.width / 2
      const h = this.height / 2
      const outline =  [
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

  get vertices() {
    const w = this.width / 2
    const h = this.height / 2
    return this.deltaVertices.map(([x, y]) => ([x+this.x-w, y+this.y-h]))
  }
}
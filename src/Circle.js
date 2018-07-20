import Polygon from "./Polygon.js";

/**
 * @class
 * @extends Polygon
 */
export default class Circle extends Polygon {
  constructor ({radius, ...params}) {
    super(params)
    this.radius = radius
  }

  get width () {
    return this.radius * 2
  }

  get height () {
    return this.radius * 2
  }

  renderPolygon() {
    const polygon = new Path2D()
    polygon.moveTo(this.x, this.y)
    polygon.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
    
    this.scene.ctx.fillStyle = this.color
    this.scene.ctx.fill(polygon)

    return this
  }
}
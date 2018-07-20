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

  get path () {
    const path = new Path2D()
    path.moveTo(this.x, this.y)
    path.arc(this.x, this.y, this.radius, 0, 2*Math.PI)

    return path
  }

  /**
   * @param {Polygon | Circle} target 
   */
  hasTouchPoint(target) {
    if (target instanceof Circle) {
      return this.radius + target.radius > Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2))
    }
    return target.hasTouchPoint(this)
  }
}
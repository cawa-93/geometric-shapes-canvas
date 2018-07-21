import Polygon from "./Polygon.js";
/** 
 * @typedef Coordinates
 * @type {[number, number]}
 */

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

    const target_path = target.path
    for (let i = 0; i < 2*Math.PI; i += Math.PI/16) {
      const point = this.getPoint(i)
      if (this.scene.ctx.isPointInPath(target_path, ...point, 'evenodd')) {
        return true
      }
    }

    return false
  }

  /**
   * Возвращает точку на окружности
   * @param {number} angle Угол
   * @returns {Coordinates}
   */
  getPoint(angle) {
    if (this.radius < 2) return [this.x, this.y]
    return [this.radius * Math.cos(angle) + this.x, this.radius * Math.sin(angle) + this.y]
  }

}
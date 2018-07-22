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
    /** @type {number} */
    this.radius = radius
  }

  /** Верхняя граница полигона */
  get topBorder () {
    return this.y - this.radius
  }

  /** Правая граница полигона */
  get rigthBorder() {
    return this.x + this.radius
  }

  /** Нижняя граница полигона */
  get bottomBorder() {
    return this.y + this.radius
  }

  /** Левая граница полигона */
  get leftBorder() {
    return this.x - this.radius
  }

  get vertices() {
    const vertices = []

    for (let i = 0; i < 2; i += 0.125) {
      vertices.push(this.getPoint(i * Math.PI))
    }

    return vertices
  }

  get path () {
    const path = new Path2D()
    path.moveTo(this.x, this.y)
    path.arc(this.x, this.y, this.radius, 0, 2*Math.PI)

    return path
  }

  hasTouchPoint(target) {
    if (target instanceof Circle) {
      return this.radius + target.radius > Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2))
    }

    return super.hasTouchPoint(target)
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
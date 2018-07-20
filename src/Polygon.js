import { SHOW_OUTLINES, TRACK_LENGTH } from './config.js'
import Scene from './Scene.js' // import for type definition
/** 
 * @typedef Coordinates
 * @type {[number, number]}
 */

/**
 * Базовый многоугольник
 * @class 
 */
export default class Polygon {
  /**
   * @param {{ scene: Scene, color: string, speed: number, direction: number, x: number, y: number, vertices: Coordinates[] }}
   */
  constructor({ scene, color, speed, direction, x, y, vertices }) {

    /** @type {Scene} Scene */
    this.scene = scene
    /** @type {number} speed */
    this.speed = speed
    /** @type {number} */
    this.direction = direction
    /** @type {number} */
    this.color = color
    /** @type {number} */
    this.x = x
    /** @type {number} */
    this.y = y
    /** @type {Coordinates[]} */
    this.deltaVertices = vertices
    
    /** @type {Coordinates[]} */
    this.track = []
  }

  /** Ширина полигона */
  get width() {
    const arrayOfX = this.deltaVertices.map(c => c[0])
    return Math.max(...arrayOfX) - Math.min(...arrayOfX)
  }
  
  /** Высота полигона */
  get height() {
    const arrayOfY = this.deltaVertices.map(c => c[1])
    return Math.max(...arrayOfY) - Math.min(...arrayOfY)
  }
  
  /** Верхняя граница полигона */
  get topBorder() {
    return this.y - this.height / 2
  }
  
  /** Правая граница полигона */
  get rigthBorder() {
    return this.x + this.width / 2
  }
  
  /** Нижняя граница полигона */
  get bottomBorder() {
    return this.y + this.height / 2
  }
  
  /** Левая граница полигона */
  get leftBorder() {
    return this.x - this.width / 2
  }
  
  /** 
   * Координаты вершин многоугольника
   * @returns {Coordinates[]}
   */
  get vertices() {
    const w = this.width / 2
    const h = this.height / 2
    return this.deltaVertices.map(c => [c[0] + this.x - w, c[1] + this.y - h])
  }

  /**
   * Перемещает многоугольник в соответствии с текущим направлением и скоростью
   */
  move() {
    if (this.speed < 0 || this.direction === null) return
    /** @type {Coordinates} Новые координаты */
    let newС = [
      this.x + this.speed * Math.cos(this.direction * (Math.PI / 180)),
      this.y + this.speed * Math.sin(this.direction * (Math.PI / 180)),
    ]

    /** Половина ширины */
    const w = this.width / 2
    /** Половина высоты */
    const h = this.height / 2

    if (newС[0] < w) {
      newС[0] = w
      this.direction = 180 - this.direction
    } else if (newС[0] + w > this.scene.width) {
      newС[0] = this.scene.width - w
      this.direction = 180 - this.direction
    }

    if (newС[1] < h) {
      newС[1] = h
      this.direction = 360 - this.direction
    } else if (newС[1] + h > this.scene.height) {
      newС[1] = this.scene.height - this.height / 2
      this.direction = 360 - this.direction
    }

    if (TRACK_LENGTH > 0) {
      this.track.unshift([this.x, this.y])
      this.track.splice(TRACK_LENGTH, this.track.length)
    }

    this.x = newС[0]
    this.y = newС[1]
    this.render()
    return this
  }

  /** Рисует границы */
  renderOutline() {
    const outline = new Path2D()
    outline.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    )
  
    const dot = new Path2D(outline)
    dot.rect(
      this.x,
      this.y,
      1,
      1
    )
    this.scene.ctx.stroke(dot)

    return this
  }

  /** Рисует след */
  renderTrack() {
    const track = new Path2D()
    track.moveTo(this.x, this.y)
    this.track.forEach(coordinates => track.lineTo(...coordinates))
    this.scene.ctx.stroke(track)
    return this
  }

  /** Рисует многоугольник */
  renderPolygon() {
    const polygon = new Path2D()
    const vertices = this.vertices
    polygon.moveTo(...vertices[0])
    for (let i = vertices.length - 1; i >= 0; i--) {
      polygon.lineTo(...vertices[i])
    }
    
    this.scene.ctx.fillStyle = this.color
    this.scene.ctx.fill(polygon)
    return this
  }

  /**
   * Рисует многоугольник, границы и след
   */
  render() {
    
    this.renderPolygon()

    if (SHOW_OUTLINES) {
      this.renderOutline()
    }

    if (this.track && this.track.length) {
      this.renderTrack()
    }

    return this
  }
}

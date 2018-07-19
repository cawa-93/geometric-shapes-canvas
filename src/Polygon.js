import { SHOW_OUTLINES, TRACK_LENGTH } from './config.js'

/**
 * Базовый многоугольник
 * @class 
 * @export Polygon
 */
export default class Polygon {
  /**
   * @param {{ scene: HTMLCanvasElement, color: string, speed: number, direction: number, x: number, y: number, vertices: number[] }} 
   */
  constructor({ scene, color, speed, direction, x, y, vertices }) {
    /** @property {Element} scene елемент Canvas */
    this.scene = scene
    this.speed = speed
    this.direction = direction
    this.color = color
    this.x = x
    this.y = y
    this.deltaVertices = vertices

    this.track = []
  }


  get width() {
    const arrayOfX = this.deltaVertices.map(c => c[0])
    return Math.max(...arrayOfX) - Math.min(...arrayOfX)
  }

  get height() {
    const arrayOfY = this.deltaVertices.map(c => c[1])
    return Math.max(...arrayOfY) - Math.min(...arrayOfY)
  }

  get topBorder() {
    return this.y - this.height / 2
  }

  get rigthBorder() {
    return this.x + this.width / 2
  }

  get bottomBorder() {
    return this.y + this.height / 2
  }

  get leftBorder() {
    return this.x - this.width / 2
  }

  get vertices() {
    const w = this.width / 2
    const h = this.height / 2
    return this.deltaVertices.map(c => [c[0] + this.x - w, c[1] + this.y - h])
  }


  move() {
    if (this.speed < 0 || this.direction === null) return
    /** @type {[number, number]} Новые координаты */
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

  renderTrack() {
    const track = new Path2D()
    track.moveTo(this.x, this.y)
    this.track.forEach(coordinates => track.lineTo(...coordinates))
    this.scene.ctx.stroke(track)
    return this
  }

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
   * Рисует контур
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

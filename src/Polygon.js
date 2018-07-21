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
    /** 
     * @type {number} 
     * @private
     * */
    this._direction = 0
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

  /** Направление движения */
  get direction () {
    return this._direction
  }

  set direction (value) {
    if (value < 0) this._direction = 360 + value
    else if (value > 360) {
      this._direction = value % 360
    } else {
      this._direction = value
    }
  }
  
  /** 
   * Координаты вершин многоугольника
   * @returns {Coordinates[]}
   */
  get vertices() {
    return this.deltaVertices.map(c => [c[0] + this.x, c[1] + this.y])
  }

  /** Контур объекта */
  get path () {
    const path = new Path2D()
    const vertices = this.vertices
    path.moveTo(...vertices[0])
    for (let i = vertices.length - 1; i >= 0; i--) {
      path.lineTo(...vertices[i])
    }

    return path
  }

  /**
   * Перемещает многоугольник в соответствии с текущим направлением и скоростью
   */
  move() {
    if (this.speed < 0 || this.direction === null) return
    const horizontalSpeed = this.speed * Math.cos(this.direction * (Math.PI / 180))
    const verticalSpeed = this.speed * Math.sin(this.direction * (Math.PI / 180))
    this.x += horizontalSpeed
    this.y += verticalSpeed

    /** Половина ширины */
    const w = this.width / 2
    /** Половина высоты */
    const h = this.height / 2

    // Столкновение с левой границей сцены
    if (this.leftBorder <= 0) {
      this.x = w
      this.direction = 180 - this.direction
    }
    
    // Столкновение с правой границей сцены
    if (this.rigthBorder >= this.scene.width) {
      this.x = this.scene.width - w
      this.direction = 180 - this.direction
    }

    // Столкновение с верхней границей сцены
    if (this.topBorder <= 0) {
      this.y = h
      this.direction = 360 - this.direction
    }
    
    // Столкновение с нижней границей сцены
    if (this.bottomBorder > this.scene.height) {
      this.y = this.scene.height - h
      this.direction = 360 - this.direction
    }

    // Столкновение с другом объектом
    this.scene.factory.items.forEach(target => {

      if (target === this) {
        return
      }
      
      /** */
      let touchPoint = this.hasTouchPoint(target)

      // Пропускаем если нет точек соприкосновения
      if (!touchPoint) {
        return
      }

      
      // Смещаем в обратном направлении пока остаются точки соприкосновения
      while (touchPoint) {
        this.x -= horizontalSpeed / 2
        this.y -= verticalSpeed / 2
        touchPoint = this.hasTouchPoint(target)
      }
      
      /** Коофициент соотношения скоростей */
      const coof = 1 / (this.speed + target.speed)
      
      // Изменяем направления при столкновении
      if (this.speed > 0 && target.speed > 0) {
        this.direction = (this.direction + target.direction) / (coof * this.speed)
        target.direction = (this.direction + target.direction) / (coof * target.speed)
      } else if (this.speed === 0) {
        this.direction = target.direction
      } else {
        target.direction = this.direction
      }

      // Изменяем скорость при столкновении
      if (this.speed > target.speed) {
        this.speed--
        target.speed++
      } else if (this.speed != target.speed) {
        this.speed++
        target.speed--
      }
    });

    // Сохраняем координаты для отрисовки пройденного пути
    if (TRACK_LENGTH > 0) {
      this.track.unshift([this.x, this.y])
      this.track.splice(TRACK_LENGTH, this.track.length)
    }

    this.render()
    return this
  }

  /**
   * Проверяет есть ли точки соприкосновения
   * @param {Polygon | Circle} target 
   */
  hasTouchPoint(target) {
    const target_path = target.path
    const vertices = this.vertices;
    for (let i = 0; i < vertices.length; i++) {
      const point = vertices[i];
      if (this.scene.ctx.isPointInPath(target_path, ...point, 'evenodd')) {
        return true
      }
    }

    return false
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
    this.scene.ctx.fillStyle = this.color
    this.scene.ctx.fill(this.path)
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

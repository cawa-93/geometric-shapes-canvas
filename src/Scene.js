import Factory from "./Factory.js";

/**
 * Сцена
 * @class
 */
export default class Scene {
  /**
   * @param {{width: number, height: number, root: HTMLElement}} Параметры инициализации сцены
   */
  constructor({ width, height, root }) {
    /** @type {number} */
    this.width = width
    /** @type {number} */
    this.height = height
    /** @type {HTMLElement} */
    this.root = root
    
    /** @type {HTMLCanvasElement} */
    this.scene = document.createElement('canvas')
    
    this.scene.width = this.width
    this.scene.height = this.height
    this.scene.id = 'scene'
    this.scene.innerText = 'Browser not supported'
    
    this.root.appendChild(this.scene)
    
    this.ctx = this.scene.getContext('2d')

    this.factory = new Factory()
  }

  /**
   * Добавляет новый елемент на сцену
   * @param {(import("./Polygon").default | import("./Circle").default | import("./Let").default)} item
   */
  addItem(item) {
    item.scene = this
    this.factory.addItem(item)
  }

  startAnimation () {
    this.animationTick()
  }
  
  /** Рекурсивное обновление сцены */
  animationTick() {
    this.clear()
    this.factory.items.forEach(item => item.move())
    window.requestAnimationFrame(() => this.animationTick())
  }
  
  /** Очищает сцену */
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
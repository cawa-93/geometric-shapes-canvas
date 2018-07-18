import Factory from "./Factory.mjs";

export default class Scene {
  constructor({ width, height, root, items}) {
    this.width = width
    this.height = height
    this.root = root

    this.scene = document.createElement('canvas')

    this.scene.width = this.width
    this.scene.height = this.height
    this.scene.id = 'scene'
    this.scene.innerText = 'Browser not supported'

    this.root.appendChild(this.scene)

    this.ctx = this.scene.getContext('2d')

    this.factory = new Factory(this)
    if (Array.isArray(items) && items.length) {
      items.forEach(item => this.factory.addItem(item))
    }


  }

  startAnimation () {
    this.animationTick()
  }
  
  animationTick() {
    this.clear()
    this.factory.items.forEach(item => item.move())
    window.requestAnimationFrame(() => this.animationTick())
  }


  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
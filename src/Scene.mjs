export default class Scene {
  constructor({ width, height, root}) {
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
  }



  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
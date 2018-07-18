export default class Scene {
  constructor({ width, height, root}) {
    this.width = width
    this.height = height
    this.root = root

    console.log(this)

    this.scene = document.createElement('canvas')

    this.scene.width = this.width
    this.scene.height = this.height
    this.scene.id = 'scene'
    this.scene.innerText = 'Browser not supported'

    this.root.appendChild(this.scene)
  }
}
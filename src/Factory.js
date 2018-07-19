import Polygon from './Polygon.js';
import Circle from './Circle.js';

export default class Factory {
  constructor (scene) {
    this.scene = scene,
    this.items = []
  }

  addItem(params) {
    let item = null
    params.scene = this.scene
    switch (params.type) {
      case 'polygon':
        item = new Polygon(params)
        break

      case 'circle':
        item = new Circle(params)
        break
    }

    if (item) {
      item.render()
      return this.items.push(item) - 1
    }
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }
}
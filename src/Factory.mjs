import Reactangle from './Rectangle.mjs';
import Circle from './Circle.mjs';
import Triangle from './Triangle.mjs';

export default class Factory {
  constructor (scene) {
    this.scene = scene,
    this.items = []
  }

  addItem(params) {
    let item = null
    params.scene = this.scene
    switch (params.type) {
      case 'reactangle':
        item = new Reactangle(params)
        break

      case 'circle':
        item = new Circle(params)
        break

      case 'triangle':
        item = new Triangle(params)
        break
    }

    if (item) {
      item.render(params.x, params.y)
      return this.items.push(item) - 1
    }
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }
}
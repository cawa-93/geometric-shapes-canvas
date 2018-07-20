import Polygon from "./Polygon.js";  // import for types definition
import Circle from "./Circle.js";    // import for types definition

export default class Factory {
  constructor () {
    /** @type {(Polygon | Circle)[]} Массив объектов на сцене*/
    this.items = []
  }

  /**
   * Добавляет объект на сцену
   * @param {(Polygon | Circle)} params параметры нового объекта
   */
  addItem(item) {
    item.render()
    return this.items.push(item) - 1
  }

  /**
   * Удаляет объект из сцены
   * @param {number} index Индекс требуемого объекта
   */
  removeItem(index) {
    this.items.splice(index, 1)
  }
}
/**
 * @typedef Figure
 * @type {(import("./Polygon").default | import("./Circle").default | import("./Let").default)}
 */

export default class Factory {
  constructor () {
    /** @type {Figure[]} Массив объектов на сцене*/
    this.items = []
  }

  /**
   * Добавляет объект на сцену
   * @param {Figure} item параметры нового объекта
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



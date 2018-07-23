/** @module Factory */

/**
 * @typedef Figure
 * @type {(import("./Polygon").default | import("./Circle").default | import("./Let").default)}
 */

 /**
  * @class Фабрика объектов
  * Хранит в себе массив объектов, может добавлять и удалять объекты со сцены
  * @alias module:Factory
  */
export default class Factory {
  constructor () {
    /** 
     * Массив объектов на сцене 
     * @type {Figure[]}
     */
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



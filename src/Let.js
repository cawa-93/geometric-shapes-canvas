import Circle from './Circle.js'

export default class Let extends Circle {
  constructor (params) {
    params.radius = 10
    params.color = 'purple'
    params.speed = 0
    super(params)
  }

  /** @type {null} */
  get direction () {
    return null
  }

  set direction (val) {}

  renderTrack () {
    return this
  }


}
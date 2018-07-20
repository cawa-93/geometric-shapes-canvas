import config from './config.js';
import Scene from './Scene.js';
import Polygon from './Polygon.js';
import Circle from './Circle.js';

console.log(config)
const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
})

scene.addItem(new Polygon({
  color: 'red',
  speed: 5,
  direction: 0,
  x: 0,
  y: 15,
  vertices: [
    [25, 0],
    [50, 25],
    [25, 50],
    [0, 25],
  ]
}))

scene.addItem(new Circle({
  color: 'blue',
  speed: 30,
  direction: 0,
  x: 0,
  y: 200,
  radius: 40
}))

scene.startAnimation()
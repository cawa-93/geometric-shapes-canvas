import config from './config.js';
import Scene from './Scene.js';
import Polygon from './Polygon.js';
import Circle from './Circle.js';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
})

scene.addItem(new Polygon({
  color: 'red',
  speed: 3,
  direction: 30,
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
  speed: 1,
  direction: 70,
  x: 0,
  y: 200,
  radius: 40
}))

scene.startAnimation()
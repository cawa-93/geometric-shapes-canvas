import config from './config.js';
import Scene from './Scene.js';
import Polygon from './Polygon.js';
import Circle from './Circle.js';
import Let from './Let.js';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
})

for (let i = 1; i <=4 ; i++) {
  for (let j = 1; j <= 4; j++) {
    scene.addItem(new Let({
      x: i*200 - 100,
      y: j*200 - 100,
    }))
  }
}

for (let i = 1; i < 8; i++) {
  scene.addItem(new Circle({
    color: 'green',
    speed: i*2,
    direction: 70*i,
    x: i*100 - 60,
    y: i*100 - 30,
    radius: 20
  }))
}

for (let i = 1; i < 4; i++) {
  scene.addItem(new Polygon({
    color: 'red',
    speed: i*2,
    direction: 70*i,
    x: i*100 - 60,
    y: i*100 - 30,
      vertices: [
        [-20, 0],
        [0, -20],
        [20, 0],
        [0, 20],
      ]
  }))
}

for (let i = 1; i < 4; i++) {
  scene.addItem(new Polygon({
    color: 'blue',
    speed: i*2,
    direction: 70*i,
    x: i*115 - 60,
    y: i*143 - 30,
      vertices: [
        [-15, -15],
        [15, -15],
        [15, 15],
        [-15, 15],
      ]
  }))
}


scene.startAnimation()
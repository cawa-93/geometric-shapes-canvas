import config from './config.js';
import Scene from './Scene.js';
import Polygon from './Polygon.js';
import Circle from './Circle.js';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
})

// scene.addItem(new Polygon({
//   color: 'red',
//   speed: 0,
//   direction: 0,
//   x: 100,
//   y: 100,
//   vertices: [
//     [25, 0],
//     [50, 25],
//     [25, 50],
//     [0, 25],
//   ]
// }))

// scene.addItem(new Polygon({
//   color: 'red',
//   speed: 60,
//   direction: 90,
//   x: 100,
//   y: 300,
//   vertices: [
//     [25, 0],
//     [50, 25],
//     [25, 50],
//     [0, 25],
//   ]
// }))



// for (let i = 0; i < 10; i++) {
//   scene.addItem(new Circle({
//     color: 'blue',
//     speed: 3,
//     direction: i*15,
//     x: i*30,
//     y: i * 30,
//     radius: 15

//   }))
  
// }

// scene.addItem(new Polygon({
//   color: 'green',
//   speed: 15,
//   direction: 60,
//   x: 75,
//   y: 75,
//   vertices: [
//     [25, 0],
//     [50, 25],
//     [25, 50],
//     [0, 25],
//   ]
// }))

// scene.addItem(new Polygon({
//   color: 'blue',
//   speed: 15,
//   direction: 30,
//   x: 175,
//   y: 75,
//   vertices: [
//     [25, 0],
//     [50, 25],
//     [25, 50],
//     [0, 25],
//   ]
// }))

scene.addItem(new Circle({
  color: 'red',
  speed: 2,
  direction: 70,
  x: 0,
  y: 200,
  radius: 40
}))

scene.addItem(new Circle({
  color: 'green',
  speed: 5,
  direction: 170,
  x: 300,
  y: 0,
  radius: 20
}))

scene.startAnimation()
import config from './config.js';
import Scene from './Scene.js';
import Polygon from './Polygon.js';
import Circle from './Circle.js';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
})

// scene.addItem(getRandomPoligon(3))

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

scene.addItem(new Polygon({
  color: 'red',
  speed: 2,
  direction: 0,
  x: 175,
  y: 50,
  vertices: [
    [-30, -30],
    [-30, 30],
    [30, 0],
  ]
}))

scene.addItem(new Circle({
  color: 'blue',
  speed: 1,
  direction: 0,
  x: 50,
  y: 50,
  radius: 10
}))


// scene.addItem(new Circle({
//   color: 'green',
//   speed: 5,
//   direction: 170,
//   x: 300,
//   y: 0,
//   radius: 20
// }))

scene.startAnimation()

// function getRandomPoligon(n) {
//   if (n < 2) 
//     throw new Error('N > 2 !')

//   const step = 360 / n
//   const radius = 40
//   const vertices = []

//   for (let i = 1; i <= n; i++) {
//     vertices.push(getTop(radius, step * i))
//   }


//   return new Polygon({
//     x: getRandomInt(0, 950),
//     y: getRandomInt(0, 300),
//     speed: getRandomInt(1, 10),
//     direction: getRandomInt(0, 360),
//     vertices,
//     color: 'green'
//   })
// }

// function getTop (r, fi) {
//   return [r * Math.cos(fi), r * Math.sin(fi)]
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
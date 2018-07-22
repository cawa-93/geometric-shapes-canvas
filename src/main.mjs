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

// scene.addItem(new Let({
//   x: 100,
//   y: 50,
// }))

// scene.addItem(new Let({
//   x: 200,
//   y: 50,
// }))

// scene.addItem(new Let({
//   x: 300,
//   y: 50,
// }))

// scene.addItem(new Let({
//   x: 400,
//   y: 50,
// }))

// scene.addItem(new Let({
//   x: 100,
//   y: 200,
// }))

// scene.addItem(new Let({
//   x: 200,
//   y: 200,
// }))

// scene.addItem(new Let({
//   x: 300,
//   y: 200,
// }))

// scene.addItem(new Let({
//   x: 400,
//   y: 200,
// }))

for (let i = 1; i <=4 ; i++) {
  for (let j = 1; j <= 4; j++) {
    scene.addItem(new Let({
      x: i*200 - 100,
      y: j*200 - 100,
    }))
  }
}

// scene.addItem(new Polygon({
//   color: 'red',
//   speed: 2,
//   direction: 33,
//   x: 175,
//   y: 50,
//   vertices: [
//     [-30, -30],
//     [-50, -20],
//     [-50, -20],
//     [-30, 30],
//     [30, 0],
//   ]
// }))

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
        [15, 0],
        [30, 15],
        [15, 30],
        [0, 15],
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
        [0, 0],
        [30, 0],
        [30, 30],
        [0, 30],
      ]
  }))
}


// for (let i = 1; i < 5; i++) {
//   scene.addItem(getRandomPoligon(8))
// }

scene.startAnimation()

// function getRandomPoligon(n) {
//   if (n < 2) 
//     throw new Error('N > 2 !')


//   const c = new Circle({
//     radius: getRandomInt(10, 40),
//     x: 0,
//     y: 0,
//     speed: 0,
//     direction: null,
//   })

//   const step = 2 * Math.PI / n
//   const vertices = []
//   for (let i = 0; i <= 2; i+=step) {
//     vertices.push(c.getPoint(i))
//   }

//   return new Polygon({
//     color: 'blue',
//     vertices,
//     x: getRandomInt(0, config.scene.width),
//     y: getRandomInt(0, config.scene.height),
//     speed: getRandomInt(5, 20),
//     direction: getRandomInt(0, 360),
//   })
// }

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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
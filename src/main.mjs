import config from './config.js';
import Scene from './Scene.js';

console.log(config)
const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
//   items: [
//     {
//       x: 50,
//       y: 50,
//       type: 'triangle',
//       color: 'red',
//       speed: 5,
//       direction: 30,
//       vertices: [
//         [0, 0],
//         [50, 50],
//         [0, 100],
//       ]
//     }, {
//       x: 200, 
//       y: 200,
//       type: 'circle',
//       width: 50,
//       color: 'blue',
//       speed: 5,
//       direction: 120,
//     }, {
//       x: 160, 
//       y: 40,
//       type: 'reactangle',
//       width: 60,
//       height: 40,
//       color: 'green',
//       speed: 5,
//       direction: 210,
//     }
//   ]
})

scene.addItem({
  type: 'polygon',
  color: 'red',
  speed: 10,
  direction: 30,
  x: 150,
  y: 15,
  vertices: [
    [0, 0],
    [40, 60],
    [37, 38],
    [0, 60],

  ]
})

// scene.addItem({
//   type: 'polygon',
//   color: 'red',
//   speed: 10,
//   direction: 30,
//   x: 150,
//   y: 15,
//   vertices: [
//     [0, 30],
//     [0, 30],
//     [0, 30],
//     [0, 30],
//     [0, 30],
//     [0, 30],
//     [0, 30],
//   ]
// })

scene.addItem({
  type: 'circle',
  color: 'blue',
  speed: 20,
  direction: 150,
  x: 200,
  y: 200,
  radius: 40
})

// const p = new Polygon({
//   scene,
//   color: 'red',
//   speed: 0,
//   x: 15,
//   y: 15,
//   vertices: [
//     [0,0],
//     [30,0],
//     [30,30],
//     [0,30],
//   ]
// })

// p.render()

scene.startAnimation()

// reac.direction = 30
// reac2.direction = 10


// function draw() {
//   scene.clear()
//   reac.move(scene)
//   reac2.move(scene)
//   window.requestAnimationFrame(draw)
// }

// draw()

// reac.render(10,20)
// reac2.render(10,20)
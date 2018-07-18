import config from './config.mjs';
import Scene from './Scene.mjs';


const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root'),
  items: [
    {
      x: 50,
      y: 50,
      type: 'triangle',
      color: 'red',
      speed: 5,
      direction: 30,
      vertices: [
        [0, 0],
        [50, 50],
        [0, 100],
      ]
    }, {
      x: 200, 
      y: 200,
      type: 'circle',
      width: 50,
      color: 'blue',
      speed: 5,
      direction: 120,
    }, {
      x: 160, 
      y: 40,
      type: 'reactangle',
      width: 60,
      height: 40,
      color: 'green',
      speed: 5,
      direction: 210,
    }
  ]
})

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
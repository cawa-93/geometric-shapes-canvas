import config from './config.mjs';
import Scene from './Scene.mjs';
import Reactangle from './Rectangle.mjs';
import Circle from './Circle.mjs';
import Triangle from './Triangle.mjs';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root')
})

const reac = new Triangle({
  ctx: scene.ctx,
  color: 'red',
  speed: 5,
  vertices: [
    [0, 0],
    [50, 50],
    [0, 10],
  ]
})
const reac2 = new Circle({
  width: 50,
  height: 50,
  ctx: scene.ctx,
  color: 'blue',
  speed: 5,
})

reac.direction = 30
reac2.direction = 10


function draw() {
  scene.clear()
  reac.move(scene)
  reac2.move(scene)
  window.requestAnimationFrame(draw)
}

draw()

reac.render(10,20)
reac2.render(10,20)
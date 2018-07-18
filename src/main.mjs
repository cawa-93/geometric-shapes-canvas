import config from './config.mjs';
import Scene from './Scene.mjs';
import Reactangle from './Rectangle.mjs';
import Circle from './Circle.mjs';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root')
})

const reac = new Circle({
  width: 100,
  height: 50,
  ctx: scene.ctx,
  color: 'red',
  speed: 5,
})
// const reac2 = new Reactangle({
//   width: 50,
//   height: 50,
//   ctx: scene.ctx,
//   color: 'blue',
//   speed: 5,
// })

reac.direction = 30
// reac2.direction = 10


function draw() {
  scene.clear()
  reac.move(scene)
  window.requestAnimationFrame(draw)
}

draw()

reac.render(10,20)
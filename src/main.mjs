import config from './config.mjs';
import Scene from './Scene.mjs';
import Reactangle from './Rectangle.mjs';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root')
})
console.log(scene.ctx)
const reac = new Reactangle({
  width: 100,
  height: 50,
  ctx: scene.ctx,
  color: 'red',
  speed: 10,
})

reac.direction = 30

reac.render(10,20)
setInterval(() => {
  scene.clear()
  reac.move()
}, 1000);
import config from './config.mjs';
import Scene from './Scene.mjs';

const scene = new Scene({
  width: config.scene.width,
  height: config.scene.height,
  root: document.querySelector('#root')
})
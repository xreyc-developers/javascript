// STRUCTURE 3 : USING MODULE
import { PIE, f } from './modules/a.mjs';
import someFunc, { CAKE } from './modules/b.js';

const APP = (function() {
  document.addEventListener('DOMContentLoaded', () => {
    console.log(PIE);
    f();
    someFunc();
    console.log(CAKE);
  })
})()

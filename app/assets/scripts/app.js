import $ from 'jquery';

import { playSound, removeTransition } from './modules/pianokeyboard';

const keys = document.querySelectorAll('kbd');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

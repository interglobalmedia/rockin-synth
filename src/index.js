import './styles/styles.scss'
import playSound from './modules/playSound'
import removeTransition from './modules/removeTransition'

// returns an array of every single .key element matched
const keys = document.querySelectorAll('kbd')
/* each key gets an event listener added to it using the forEach mothod, which is transitionend, and when a transition is ending, the event listener/transition is removed. */
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
/* event listener is nice and separate now from what is now in body of the playSound() function, so that if ever wanted to play sound based off of something else, could. */
// when someone keys down, play sound.
window.addEventListener('keydown', playSound)

import $ from 'jquery';

export function playSound(e) {
    /* is there an audio element on the page that has a data-key attribute */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // select corresponding key so can add animation
    const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
    // stop the function from running all together.
    if(!audio) return;
    // rewind to start
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
export function removeTransition(e) {
    // skip it if it's not a transform
    if(e.propertyName !== 'transform') return;
    /* 'this' is equal to the key. because it is always equal to whatever the event listener got called against, and that's the key (as indicated below). */
    this.classList.remove('playing');
}
// returns an array of every single .key element matched
const keys = document.querySelectorAll('kbd');
/* each key gets an event listener added to it using the forEach mothod, which is transitionend, and when a transition is ending, the event listener/transition is removed. */
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
/* event listener is nice and separate now from what is now in body of the playSound() function, so that if ever wanted to play sound based off of something else, could. */
// when someone keys down, play sound.
window.addEventListener('keydown', playSound);

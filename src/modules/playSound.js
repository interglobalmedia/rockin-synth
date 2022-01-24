function playSound(e) {
	/* is there an audio element on the page that has a data-key attribute */
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	// select corresponding key so can add animation
	const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`)
	// stop the function from running all together.
	if (!audio) return
	// rewind to start
	audio.currentTime = 0
	audio.play()
	key.classList.add('playing')
}

export default playSound

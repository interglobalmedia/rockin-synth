function removeTransition(e) {
	// skip it if it's not a transform
	if (e.propertyName !== 'transform') return
	/* 'this' is equal to the key. because it is always equal to whatever the event listener got called against, and that's the key (as indicated below). */
	this.classList.remove('playing')
}

export default removeTransition

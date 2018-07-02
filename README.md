# Rockin Synth

 ### 🎶 Description:

+ When I pressed a key, it would create a sound. Specifically a musical note corresponding to that of a real piano.

+ When I pressed a key, a transition would be triggered. When i pressed down on the key, it would become a bit bigger and turn yellow. When i lifted my finger from the key, the key would scale down to its regular size and the yellow background would disappear.

### 🎶 The playSound() function:

+ The `playSound()` function creates the sound for the piano key. It also adds a class called `.playing` which increases the size of the key, adds a yellow background and box-shadow.

+ First I had to check whether there is an audio element on the page that has an audio `data-key` attribute.

+ Using an `audio[data-key]` makes the selection more specific instead of simply using a class, For example. storing the `e.keyCode` (event keycode) as an attribute value of the `data-key` attribute makes it possible to be even more specific without having to call the `.querySelector()` method on each unique and individual key.

+ Next I had to select a corresponding `kbd[data-key="${e.keyCode}"]` so I could add the animation to it. So the audio tag is for the sound, and the corresponding `<kbd>` (keyboard) tag is for the animation.

### 🎶 The removeTransition() function:

+ First I had to create a condition to determine whether the `transform` property is present on a key or not:

```
if(e.propertyName !== "transform") return;
```
In other words, if there is no `.playing` class and therefore no `transform` property attached to a key, return (skip the key).

+ Otherwise, remove the `.playing` class from the key:

```
this.classList.remove("playing");
```
+ `this` refers to the key. That's because `this` is always equal to whatever the event listener gets called against, and that's the key (as indicated further down the code).

### 🎶 Adding event listeners:

+ Last of all, I had to add event listeners to listen for the `playSound` event and the `removeTransition` event.

+ First I set up the `.addEventListener()` method that would be on the lookout for the `transitionend` event type. The `removeTransition` reference is triggered when the `transitionend` event occurs, and the `.playing` class is removed from the piano key.

+ This time I didn't need to be specific about which particular `key` with a particular `keyCode` I had to target, so I did the following with the `.querySelectorAll()` method:

```
const keys = document.querySelectorAll("kbd");
```
+ Then I had to add the event listener to each key:

```
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
```
+ By choosing to use different selectors for the `key` variable in the `playSound()` function and the global `keys` variable, the `event listener` is nice and separate from the `querySelectors` in the body of the `playSound()` function. this way, If I wanted to play sound based off of another element, I could.

+ Finally, I called an `.addEventListener()` method on the window to listen for a `keydown` event that would trigger the reference to the `playSound` function. This means that when someone keys down, play a sound.

```
window.addEventListener("keydown", playSound);
```

As I no longer have an actual piano to reference for looks, I have to thank [LFeh](https://github.com/LFeh/). I used his keyboard as a visual reference. I also wasn't able to find any mp3 notes for the piano sounds, so I have **LFeh** to thank for that too.
To learn more about his project, please visit the [piano](https://github.com/LFeh/piano) repo.

This **keyboard** is meant to be played by pressing down **Computer keys**. That means on a laptop or desktop, or any other device that has a keyboard hooked up to it.

[View Rockin Synth on Github GH-Pages](https://interglobalmedia.github.io/rockin-synth/)

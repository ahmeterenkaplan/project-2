import {
    play,
    pause,
    stop,
    resetBttnSounds,
    addMinutes,
    lessMinutes
} from "./controls.js"

import Timer from "./timer.js"

import Sound from "./sounds.js"

//Theme settings
const bttnLight = document.querySelector('.light')
const bttnDark = document.querySelector('.dark')
const BgTema = document.querySelector('.bodyTema')

//Buttons Timer
const bttnPlay = document.querySelector('.play')
const bttnPause = document.querySelector('.pause')
const bttnStop = document.querySelector('.stop')
const bttnAdd = document.querySelector('.add')
const bttnLess = document.querySelector('.less')

//Buttons sounds
const bttnForest = document.querySelector('.forest')
const bttnRain = document.querySelector('.rain')
const bttnCoffeeShop = document.querySelector('.coffeeShop')
const bttnFireplace = document.querySelector('.fireplace')

//Buttons numbers
const setMinutes = document.querySelector('.minutes')
const setSeconds = document.querySelector('.seconds')

//volume variables
const volumeControl = document.querySelector('.volume-control')
const volumeSlider = document.querySelector('.volume-slider')

//Passing factor dependencies
const sound = Sound({ volumeControl, volumeSlider })
const timer = Timer({ setMinutes, setSeconds })

//Buttons Tema
bttnLight.addEventListener('click', () => {
    bttnLight.classList.add('hide')
    bttnDark.classList.remove('hide')
    BgTema.classList.remove('active')
})

bttnDark.addEventListener('click', () => {
    bttnDark.classList.add('hide')
    bttnLight.classList.remove('hide')
    BgTema.classList.add('active')
})

//Buttons Timer
bttnPlay.addEventListener('click', () => {
    play()
    sound.pressbuttonAudio()
    timer.countDown()
})

bttnPause.addEventListener('click', () => {
    pause()
    timer.pauseTimer()
    sound.pressbuttonAudio()
})

bttnStop.addEventListener('click', () => {
    stop()
    resetBttnSounds()
    sound.pressbuttonAudio()
    sound.stopSound()
    timer.resetTimer()
    sound.volumeHide()
})

bttnAdd.addEventListener('click', () => {
    addMinutes()
    timer.limitOfTimeMax()
    sound.pressbuttonAudio()
})

bttnLess.addEventListener('click', () => {
    lessMinutes()
    timer.limitOfTimeMin()
    sound.pressbuttonAudio()
})

//Buttons Sounds
bttnForest.addEventListener('click', () => {
    bttnForest.classList.toggle('select')
    bttnRain.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnForest()

    volumeSlider.classList.toggle('volume-slider-forest-Bg')
    volumeSlider.classList.toggle('hide')
    //volumeLevel.classList.toggle('barVolume-color-forest')
    //volumeBar.classList.toggle('hide')
})

bttnRain.addEventListener('click', () => {
    bttnRain.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnRain()

    volumeSlider.classList.toggle('volume-slider-rain-Bg')
    volumeSlider.classList.toggle('hide')
    /*volumeLevel.classList.toggle('barVolume-color-rain')
    volumeBar.classList.toggle('hide')*/
})

bttnCoffeeShop.addEventListener('click', () => {
    bttnCoffeeShop.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnRain.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnCoffeeShop()

    volumeSlider.classList.toggle('volume-slider-coffeeShop-Bg')
    volumeSlider.classList.toggle('hide')
    /*volumeLevel.classList.toggle('barVolume-color-coffeeShop')
    volumeBar.classList.toggle('hide')*/
})

bttnFireplace.addEventListener('click', () => {
    bttnFireplace.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnRain.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')

    sound.pressBttnFireplace()

    volumeSlider.classList.toggle('volume-slider-fireplace-Bg')
    volumeSlider.classList.toggle('hide')
    /*volumeLevel.classList.toggle('barVolume-color-Fireplace')
    volumeBar.classList.toggle('hide')*/
})

//Settings Volume
volumeControl.addEventListener('click', () => {
    sound.initializeVolumeSlider()
})

export {
    bttnPlay,
    bttnPause,
    bttnStop,
    bttnAdd,
    bttnLess,
    bttnForest,
    bttnRain,
    bttnCoffeeShop,
    bttnFireplace,
    setMinutes,
    setSeconds,
    sound,
    volumeControl
}
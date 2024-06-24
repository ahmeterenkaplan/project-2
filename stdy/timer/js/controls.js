import {
    bttnPlay,
    bttnPause,
    bttnForest,
    bttnRain,
    bttnCoffeeShop,
    bttnFireplace,
    setMinutes
} from './index.js'

//Buttons-Controls
function play() {
    bttnPlay.classList.add('hide')
    bttnPause.classList.remove('hide')
}

function pause() {
    bttnPause.classList.add('hide')
    bttnPlay.classList.remove('hide')

}

function stop() {
    bttnPlay.classList.remove('hide')
    bttnPause.classList.add('hide')
}

function resetBttnSounds() {
    bttnForest.classList.remove('select')
    bttnForest.classList.remove('discreet')

    bttnRain.classList.remove('discreet')
    bttnRain.classList.remove('select')

    bttnCoffeeShop.classList.remove('discreet')
    bttnCoffeeShop.classList.remove('select')

    bttnFireplace.classList.remove('discreet')
    bttnFireplace.classList.remove('select')


}

function addMinutes() {
    let minutes = parseInt(setMinutes.textContent)
    minutes += 5;
    setMinutes.textContent = minutes;
    setMinutes.textContent = String(minutes).padStart(2, "0")
}

function lessMinutes() {
    let minutes = parseInt(setMinutes.textContent)
    minutes -= 5;
    setMinutes.textContent = minutes
    setMinutes.textContent = String(minutes).padStart(2, "0")

}

function resetControls() {
    bttnPlay.classList.remove('hide')
    bttnPause.classList.add('hide')
}



export {
    play,
    pause,
    stop,
    resetBttnSounds,
    addMinutes,
    lessMinutes,
    resetControls
}
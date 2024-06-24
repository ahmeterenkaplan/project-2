import { resetBttnSounds, resetControls } from './controls.js'

import { sound } from './index.js'

export default function Timer({ setSeconds, setMinutes }) { //Factor returns objects
    let TimerTimeOut

    function limitOfTimeMax() {
        let limitOfTimerMinutes = document.querySelector('.time')
        let limitValue = parseInt(limitOfTimerMinutes.textContent)
        if (limitValue > 60) {
            limitOfTimerMinutes.textContent = "60"
        }
    }

    function limitOfTimeMin() {
        let limitOfTimerMinutes = document.querySelector('.time')
        let limitValue = parseInt(limitOfTimerMinutes.textContent)
        if (limitValue < 0) {
            limitOfTimerMinutes.textContent = "00"
        }
    }

    function countDown() {//Recursion is when a function calls itself.
        TimerTimeOut = setTimeout(function () {
            let minutes = Number(setMinutes.textContent)
            let seconds = Number(setSeconds.textContent)

            if (minutes <= 0 && seconds <= 0) {
                resetControls()
                resetBttnSounds()
                sound.volumeHide()
                sound.stopSound()
                sound.timeEnd()
                clearTimeout(TimerTimeOut)
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes // minutes = minutes - 1
            }

            updateTimerDisplay(minutes, (seconds - 1).toString())
            countDown()
        }, 1000)

    }

    function updateTimerDisplay(minutes, seconds) {
        setSeconds.textContent = String(seconds).padStart(2, "0")
        setMinutes.textContent = String(minutes).padStart(2, "0")
    }

    function resetTimer() {
        setMinutes.textContent = '00'
        setSeconds.textContent = '00'
        clearTimeout(TimerTimeOut)
    }

    function pauseTimer() {
        clearTimeout(TimerTimeOut)//ClearTimeout() function takes a numeric value by default and stops immediately
    }

    return {
        countDown,
        resetTimer,
        updateTimerDisplay,
        limitOfTimeMax,
        limitOfTimeMin,
        pauseTimer
    }
}
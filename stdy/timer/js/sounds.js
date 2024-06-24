export default function Sound({ volumeControl, volumeSlider }) {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const bgAudioForest = new Audio("./audio/Forest.wav")
    const bgAudioRain = new Audio("./audio/Rain.wav")
    const bgAudioCoffeeShop = new Audio("./audio/CoffeeShop.wav")
    const bgAudioFireplace = new Audio("./audio/Fireplace.wav")

    function pressBttnForest() {
        if (bgAudioForest.paused) {
            bgAudioForest.loop = true
            bgAudioForest.play()
        } else {
            bgAudioForest.pause()
        }
    }

    function pressBttnRain() {
        if (bgAudioRain.paused) {
            bgAudioRain.loop = true
            bgAudioRain.play()
        } else {
            bgAudioRain.pause()
        }
    }

    function pressBttnCoffeeShop() {
        if (bgAudioCoffeeShop.paused) {
            bgAudioCoffeeShop.loop = true
            bgAudioCoffeeShop.play()
        } else {
            bgAudioCoffeeShop.pause()
        }
    }

    function pressBttnFireplace() {
        if (bgAudioFireplace.paused) {
            bgAudioFireplace.loop = true
            bgAudioFireplace.play()
        } else {
            bgAudioFireplace.pause()
        }
    }

    function pressbuttonAudio() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function stopSound() {
        bgAudioForest.pause()
        bgAudioRain.pause()
        bgAudioCoffeeShop.pause()
        bgAudioFireplace.pause()
    }

    function initializeVolumeSlider() {
        // Define a posição da bolinha na inicialização
        volumeSlider.style.setProperty('--value', volumeSlider.value);

        // Quando o valor do volume é alterado, atualiza a posição da bolinha
        volumeSlider.addEventListener('input', () => {
        });

        // Quando o usuário clica na barra de volume, atualiza a posição da bolinha e o valor do volume
        volumeControl.addEventListener('click', (event) => {
            const rect = volumeControl.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const width = rect.width;
            const volume = Math.min(1, Math.max(0, x / width));
            volumeSlider.value = volume.toFixed(2);

            bgAudioForest.volume = volume
            bgAudioRain.volume = volume
            bgAudioCoffeeShop.volume = volume
            bgAudioFireplace.volume = volume
        });
    }

    function volumeHide() {
        volumeSlider.classList.add('hide')
    }

    return {
        pressBttnForest,
        pressBttnRain,
        pressBttnCoffeeShop,
        pressBttnFireplace,
        timeEnd,
        pressbuttonAudio,
        stopSound,
        initializeVolumeSlider,
        volumeHide
    }
}
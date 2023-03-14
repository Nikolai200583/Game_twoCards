import { difficultyScreen } from './gameScreen.js';
export function gameDifficulty() {
    const buttons = document.querySelectorAll('.buttons');
    const boxButtons = document.querySelector('.level__content');
    const startButton = document.querySelector('.button__start');
    const labelsButtons = document.querySelectorAll('.buttons-label');

    boxButtons.addEventListener('click', (event) => {
        setTimeout(() => {
            if (event.target === boxButtons) {
                return;
            }
            event.target.classList.add('background');
        }, 0);

        labelsButtons.forEach((elements) => {
            elements.classList.remove('background');
        });

        buttons.forEach((elements) => {
            elements.classList.remove('background');
        });
    });

    startButton.addEventListener('click', gameStart);

    function gameStart() {
        for (const control of buttons) {
            if (control.checked === true) {
                window.application.levels = control.value;
                let time = 0;
                const timerInterval = setInterval(function () {
                    const minutes = Math.floor((time - Math.floor(time)) * 60)
                        .toString()
                        .padStart(2, '0');
                    const seconds = (time % 60).toString().padStart(2, '0');
                    window.application.result.push(`${minutes}:${seconds}`);
                    console.log(`${minutes}:${seconds}`);
                    time++;
                }, 1000);
                window.application.timers.push(timerInterval);
                switch (window.application.levels) {
                    case '1':
                        difficultyScreen(6);
                        break;
                    case '2':
                        difficultyScreen(12);
                        break;
                    case '3':
                        difficultyScreen(18);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

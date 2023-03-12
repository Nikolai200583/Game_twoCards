import {difficultyScreen} from './gameScreen';
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
            switch (window.application.levels) {
                case '1':
                    difficultyScreen(8);
                    break;
                case '2':
                    difficultyScreen(12);
                    break;
                case '3':
                    difficultyScreen(16);
                    break;
                default:
                    break;
            }
        }
    }
}

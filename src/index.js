import { gameDifficulty } from './gameDifficulty.js';

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        this.blocks[blockName](container);
    },
    levels: [],
};

window.application.blocks['blockChoice'] = renderBlockChoice;
window.application.screens['screenChoice'] = renderScreenChoice;
window.application.renderScreen('screenChoice');

function renderBlockChoice(levelContent) {
    const buttonsName = ['1', '2', '3'];
    buttonsName.forEach((elements) => {
        const buttonsLevels = document.createElement('input');
        buttonsLevels.setAttribute('type', 'radio');
        buttonsLevels.setAttribute('value', elements);
        buttonsLevels.setAttribute('id', elements);
        buttonsLevels.setAttribute('name', 'group-buttons');
        buttonsLevels.classList.add('buttons');
        const buttonsLabel = document.createElement('label');
        buttonsLabel.setAttribute('for', elements);
        buttonsLabel.classList.add('buttons-label');
        buttonsLabel.textContent = elements;
        levelContent.appendChild(buttonsLevels);
        levelContent.appendChild(buttonsLabel);
        gameDifficulty();
    });
}

function renderScreenChoice() {
    const app = document.querySelector('.app');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Выбери сложность';
    const levelContent = document.createElement('div');
    levelContent.classList.add('level__content');
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('button__start');
    buttonStart.textContent = 'Старт';
    app.appendChild(title);
    app.appendChild(levelContent);
    app.appendChild(buttonStart);
    window.application.renderBlock('blockChoice', levelContent);
}

export function renderScreenEndGame(titleGame) {
    document.querySelector('body').textContent = '';

    const app = document.createElement('div');
    app.classList.add('app');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = titleGame;
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = 'ssdsdsdsdsdsd';
    const buttonStart = document.createElement('button');
    buttonStart.addEventListener('click', reloadGame);
    buttonStart.classList.add('button__start');
    buttonStart.textContent = 'Играть снова';
    document.querySelector('body').appendChild(app);
    app.appendChild(title);
    app.appendChild(timer);
    app.appendChild(buttonStart);
}

function reloadGame() {
    document.querySelector('.app').textContent = '';
    renderScreenChoice();
}
export function endTimer() {
    clearInterval(timerInterval);
}

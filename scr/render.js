function renderBlockChoice(levelContent) {
    const buttonsName = ['1', '2', '3'];
    buttonsName.forEach(elements => {
        const buttonsLevels = document.createElement('button');
        buttonsLevels.textContent = elements;
        buttonsLevels.classList.add('buttons', elements);
        levelContent.appendChild(buttonsLevels);
    });   
   
    
}

function renderScreenChoice() {
    const app = document.querySelector('.app');    
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Выбери сложность';
    const levelContent = document.createElement('div');
    levelContent.classList.add('level__content');
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('button__start');
    buttonStart.textContent = 'Старт'


    window.application.renderBlock('blockChoice', levelContent);
    app.appendChild(title);
    app.appendChild(levelContent);
    app.appendChild(buttonStart);
}
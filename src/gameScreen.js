import {getImage, duplicateArray, shuffle} from './cards-array';

export function difficultyScreen(numbers) {
    // let firsCard = undefined;
    // let secondCard = undefined;
    let clickable = true;

    document.querySelector('body').textContent = '';
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards__container');
    document.querySelector('body').appendChild(cardsContainer);

    const cardsArray = getImage(numbers);
    const duplicateCardsArray = duplicateArray(cardsArray);
    shuffle(duplicateCardsArray);

    duplicateCardsArray.forEach((element) => {
        const cardsItem = document.createElement('div');
        cardsItem.classList.add('cards');

        const notFlippedCardI = document.createElement('div');
        const flippedCardI = document.createElement('div');

        notFlippedCardI.classList.add('notflipped');
        flippedCardI.classList.add('flipped');

        notFlippedCardI.style.backgroundImage = 'url(./lib/Maskgroup.png)';
        flippedCardI.style.backgroundImage = `url(./lib/img/${element}`;

        cardsItem.append(flippedCardI, notFlippedCardI);
        cardsContainer.appendChild(cardsItem);

        const cards = document.querySelectorAll('.cards');

        cards.forEach((card) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('successfully')
                ) {
                    card.classList.add('flip');
                }
            })
        );

        // cardsItem.style.backgroundImage = (`url(./lib/img/${element}`);
    });
}

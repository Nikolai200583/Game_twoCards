import { getImage, duplicateArray, shuffle } from './cards-array.js';
import { renderScreenEndGame } from './index.js';
import { endTimer } from './index.js';

export function difficultyScreen(numbers) {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;
    const timerInterval;
    function startTimer() {
        let time = 0;
        timerInterval = setInterval(function () {
            const minutes = Math.floor(time / 60)
                .toString()
                .padStart(2, '0');
            const seconds = (time % 60).toString().padStart(2, '0');
            console.log(`${minutes}:${seconds}`);
            time++;
        }, 1000);
    }

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
        flippedCardI.classList.add(element, 'flipped');

        notFlippedCardI.style.backgroundImage = 'url(./lib/Maskgroup.png)';
        flippedCardI.style.backgroundImage = `url(./lib/img/${element}`;

        cardsItem.append(flippedCardI, notFlippedCardI);
        cardsContainer.appendChild(cardsItem);
    });

    const cards = document.querySelectorAll('.cards');

    cards.forEach((card, index) =>
        card.addEventListener('click', () => {
            if (
                clickable === true &&
                !card.classList.contains('successfully')
            ) {
                card.classList.add('flip');

                if (firstCard === null) {
                    firstCard = index;
                } else {
                    if (index !== firstCard) {
                        secondCard = index;
                        clickable = false;
                    }
                }

                if (
                    firstCard !== null &&
                    secondCard !== null &&
                    firstCard !== secondCard
                ) {
                    if (
                        cards[firstCard].firstElementChild.className ===
                        cards[secondCard].firstElementChild.className
                    ) {
                        setTimeout(() => {
                            firstCard = null;
                            secondCard = null;
                            clickable = true;
                        }, 500);
                    } else {
                        setTimeout(() => {
                            cards[firstCard].classList.remove('flip');
                            cards[secondCard].classList.remove('flip');

                            firstCard = null;
                            secondCard = null;
                            clickable = true;
                            renderScreenEndGame('Вы проиграли');
                            endTimer();
                        }, 500);
                    }
                }

                if (
                    Array.from(cards).every((card) =>
                        card.className.includes('flip')
                    )
                ) {
                    renderScreenEndGame('Вы выиграли');
                    endTimer();
                }
            }
        })
    );
}

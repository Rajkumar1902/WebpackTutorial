import '../css/main.scss';
import '../users.html'
import { RandomGenerator } from './random-generator';

//before importing jquery
//const outputParagraph = document.querySelector('#outputParagraph');
const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    //before importing jquery
    //outputParagraph.textContent = RandomGenerator.randomInteger();

    //after importing jquery
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    //before importing jquery
    //outputParagraph.textContent = RandomGenerator.randomRange(1, 500);

    //after importing jquery
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

//before importing jquery
//const buttonRndInt = document.querySelector('#randomInt');

//after importing jquery
const buttonRndInt = jquery('#randomInt');

const buttonRndRange = document.querySelector('#randomRange');

//before importing jquery
//buttonRndInt.addEventListener('click', outputRandomInt);

//after importing jquery
buttonRndInt.click('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
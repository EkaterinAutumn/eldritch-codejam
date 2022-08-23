const azathoth = document.getElementById('azathoth');
const cthulhu = document.getElementById('cthulhu');
const iogSothoth = document.getElementById('iogSothoth');
const shubNiggurath = document.getElementById('shubNiggurath');
const cards = document.querySelector('.cards');
const descriptionLevel = document.querySelector('.descriptionLevel');
const levels = document.querySelector('.levels');
const pack = document.querySelector('.pack');
let selectedCard;
let selectedLevel;

cards.onclick = function (event) {
    let target = event.target;
    if (target.tagName === 'IMG') {
        if (selectedCard) {
            selectedCard.classList.remove('active')
        }
        descriptionLevel.classList.add('descriptionLevelActive');
        selectedCard = target;
        selectedCard.classList.add('active');
    }
}

levels.onclick = function (event) {
    let target = event.target;
    if (target.classList = 'level') {
        if (selectedLevel) {
            selectedLevel.classList.remove('active')
        }
        pack.classList.add('packactive');
        selectedLevel = target;
        selectedLevel.classList.add('active');
    }
}

const packcards = document.querySelector('.packcards');
const layout = document.querySelector('.layout');

packcards.onclick = function (event) {
    layout.classList.add('layout-active')
}
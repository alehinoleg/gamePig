'use strict';
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
let current0Number = Number(current0.textContent);
let score0Number = Number(score0.textContent);
let current1Number = Number(current1.textContent);
let score1Number = Number(score1.textContent);
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const winningsPlay0 = document.querySelector('#winnings--0');
const winningsPlay1 = document.querySelector('#winnings--1');
let whichPlayer = true;


const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', ()=>{
    let numberImg = Math.trunc(Math.random() * 6)+1;
    dice.src = `dice${numberImg}.png`
    dice.classList.remove('hidden')
    if(whichPlayer) {
        if(numberImg !== 1) {
            current0Number += numberImg
            current0.textContent = current0Number
        } else {
            current0Number = 0
            current0.textContent = current0Number
            player0.classList.remove('player--active')
            player1.classList.add('player--active')
            whichPlayer = false
        }
    } else {
        if(numberImg !== 1) {
            current1Number += numberImg
            current1.textContent = current1Number
        } else {
            current1Number = 0
            current1.textContent = current1Number
            player0.classList.add('player--active')
            player1.classList.remove('player--active')
            whichPlayer = true
        }
    }   
})

const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', ()=>{
    if(whichPlayer) {
        score0Number += current0Number
        score0.textContent = score0Number
        current0Number = 0
        current0.textContent = current0Number
        if(score0Number >= 100) {
            winningsPlay0.classList.remove('hidden')
            btnRoll.setAttribute('disabled', '');
            btnHold.setAttribute('disabled', '');
        }
        player0.classList.remove('player--active')
        player1.classList.add('player--active')
        whichPlayer = false
    } else {
        score1Number += current1Number
        score1.textContent = score1Number
        current1Number = 0
        current1.textContent = current1Number
        if(score1Number >= 100) {
            winningsPlay1.classList.remove('hidden')
            btnRoll.setAttribute('disabled', '');
            btnHold.setAttribute('disabled', '');
        }
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
        whichPlayer = true
    }
})

const btnNew = document.querySelector('.btn--new');
btnNew.addEventListener('click', ()=>{
    btnHold.removeAttribute("disabled");
    btnRoll.removeAttribute("disabled");
    current0Number = 0
    score0Number = 0
    current1Number = 0
    score1Number = 0
    whichPlayer = true;
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    current0.textContent = current0Number
    current1.textContent = current1Number
    score0.textContent = score0Number
    score1.textContent = score1Number
    dice.classList.add('hidden')
    winningsPlay1.classList.add('hidden')
    winningsPlay0.classList.add('hidden')
})
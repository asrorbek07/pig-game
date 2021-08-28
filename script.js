'use strict';
const elScore0 = document.querySelector('#score--0');
const elScore1 = document.querySelector('#score--1');
const elDice = document.querySelector('.dice');
const elBtnNew = document.querySelector('.btn--new');
const elBtnRoll = document.querySelector('.btn--roll');
const elBtnHold = document.querySelector('.btn--hold');
const elCurrent0 = document.querySelector('#current--0');
const elCurrent1 = document.querySelector('#current--1');
const elPlayer0 = document.querySelector('.player--0');
const elPlayer1 = document.querySelector('.player--1');
let scores, currentScore, activeplayer, playing;
function firstParametr(){
  scores = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playing = true;

  elScore0.textContent = 0;
  elScore1.textContent = 0;
  elCurrent0.textContent = 0;
  elCurrent1.textContent = 0;
  elDice.classList.add('hidden');

  elPlayer0.classList.add('player--active');
  elPlayer1.classList.remove('player--active');
  elPlayer0.classList.remove('player--winner');
  elPlayer1.classList.remove('player--winner');
}
firstParametr();



function changePlayer(){
    elPlayer0.classList.toggle('player--active');
    elPlayer1.classList.toggle('player--active');
    currentScore = 0;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentScore;
    activeplayer = activeplayer === 0 ? 1 : 0;
}

elBtnNew.addEventListener('click', function () {
  firstParametr();
})



elBtnRoll.addEventListener('click', function () {
    if(playing){
  const dice = Math.trunc(Math.random() * 6) + 1;
  elDice.classList.contains('hidden')? elDice.classList.remove('hidden'):
  elDice.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentScore;
  } else {
    changePlayer();
  }
}
});

elBtnHold.addEventListener('click', function(){
    if(playing){
scores[activeplayer]+=currentScore;
console.log(scores[activeplayer]);
  document.querySelector(`#score--${activeplayer}`).textContent=scores[activeplayer];
  if(scores[activeplayer]>=100){
      playing=false;
      elDice.classList.add('hidden');
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
      document.querySelector(`#current--${activeplayer}`).textContent=0;
  }else{
    changePlayer();
    elDice.classList.add('hidden');
  }
}
});

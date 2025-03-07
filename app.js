/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//// vue.js

const App = Vue.createApp({
    data() {
        return {
            score: [],
            currentScore: 0,
            activePlayer: 0,
            gamePlaying: true,
            dice: 1,
            diceSrc: ""
        }
    },
    methods: {
        rollDice() {
            // get random number between 1 - 6
            let ran = Math.floor(Math.random() * 6) + 1;
            this.dice = ran;
            this.currentScore += ran;
            this.diceSrc = "dice-"+this.dice+".png";
        },
        hold() {
            this.score[this.activePlayer] += parseInt(this.currentScore);
        }
    }
});
App.mount('#game');



/// vanilla javascript



// var scores, roundScore, activePlayer, gamePlaying = true;

// init();

// document.querySelector('.btn-roll').addEventListener('click', function() {
    
//     if (gamePlaying) {
        
//         var dice = Math.floor(Math.random() * 6) + 1;
//         var diceDOM = document.querySelector('.dice');
    
//         diceDOM.style.display = 'block';
    
//         diceDOM.src = 'dice-'+dice+'.png';
    
//         if (dice !== 1) {
        
//             roundScore += dice;
//             document.getElementById('current-'+activePlayer).textContent = roundScore;
//         } else {
        
//             nextPlayer();
        
//         }
//     }
// });

// document.querySelector('.btn-hold').addEventListener('click', function() {
   
//     if (gamePlaying) {
        
//         scores[activePlayer] += roundScore;
//         document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    
//         if (scores[activePlayer] >= 100) {
       
//             document.querySelector('#name-'+activePlayer).textContent = 'winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         }
//         else {
//             nextPlayer();    
//         }
//     }
    
    
// });

// document.querySelector('.btn-new').addEventListener('click', init);


// function nextPlayer() {
    
//     roundScore = 0;
//     activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
        
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
        
//     document.querySelector('.dice').style.display = 'none';
// }

// function init() {
//     gamePlaying = true;
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('#name-0').textContent = 'player 1';
//     document.querySelector('#name-1').innerHTML = 'player 2';
    
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
    
    
// }
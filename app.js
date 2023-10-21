const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Display = document.querySelector('#p1Add');
const p2Display = document.querySelector('#p2Add');
const resetButton = document.querySelector('#Reset');
const playToSelect = document.querySelector('#scoreSelect');
let isGameOver = false;
let winningScore = 3;
let p1Sc = 0;
let p2Sc = 0;
p1Display.addEventListener('click',function(e){
    if(!isGameOver){
    p1Sc +=1;
    if(p1Sc===winningScore){
        isGameOver=true;
        p1Score.classList.add('winner')
        p2Score.classList.add('loser')
    }
    p1Score.textContent=p1Sc;
    }
});
p2Display.addEventListener('click',function(e){
    if(!isGameOver){
        p2Sc +=1;
        if(p2Sc===winningScore){
            isGameOver=true;
            p1Score.classList.add('loser')
            p2Score.classList.add('winner')
        }
    p2Score.textContent=p2Sc;
    }
});
function reset(){
    isGameOver=false;
    p1Sc=0;
    p2Sc=0;
    p1Score.textContent=p1Sc;
    p2Score.textContent=p2Sc;
    p1Score.classList.remove('winner')
    p2Score.classList.remove('loser')
}
resetButton.addEventListener('click',reset);
playToSelect.addEventListener('change',function(e){
    winningScore=parseInt(this.value);
    reset();
})
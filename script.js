// creation of players and scores containers
let scoreContainer = document.createElement("div");
scoreContainer.className = "calculator-container";
document.body.insertAdjacentElement("afterbegin",scoreContainer);

let player1 = document.createElement("div");
player1.className = "player1";
scoreContainer.insertAdjacentElement("beforeend",player1);
let playerNameX = document.createElement("p");
playerNameX.id = "player1";
playerNameX.textContent = "X";
player1.insertAdjacentElement("afterbegin",playerNameX);
let playerX = document.createElement("p");
playerX.id = "playerX";
player1.insertAdjacentElement("beforeend",playerX);

let player2 = document.createElement("div");
player2.className = "player2";
scoreContainer.insertAdjacentElement("beforeend",player2);
let playerNameO = document.createElement("p");
playerNameO.id = "player2";
playerNameO.textContent = "O";
player2.insertAdjacentElement("afterbegin",playerNameO);
let playerO = document.createElement("p");
playerO.id = "playerO";
player2.insertAdjacentElement("beforeend",playerO);

let player = "X";
let startPlayer = document.createElement("p");
startPlayer.id = "startPlayer";
startPlayer.textContent = "player " + player + " starts the game"
scoreContainer.insertAdjacentElement("beforeend",startPlayer);



//board
let board = document.createElement("div");
board.id ="board";
document.body.insertAdjacentElement("beforeend",board);

for(let i=1; i<=9; i++){
    const carre= document.createElement("div");
    carre.id = "c" + i;
    carre.classList.add("square");
    board.appendChild(carre);
}


//creation buttons start, replay and score
let start = document.createElement("div");
let btnStart = document.createElement("button");
btnStart.textContent = "Start";
btnStart.className = "btn";
btnStart.id = "start";
document.body.insertAdjacentElement("beforeend",start);
start.insertAdjacentElement("beforeend",btnStart);
btnStart.addEventListener("click",restart);

let btnReplay = document.createElement("button");
btnReplay.textContent = "Replay";
btnReplay.className = "btn";
btnReplay.id = "replay";
start.insertAdjacentElement("beforeend",btnReplay);
btnReplay.addEventListener("click",replay);

let btnScore = document.createElement("button");
btnScore.textContent = "Score";
btnScore.className = "btn"
btnScore.id = "score";
start.insertAdjacentElement("beforeend",btnScore);
btnScore.addEventListener("click",winningCondi);


//creation des event listener pour pouvoir encoder les X et O
let car1 = document.getElementById("c1");
let car2 = document.getElementById("c2");
let car3 = document.getElementById("c3");
let car4 = document.getElementById("c4");
let car5 = document.getElementById("c5");
let car6 = document.getElementById("c6");
let car7 = document.getElementById("c7");
let car8 = document.getElementById("c8");
let car9 = document.getElementById("c9");

car1.addEventListener("click",function(){initializegame(car1);});
car2.addEventListener("click",function(){initializegame(car2);});
car3.addEventListener("click",function(){initializegame(car3);});
car4.addEventListener("click",function(){initializegame(car4);});
car5.addEventListener("click",function(){initializegame(car5);});
car6.addEventListener("click",function(){initializegame(car6);});
car7.addEventListener("click",function(){initializegame(car7);});
car8.addEventListener("click",function(){initializegame(car8);});
car9.addEventListener("click",function(){initializegame(car9);});

let answers = ["", "", "", "", "", "", "", "", "", ""];
function initializegame(para){
    if (para.textContent == ""){
        para.textContent = player;
        let cas = para.id;
        let index = cas[1];
        answers[index] = para.textContent;
        if (player === "X"){
            player = "O";
        } else {
            player = "X";
        }
    }
}


// winning conditions
let scorePlayerX = document.getElementById("playerX");
let oldScoreX = 0;
let scorePlayerO = document.getElementById("playerO");
let oldScoreO = 0;
let score ="";

function winningCondi(){
    if (answers[1] == answers[2] && answers[2] == answers[3]){
        score = answers[1];
        upDateScore();
    } else if (answers[4] == answers[5] && answers[5] == answers[6]) {
        score = answers[4];
        upDateScore();
    }else if (answers[7] == answers[8] && answers[8] == answers[9]) {
        score = answers[7];
        upDateScore();
    }else if (answers[1] == answers[4] && answers[4] == answers[7]) {
        score = answers[1];
        upDateScore();
    }else if (answers[2] == answers[5] && answers[5] == answers[8]) {
        score = answers[2];
        upDateScore();
    }else if (answers[3] == answers[6] && answers[6] == answers[9]) {
        score = answers[3];
        upDateScore();
    }else if (answers[1] == answers[5] && answers[5] == answers[9]) {
        score = answers[1];
        upDateScore();
    }else if (answers[3] == answers[5] && answers[5] == answers[7]) {
        score = answers[3];
        upDateScore();
    }
};


//function to update the score
function upDateScore(){
    if (score == "X"){
        oldScoreX ++
        scorePlayerX.textContent = oldScoreX;
        btnScore.disabled = true
    }else if (score == "O"){
        oldScoreO ++
        scorePlayerO.textContent = oldScoreO;
        btnScore.disabled = true
    }
}


// function to update the starting player
function upDateStartPlayer(){
    startPlayer.textContent = "player " + player + " starts the game";
}


// function to replay 
function replay(){
    for (let i=1; i<=9; i++){
        let cell = document.getElementById("c"+i);
        cell.textContent = "";
    }
    for(let i=1; i<=9; i++){
        answers[i] = "";

    }
    btnScore.disabled = false
}


// function to restart the game and put the scores back to 0
function restart(){
    for (let i=1; i<=9; i++){
        let cell = document.getElementById("c"+i);
        cell.textContent = "";
    }
    for(let i=1; i<=9; i++){
        answers[i] = "";

    }
    scorePlayerO.textContent = "";
    scorePlayerX.textContent = "";
    btnScore.disabled = false
}
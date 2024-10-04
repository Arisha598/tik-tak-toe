var box = document.querySelectorAll(".box");
var btn= document.querySelector(".reset button");
let newgamebtn = document.querySelector(".new-btn");
let msgconatienr=document.querySelector(".msg-container");
let message= document.querySelector(".msg");

//Player 1 Player2
var turn0 = true; //turn of player 1

//Winning Pattern in 2D array
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        console.log("Clicking");
        if(turn0){
            boxes.innerText="0";
            turn0 = false;
        }
        else{
            boxes.innerText="X";
            turn0 = true;
        }
        boxes.disabled=true;
        winnerPlayer();
    })

});


const resetGame = ()=>{
    turn0 = true;
    enabledBoxes();
    msgconatienr.classList.add("hide");
}
const DisableBoxes=()=>{
    for( let boxes of box){
        boxes.disabled=true;
    }
}
const enabledBoxes = () => {
    for(let boxes of box){
        boxes.disabled = false;
    }
};
const ShowWinner =(winner,pos1)=>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgconatienr.classList.remove("hide");
    DisableBoxes();

}
const winnerPlayer= ()=>{
    for(let pattern of winpattern){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 == pos2  && pos2 == pos3){
                console.log("Winner",pos1);
                ShowWinner(pos1);
            }
        }
    }
}

newgamebtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
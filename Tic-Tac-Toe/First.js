let btn1=document.querySelector(".btn");
let body=document.querySelector("body");
let curr="light";
btn1.addEventListener("click",()=>{
    if(curr==="light"){
        curr="darkt";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curr="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curr);
});
let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rst-btn");
let turnO=true;//players turn
let newbtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinners();
    });
});
const checkWinners=()=>{
    for(let ptn of winPatterns){
        let posval1=boxes[ptn[0]].innerText;
        let posval2=boxes[ptn[1]].innerText;
        let posval3=boxes[ptn[2]].innerText;
        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1===posval2 && posval2===posval3){
                console.log(`Winner ${posval1}`);
                showWinner(posval1);
             }
        }
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(posval1)=>{
    msg.innerText=`Congratulation Winner is ${posval1}`;
    msgcont.classList.remove("hide");
    disableBoxes();
};
newbtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);
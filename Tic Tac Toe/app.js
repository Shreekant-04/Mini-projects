let boxes=document.querySelectorAll(".box");
let reset_btn =document.querySelector('.reset-btn');
let newGame_btn=document.querySelector('.newGame');
let msgContainer=document.querySelector('.msgContainer');
let msg= document.querySelector('#msg');
let tieMsg=document.querySelector('#tieMsg');

let turn0 =true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [2,4,6],
];


const disableBoxes= ()=>{
    for (box of boxes){
        box.disabled=true;
    }
}
const enableBoxes= ()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.style.display="none";
        tieMsg.style.display="none";



    }
}
let count=0;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turn0){
            box.innerText="O"
            turn0=false;
            count++;
        }else{
            box.innerText="X"
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkWinner();
    })

})

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if (val1!=""&& val2!=""&& val3!=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                count=0;

            }
        }
    }

    if (count === 9) {
        tie();
        count=0;
    }
    
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.style.display="block";
    disableBoxes();

}
const tie=()=>{
    tieMsg.style.display="block";
}
newGame_btn.addEventListener('click',enableBoxes);
reset_btn.addEventListener('click',enableBoxes);


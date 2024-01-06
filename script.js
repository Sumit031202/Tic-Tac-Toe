let boxes = document.body.querySelectorAll(".box");
let resetBtn = document.body.querySelector(".reset");
let turn = true;
let para = document.body.querySelector(".para");
const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turn) {
            box.innerText = "X";
            box.style.color = "#BA0021";
            turn = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "greenyellow";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
// if(checkWinner()!=1){
//     para.innerText="Draw";
// }

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enable = () => {
    turn = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

let resetG=()=>{
    enable();
    resetBtn.innerText=`Reset Game`;
    para.innerText="";
}
let t=0;
let checkWinner = () => {
    for (pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if (value1 != "" && value2 != "" && value3 != "") {
            if (value1 == value2 && value2 == value3) {
                para.innerText = `hurray! player ${value1} won`;
                resetBtn.innerText = `New Game`;
                disable();
                return 1;
            }
        }
    }
    t++;
    if(t==9){
        para.innerText="Draw";
    }
}
resetBtn.addEventListener("click", resetG);
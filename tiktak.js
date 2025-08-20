let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".winner-container");
let msg = document.querySelector(".win");
let newGbtn = document.querySelector(".newG-btn");
let count = 0;
let true0 = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(true0===true){
            box.innerText = "O"
            true0 = false;
        }else{
            box.innerText = "X"
            true0 = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if(count===9 && !iswinner){
            NoWinner();
        }
    });
});
const reset = () =>{
    true0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const NoWinner = () =>{
    msg.innerHTML = `The.game.is.draw `
    msgContainer.classList.remove("hide")
    disableBoxes();
}
const showWinner = (boss) =>{
    msg.innerHTML = `congratulations you.win.${boss} `
    msgContainer.classList.remove("hide")
    disableBoxes();
}
const checkwinner = () =>{
    for(let pattern of winPatterns){
        let PostVal1 = boxes[pattern[0]].innerText;
        let PostVal2 = boxes[pattern[1]].innerText;
        let PostVal3 = boxes[pattern[2]].innerText;

        if(PostVal1 != "" && PostVal2 != "" && PostVal3 != ""){
            if(PostVal1 === PostVal2 && PostVal2 === PostVal3){
                console.log("winner", PostVal1);

                showWinner(PostVal1);
            }
            
        }
    };
}
newGbtn.addEventListener("click",reset)
resetbtn.addEventListener("click",reset)
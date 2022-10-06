console.log("hello")

function getHumanChoice() {
    const humanChoice = prompt("Please choose between: 1)🪨 2)📄 3)✂️");
    return humanChoice.toLowerCase();
}

function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    
    return arr[random];
}

console.log(getHumanChoice())
console.log(getComputerChoice())
let ctx = document.getElementById("ctx").getContext("2d");

// ctx.fillText("test test test", 150, 250);

let WIDTH = 500;
let HEIGHT = 500;

let snakeItems;
let foodItems;

ctx.font = "20px Helvetica";

let snakeObj = {
    // snakeObj to be repeated as segments of
    //multi-part snake graphic
    width: 20,
    height: 20
};

let foodObj = {
    width: 20,
    height: 20
};

const startGame = function () {
    
}
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
    height: 20,
    color: "green"
};

let foodObj = {
    width: 20,
    height: 20,
    color: "yellow"
};

const drawSnake = function (snObj, i) {
    ctx.save ();
    ctx.fillStyle = snakeObj.color;
    ctx.fillRect(x, y, snakeObj.width, snakeObj.height);
    ctx.restore ();
}

const startGame = function () {
    snakeItems = [
        {x:220, y:200},
        {x:210, y:200},
        {x:200, y:200}
    ];

    foodItems [];
}
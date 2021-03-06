
let ctx = document.getElementById("ctx").getContext("2d");

// ctx.fillText("test test test", 150, 250);

let WIDTH = 500;
let HEIGHT = 500;

let snakeItems;
let foodItems;
let direction;

ctx.font = "20px Helvetica";

// let snakeBody
let snakeObj = {
    // snakeObj to be repeated as segments of
    // multi-part snake graphic
    width: 20,
    height: 20,
    color: "green"
};

document.onkeydown = function (event) {
    // 0 - left, 1 - up,
    // 2 - right, 3 - down
    if (event.keyCode == 37) {
        direction = 0;
        console.log("movin' left");
    }
    else if (event.keyCode == 38) {
        direction = 1;
        console.log("movin' up");
    }
    else if (event.keyCode == 39) {
        direction = 2;
        console.log("movin' right");
    }
    else if (event.keyCode == 40) {
        direction = 3;
        console.log("movin' down");
    }
    else if (event.keyCode == 32) {
        direction = 4;
        console.log("pause");
    }
}

// let food
let foodObj = {
    width: 20,
    height: 20,
    color: "yellow"
};

const drawSnake = function (snObj, i) {
    ctx.save ();
    if (i == 0) {
        ctx.fillStyle = 'black';
    }
    else {
        ctx.fillStyle = snakeObj.color;
    }
    ctx.fillRect(snObj.x, snObj.y, snakeObj.width, snakeObj.height);
    ctx.restore ();
}

const drawFood = function (fObj, i) {
    ctx.save ();
    ctx.fillStyle = foodObj.color;
    ctx.fillRect(fObj.x, fObj.y, foodObj.width, foodObj.height);
    ctx.restore ();
}

const updateSnakeItems = function () {
    for (let i = snakeItems.length - 1; i >= 0; i--) {
        // if moving left
        if (direction == 0) {
            if (i == 0) {
                snakeItems[i].x = snakeItems[i].x - 5;
                // snakeItems[i].y = snakeItems[i-1].y;
            }
            else {
                snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i-1].y;
            }
        }
        // if moving up
        if (direction == 1) {
            if (i == 0) {
                // snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i].y - 5;
            }
            else {
                snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i-1].y;
            }
        }
        // if moving right
        if (direction == 2) {
            if (i == 0) {
                snakeItems[i].x = snakeItems[i].x + 5;
                // snakeItems[i].y = snakeItems[i-1].y;
            }
            else {
                snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i-1].y;
            }
        }
        // if moving down
        if (direction == 3) {
            if (i == 0) {
                // snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i].y + 5;
            }
            else {
                snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i-1].y;
            }
        }
        if (direction == 4) {
            if (i == 0) {
                snakeItems[i].x = snakeItems[i].x;
                snakeItems[i].y = snakeItems[i].y;
            }
            else {
                snakeItems[i].x = snakeItems[i-1].x;
                snakeItems[i].y = snakeItems[i-1].y;
            }
        }
    }
}

const updateSnake = function () {
    ctx.clearRect(0,0, WIDTH, HEIGHT);
    snakeItems.forEach(drawSnake);
    updateSnakeItems();
}

const startGame = function () {
    // snakeList
    snakeItems = [
        {x:220, y:200},
        {x:210, y:200},
        {x:200, y:200}
    ];
    // foodList
    foodItems = [];
    direction = 99;
    // snakeItems.forEach(drawSnake);
    setInterval(updateSnake, 50);
}

startGame ();
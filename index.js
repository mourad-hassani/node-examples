var rect = require('./rectangle');

function solveRect(l, b) {
    console.log(`Solving for rectangle with l= ${l} and b= ${b}`);

    rect(l, b, (error, rectangle) => {
        if (error) {
            console.log("Error: ", error.message);
        } else {
            console.log(`the area of the rectangle (${l}, ${b}) is : ${rectangle.area(l, b)} and the perimeter is ${rectangle.perimeter(l, b)}`)
        }
    });
}

solveRect(3, 4);
solveRect(6, 5);
solveRect(-3, 4);
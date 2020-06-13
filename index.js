var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solution for rectangle with l = " +l+ " and b = " +b)
    rect(l,b,(err, rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("The area is "+rectangle.area()+". And perimeter is "+rectangle.perimeter()+".");
        }
    });
console.log("This statements is after the call of rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
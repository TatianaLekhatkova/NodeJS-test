var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solution for rectangle with l = " +l+ " and b = " +b)
    if (l<=0 || b<=0) {
        console.log("Rectangle dimensions should be bigger than zero: l = " +l+ " and b = " +b)
    }
    else {
        console.log("The area of the rectangle is "+rect.area(l,b)+". And perimeter is "+rect.perimeter(l,b)+".");
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
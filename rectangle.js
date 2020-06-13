module.exports = (x,y,callback) => {
    if (x<=0 || y<=0) {
        setTimeout(() => 
        callback(new Error("Rectangle dimensions should be bigger than zero: l = " +x+ " and b = " +y+"."), null), 
        2000);
            }
    else {
        setTimeout(() => 
            callback(null, 
                {area: (x, y) => (x*y),
                perimeter: (x, y) => (2*(x+y))
                }), 
            2000);
    }
}





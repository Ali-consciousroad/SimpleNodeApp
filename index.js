// File-based module
// Use values imported from rectangles.js to calculate the area and perimeter of a rectangle
const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    // Callback 
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            /* Thanks to JS closure property, we don't need 
            to write again the l and b parameters inside the area and permiters functions */
            console.log("The area of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = " 
            + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
};

// Function call for different values 
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
// Factory function

/** The Factory Function is similar to constructor functions/class functions, 
 * but instead of using new to create an object, factory 
 * functions simply creates an object and returns it. */

function createCircle(radius) {
    return{
        radius,
        draw() {
            console.log('circle printrd successfully');
        }
    };
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(4);
console.log(circle2);

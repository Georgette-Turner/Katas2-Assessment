
// Kata 01 Add

function add(x, y) {
    return x + y
}
// const result = sum(2, 4)
console.log('Kata 1:', add(2, 4))
console.log('Kata 1:', add(2, 1))
console.log('Kata 1:', add(100, 2))


// Kata 02 Multiply use addtion function/
function multiply(x, y) {
   let num = 0;
    for (var counter = 0; counter < y; counter++){
        num = add(num,x)
    }
        
    return num;
}

console.log('Kata 2:', multiply(2, 3))
console.log('Kata 2:', multiply(10, 4))
console.log('Kata 2:', multiply(4, 3))


// Kata 03 Exponent
function power(x, n) {
let result = 1;

    for (let count = 0; count < n; count++) {
        result = multiply(result,x)
    }
    return result;
}

console.log('Kata 3:', power(3, 4))
console.log('Kata 3:', power(3, 3))
console.log('Kata 3:', power(2, 4))


// Kata 04 Factoral
function Factoral(x) {
        let result = 1
        for (let counter = 5; counter < x; counter++){
            result = multiply(result, counter)
        result = (counter - 1) (counter - 2) (counter - 3) (counter - 4)
            when (counter > 0)
                
        }

    return result;
}

console.log('Kata 4:', Factoral(5))

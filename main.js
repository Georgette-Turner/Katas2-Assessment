
// Kata 01 Add

function add(x, y) {
    return x + y
}
// const result = sum(2, 4)
console.log('Kata 1:', add(2, 4))
console.log('Kata 1:', add(2, 1))
console.log('Kata 1:', add(100, 2))


// Kata 02 Multiply use add funct
function multiply(x, y) {
    return x + y
    // 0 times any #/
    if (y == 0)
        return 0;

    // add x one by one/
    if (y > 0)
        return (x + multiply(x, y - 1));
}

console.log('Kata 2:', (2, 1 - 1))
console.log('Kata 2:', (10, 5 - 1))
console.log('Kata 2:', (12, 6 - 1))


// Kata 03 Exponent
function power(x, n) {
    var result = 1;
    if (n == undefined)
        exponent = 2;
    for (var i = 1; i <= + exponent; i++) {
        result = result * base;
    }
    return result;
}

console.log('Kata 3:', (2, 4))
console.log('Kata 3:', (4, 16))
console.log('Kata 3:', (8, 64))


// Kata 04 Factoral
function Factoral(x) {
    if (x === 0) {
        return 1;
    }
    return x * Factoral(x - 1);
}

console.log('Kata 4:', (10, 15))
console.log('Kata 4:', (30, 15))
console.log('Kata 4:', (50, 20))
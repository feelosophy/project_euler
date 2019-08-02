// https://euler.jakumo.org/problems/view/14.html
const NUMBER = 1000000;
let max = {
    number: 0,
    length: -1,
};
for (let i = 1; i < NUMBER; i++) {
    let n = i;
    const array = [];
    array.push(n);
    let string  = `${n} -> `;
    while (n !== 1) {
        if (!(n % 2)) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        array.push(n);
    }
    if (array.length > max.length) {
        max = {
            number: i,
            length: array.length,
        }
    }
}

console.log(max);

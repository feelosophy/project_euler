// https://euler.jakumo.org/problems/view/40.html
let string = '0.';
for (let i = 1; i  <= 1000000; i++) {
    string += i;
}

const partString = string.substr(2);
console.log(partString[0] * partString[9] * partString[99] * partString[999] * partString[9999] * partString[99999] * partString[999999]);

let numbersArray = [];
for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
        numbersArray.push(Math.pow(a, b));
    }
}

let result = [...new Set(numbersArray)];
console.log(result.length);

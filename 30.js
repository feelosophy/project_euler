// искуственное ограничение, так как про него ничего не сказано (при увеличении в 10 раз результат не меняется)
const ITERATIONS = 1000000;
const POW = 5;
const resultArray = [];
for (let i = 2; i < ITERATIONS; i++) {
    let numberArray = i.toString().split('');
    let sum = 0;
    numberArray.forEach(item => {
        sum += Math.pow(parseInt(item, 10), POW);
    });

    if (sum === i) {
        resultArray.push(i);
    }
}

console.log(resultArray);

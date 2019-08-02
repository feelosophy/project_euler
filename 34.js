// искуственное ограничение, так как про него ничего не сказано (при увеличении в 10 раз результат не меняется)
const ITERATIONS = 1000000;


const factorial = (n) => (n !== 1 && n > 0) ? n * factorial(n - 1) : 1;

const resultArray = [];
for (let i = 3; i < ITERATIONS; i++) {
    let numberArray = i.toString().split('');
    let sum = 0;
    numberArray.forEach(item => {
        sum += factorial(parseInt(item));
    });

    if (sum === i) {
        resultArray.push(i);
    }
}

console.log(resultArray);


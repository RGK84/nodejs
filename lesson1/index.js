import colors from 'colors';

const [start, end] = process.argv.splice(2);

if (!start || !end) {
    console.log(colors.red("Необходимо ввести 2 целых числа"));
    process.exit();
} 

const primes = new Array;
nextPrime:
for (let i = start; i <= end; i++) {
    if (i < 2) i = 2;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    primes.push(i)
}

if (primes.length === 0) {
    console.log(colors.red("Простых чисел в заданном диапазоне нет"));
} else {
    primes.forEach((item, index) => {
        if (index%3 == 0) console.log(colors.red(item));
        else if (index%3 == 1) console.log(colors.yellow(item));
        else console.log(colors.green(item));
    })
}
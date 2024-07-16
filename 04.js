// Activity 1

// Task 1
for(let i = 1 ; i <=10; i++){
    console.log(i);
}

// Task 2
let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

// Activity 2
// Task 3
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`Sum: ${sum}`);

// Task 4
let num = 10;
while( num != 0){
    console.log(num);
    num--;
}

// Activity 3
// Task 5
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Task 6
let num1 = 5;
let factorial = 1;

let k = num1;

do {
    factorial *= k;
    k--;
} while (k >= 1);

console.log(`Factorial of ${num1}: ${factorial}`);
// Activity 4
// Task 7
let nth = 5;

for (let row = 1; row <= nth; row++) {
    let pattern = '';

    for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }
    
    console.log(pattern);
}

// Activity 5
// Task 8
for (let l = 1; l <= 10; l++) {
    
    if (l === 5) {
        continue;
    }

    console.log(l);
}

// Task 9
for (let c = 1; c <= 10; c++) {

    if (c === 7) {
        break;
    }

    console.log(c);
}


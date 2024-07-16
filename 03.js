let num = 5;

// Activity 1

if(num > 0 ){
    console.log("num is positive");
 } else if(num < 0){
    console.log("num is negative");
}else{
    console.log("num is zero");
}

let age = 18
if( age >= 18){
    console.log("Voter")
} else{
    console.log("Not a voter")

}

// Activity 2
let num1 = 5;
let num2 = 10;
let num3 = 15;

if(num1 > num2 && num1 > num3){
    console.log("num1 is greater")
}else if(num2 > num1 && num2 > num3){
    console.log("num2 is greater")
} else{
    console.log("num3 is greater")
}

// Activity 3
let Day = 2;

switch(Day){
    case 1: 
    console.log("Monday");
    break;
case 2: 
    console.log("Tuesday");
    break;
case 3: 
    console.log("Wednesday");
    break;
case 4: 
    console.log("Thursday");
    break;
case 5: 
    console.log("Friday");
    break;
case 6: 
    console.log("Saturday");
    break;
case 7: 
    console.log("Sunday");
    break;
default: 
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

let grade = 6;
switch(grade){
    case 1:
        console.log("F");
        break;
        case 2:
            console.log("E");
            break;
            case 3:
                console.log("D");
                break;
                case 4:
                    console.log("C");
                    break;
                    case 5:
                        console.log("B");
                        break;
                        case 6:
                            console.log("A");
}

// Activity 4
let numlet = 5;
let result = numlet % 2 === 0? "Even" : "Odd";
console.log(result);

// Activity 5
let year = 2020
let isLeapYear = year % 4 === 0 && year % 100 !== 0? "Leap Year" : "Not a Leap Year";

console.log(isLeapYear);



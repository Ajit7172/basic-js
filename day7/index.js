// for => ( start, condition, stepper){}
// print from 1 to 10 number
for (let i=0; i<=10; i++) {
    console.log(i);
}

// do while do{//logic}while(condition)
 
let j=0;
do{
    console.log(j);
    j++;
} while (j<= 10);


// switch case

const day = 2;
switch(day){
    case 1:
        console.log("sun");
        break;
        default:
            console.log("Invalid Data");
}

// if else (es5)
// es6

// Ternary Operator


function 


//es6
// Write a js function to add 2 numbers
//result 2,2 => 4
const sum = (num1, num2) => {
    return num1 + num2;

};

//function call 
const resultss = sum(2,2)

const arr1 = ['pizza', 'tea', 'coffee'];
const arr2 = ['momo', 'fries', 'pizza'];

// find the common one

const answer = arr1.filter((item)) => arr2.includes()


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//***REDUCE***

const getTotalMass = characters.reduce(callbackFn);

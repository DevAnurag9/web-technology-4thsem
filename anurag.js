// var x=10;
// console.log(x);
/*
let x=10;
{
    let x=15;
}
console.log(x);

const arr=[1,3,5];

arr.push(9);
console.log(arr);
console.log(arr[2]);
arr[2]=3;
console.log(arr);

//IIFE =immediatly inviked function expression
// (function tabhi(){
//     console.log("test IITS");
// })

//ANONYMUS FUNCTION
let show1=function(){
    console.log("anonymous function");
}
show1();

let show2=()=>{
    console.log("arrow function");
}
show2();

let add=(a,b)=>(a+b);
console.log(add(5,6));

//multiple line anonymous function
let sum=(a,b=50) =>{
    let result=0;
    result=a+b;
    return result;
}

//console.log(sum(5,10));
console.log(sum(5));

//how to make class in javascript
// Constructor function
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

// Creating student objects
const students = [
  new Student("Abhishek", 78),
  new Student("Rahul", 85),
  new Student("Neha", 92),
  new Student("Priya", 88),
  new Student("Suresh", 80),
  new Student("Anjali", 90)
];


students.sort((a, b) => b.marks - a.marks);


const fourthHighest = students[3];

console.log("4th Highest Marks Student:");
console.log("Name:", fourthHighest.name);
console.log("Marks:", fourthHighest.marks);

//write a function to check odd and even number
function OE(num){
    if(num%2==0){
        return "Even Number";
    }else{
        return "Odd Number";
    }
}

console.log(OE(7));
console.log(OE(12));

// Anonymous function to check odd or even
let checkOddEven = function (num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};


console.log(checkOddEven(10)); 
console.log(checkOddEven(7)); 

// Arrow function to check odd or even
const OddEven = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};


console.log(OddEven(12)); 
console.log(OddEven(9));  

//use anonymous to find greater number among two numbers
let greaterNumber=function(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }   
}

console.log(greaterNumber(10,15));
console.log(greaterNumber(25,5));

//use anonymous functon to find greater number among three numbers
let greaterAmongThree=function(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

console.log(greaterAmongThree(10,20,15));


let calculator=function(a,b,operator){
    switch(operator){   
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            return "Invalid operator";
    }   
}

console.log(calculator(10,5,'+'));
console.log(calculator(7,5,'-'));
console.log(calculator(6,5,'*'));
console.log(calculator(15,5,'/'));
console.log(calculator(14,5,'%'));


const user={
    name:"Abhishek",
    age:20,
    welcome:function(){
        console.log('${this.name},welcome to ES6')
        console.log(this)
    }
};

user.welcome();

const emplyoee={
    name:"Kunal",
    age:22,
    salary:50000,
    details:function(){
        console.log(`${this.name} is ${this.age} years old and salary is ${this.salary} is a emplyoee of kiet`)
        console.log(this)
    }
};
emplyoee.details()

//iner function

let a=10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();

//lexical this arrow function ke sath chalta hai

let abc={
    name:"Abhishek",
    outer : function(){
        console.log("Here in log",this.name),
        function inner(){
            console.log("Here in inner log",this.name)
        }
        inner();
    }
}
abc.outer();


let abcd={
    name:"Abhishek",
    outer : function(){ 
        console.log("Here in log",this.name),
         inner=()=>{
            console.log("Here in inner log",this.name)
        }       
        inner();

    }
}
abcd.outer();


let number=[1,2,3,4,5];
let[a, b, c]=number;
console.log(a);
console.log(b);
console.log(c);

let myobj={
    name:"Abhishek",
    age:20,
    key:"xyz"
}
let duplictae={...myobj,key:"abc"};
duplicate["Adress"]="Noida";


let emplyoee={
    name:"Abhishek",
    department:"IT",
    salary:50000,
}
let duplictae={...emplyoee,department:"HR"};
duplicate["Adress"]="Noida";
console.log(duplicate);

console.log("1");
setTimeout(()=>{
    console.log("2");
},2000);
console.log("3");


function bakecake(mycallback){
    console.log("Baking cake...");
    setTimeout(()=>{
        console.log("Cake is ready!");
        mycallback();
    }
    ,2000);
}
bakecake(()=>{
    console.log("Eating cake...");
    });
    */

    //write a program in js to check wheather you can go to kashmir or not based on petrol availability the minimum petrol required is 100 l . do this using Promise
function checkPetrol(petrol){
    return new Promise((resolve,reject)=>{
        if(petrol>=100){
            resolve("You can go to Kashmir");
        }else{
            reject("You cannot go to Kashmir");
        }
    });
}
checkPetrol(120)
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});





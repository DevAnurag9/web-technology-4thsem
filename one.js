let numbers = [10,20,30]
let[a,b,c] = numbers
console.log(a);
console.log(b);
console.log(c);

let student = {
    name: "Anurag",
    age: 20,
    email: "as5746579@gmail.com.lk"
}

let duplicate = [student.name, student.age]

console.log(duplicate);

let employee = {
    name : "abc",
    empID: 23,
    designation: "xyz"
}

let myemployee = {...employee}
console.log(myemployee);

// function bakeCake(mycallBack){
//     console.log("1. Cake is Baking");
//     setTimeout(() => {
//         console.log("2. Cake is Baked");
//         mycallBack();
//     }, 3000);
// }
//     bakeCake(() =>{log("3. Cake is Ready to Serve")})


//Write a program in javascript to check whether i will go be able to go kashmir on basis of petrol if > 100l then yes otherwise 
// no using promise

function goKashmir(petrol) {
    return new Promise((resolve, reject) => {
        if (petrol > 100) {
            resolve("Yes, you can go to Kashmir!");
        } else {
            reject("No, you cannot go to Kashmir.");
        }
    });
}

console.log(goKashmir(120));

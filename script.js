// console.log("hello");
// console.log("My name is this");

// window.alert("This is a warning. Shut down your pc RIGHT NOWWWWW !!!!");

// document.getElementById("h1").textContent = "Hello World";
// document.getElementById("p").textContent = ("This is awesome");

//  let age = 2024-2005;
//  let price = 1 + 2;
//  let grade = 3.75;

// console.log(`My age is ${age} years old`);
// console.log(typeof price) 
// console.log(typeof age) 
// console.log(typeof grade) 

// let firstname= "shirish";
// let forsale= true;
// console.log(typeof forsale);
// console.log( firstname);
// console.log(`My first name is ${firstname}`);
// console.log(`My car is for sale ${forsale}`);

// let students = 4;
// students = students -= 3;
// students = students - 3;
// students = students * 3;
// students = students / 2;
// students = students ** 2;
// console.log(students)


// let username;

// username = window.prompt("Whats your name?"); 

// console.log(username);

// let username;

// document.getElementById("submit").onclick = function(){
// username = document.getElementById("input").value;
// document.getElementById("myh1").textContent= `Hello ${username}`
// }

// let age = window.prompt("How old are you");

// age +=1;

// console.log(age, typeof age);

// let x = "apple";
// let y = "apple";
// let z = "apple";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const PI = 3.1415;
// let radius;
// let circumferences;

// radius = window.prompt("Enter a radius of a circle")
// radius = Number(radius);

// circumferences= 2 * pi * radius

// console.log(circumferences);

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0 ;

increaseBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


decreaseBtn.onclick = function(){
    count --;
    countLabel.textContent = count;
}
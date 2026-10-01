// Activity 1
// ===========
// let div = document.querySelector(`.parent`);
// let newDiv = document.createElement(`div`);

// newDiv.id = `demo`;
// newDiv.className = `test`;

// let text = document.createTextNode('Hello World!');
// newDiv.appendChild(text);

// div.appendChild(`newDiv`);

// =========================================================

// Task 14 [required]
// ===========

// [1] Choose

// 1- Array جديدة بنفس الطول
// 2- find()
// 3- Array جديدة بالعناصر اللي حققت الشرط
// 4- undefined
// 5- Arrays

// =============================================

// [2] True/False

// 1- False
// 2- True
// 3- True
// 4- True
// 5- False

// =============================================

// [3] Complete

// 1-  const numbers = [1, 2, 3, 4];

// numbers.forEach((num) => {
//     console.log(num * 2);
// });

// =============================================

// 2-  const nums = [10,25,5,30,15,40];

// const result = nums.filter((num)=>{
//     return num > 20;
// });

// console.log(result);

// =============================================

// 3- const users = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:28},
//     {name:"Omar", age:30}
// ];

// const user = users.find((item)=>{
//     return item.age > 25;
// });

// console.log(user);

// =============================================

// 4-  const names = ["ali","mona","ahmed"];

// const result = names.map((name)=>{
//     return name.toUpperCase();
// });

// console.log(result);

// =============================================

// [4] To-Do

// const fruits = ["Apple","Banana","Orange"];

// =============================================

// (1)

// for(let fruit of fruits){
//     console.log(fruit)
// }

// (2)

// for(let index in fruits){
//     console.log(index);
// }

// (3)

// fruits.forEach((fruit, index) => {
//     console.log(`${index} -> ${fruit}`);
// })

// =============================================

// [5] To Do

// (1)

// let sum = (a,b) => a+b;

// =============================================

// (2)

// const user = {
//     name:"Mostafa",
//     age:25
// };

// const {name, age} = user;

// =============================================

// (3)

// console.log(`hello ${name}`);

// =============================================

// (4)

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const newArr = [...arr1, ...arr2];

// =============================================

// [6] Many Questions

// const students = [
//     {name:"Ali", degree:70},
//     {name:"Sara", degree:95},
//     {name:"Ahmed", degree:40},
//     {name:"Mona", degree:85},
//     {name:"Omar", degree:55}
// ];

// const studentNames = students.map((student) => student.name);
// console.log(studentNames);

// const aboveSixty = students.filter((student) => student.degree >= 60);
// console.log(aboveSixty);

// const aboveNinty = students.find((student) => student.degree > 90);
// console.log(aboveNinty);

// students.forEach((student) => console.log(student.name));

// =============================================

// [BONUS]

// const numbers = [5,10,15,20];

// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

// =============================================

// =============================================

// Task 14 [Not requred]
// =====================


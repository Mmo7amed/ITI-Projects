// Activity 1
// var person = {
//     fName: "Mohamed",
//     lName: "Ezzat",
//     age: 21,
//     university: {
//         uniName: "zewail",
//         major: "swd",
//         concentration: "apd",
//         gpa: 3.2
//     },
//     hobby: "football",
//     languages: {
//         fLang: "Arabic",
//         sLang: "English",
//     }
// }

// Object.entries(person).forEach(([key,value]) => {console.log(`key: ${key}, value: ${value}`)});

// Object.assign(person, {car:BMW, Laptop:Dell});

// delete person.university.gpa;

// Activity 2
// let e = document.getElementsByTagName("h1")
// console.log(e);

// let ele = document.getElementById("first-para");
// console.log(ele);

// let element = document.getElementsByClassName("item");
// console.log(element);

// let elem = document.querySelector("div");
// console.log(elem);

// let el = document.querySelectorAll("div");
// console.log(el);

// Task 13

function notFilled(){
    alert("Please Fill All Fields");
}

let userName = document.querySelector(".input-name");
let age = document.querySelector(".input-age");
let job = document.querySelector(".input-job");
console.log(`name: ${userName}, age: ${age}, job: ${job}`);

document.querySelector(".btn").addEventListener("click", function() {
    if(userName.value === "" || age.value === "" || job.value === "")
    {
        notFilled();
    }
    else{
        console.log(`Name: ${userName.value}, Age: ${age.value}, Job: ${job.value}`);
        if(age.value < 18)
        {
            alert("You are under 18");
        } else{
            alert("Registeration Completed");
        }
    }
});
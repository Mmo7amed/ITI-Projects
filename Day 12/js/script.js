// Activity 1
// ==============================
// for(var i = 0; i <= 10; i++)
// {
//     console.log(i);
// }

// var i1 = 0;
// while(i1 <= 10){
//     console.log(i1);
//     i1++;
// }

// var i2 = 0;
// do{
//     console.log(i2);
//     i2++;
// }while(i2 <= 10);

// ===============================
// Activity 2

// function getAvg(x,y){
//     var result = (x + y) / 2;
//     console.log(result);
// }
// getAvg(2,6);

// ===============================
// Activity 3

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

// console.table(person);

// ===============================
// Task 12

var student = {
    name: "mohamed",
    grade: 85
};

function getGrade(score){
    if( score <= 100 && score >= 90){
        return "A";
    }else if(score >= 80){
        return "B";
    }else if(score >= 70){
        return "C";
    }else if(score >= 60){
        return "D";
    }else if(score < 60){
        return "F";
    }else{
        return "[Invalid Input]";
    }
}

var hasPassed = (score) => score >= 60;

var passed = hasPassed(student.grade) ? "passed" : "failed";
var grade = getGrade(student.grade);

console.log(`Student ${student.name}, ${passed} with grade: ${grade}`);

var studentStars = "";
for(var i = 10; i < student.grade; i += 10){
    studentStars += "*";
}
console.log(`Student stars rating: ${studentStars}`);
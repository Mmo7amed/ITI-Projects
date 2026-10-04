"use strict"

// Activity 1
// async function getPosts() {
//     console.log("Request Sent.");
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     console.log(res);
// };
// getPosts();

// Avtivity 2
// async function getPosts() {
//     try{
//         let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         let resData = await res.json();
//         for(const post of resData){
//             let {title, body} = post;
//             console.log(`Title: ${title}, \nBody: ${body}`);
//         }
//     }catch(error){
//         console.log(`Error: ${error}`);
//     }
// };

// getPosts();

// Activity 3
// let postsDiv = document.querySelector(`.container`);

// function displayContent(postsArray){
//     let contentContainer = ``
//     for(const post of postsArray){
//         let {id, title, body} = post;
//         contentContainer += 
//         `<div class="card bg-dark text-white mb-3">
//     <div class="card-header border-secondary">
//         ${title}
//     </div>
//     <div class="card-body">
//         <figure class="mb-0">
//             <blockquote class="blockquote">
//                 <p>${body}</p>
//             </blockquote>
//             <figcaption class="blockquote-footer text-white-50">
//                 <cite title="Post ID">Post #${id}</cite>
//             </figcaption>
//         </figure>
//     </div>
// </div>`;
//     }
//     postsDiv.innerHTML = contentContainer;
// }

// async function getPosts(){
//     try{
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {method: `GET`});
//         let responseData = await response.json();
//         displayContent(responseData);
//     }catch(error){
//         console.log(`Error: ${error}`);
//     }
// }

// getPosts();

// Task 1
// const productContainer = document.querySelector(`#products`);
// const searchInput = document.querySelector(`#search-input`);
// const selectInput = document.querySelector(`#select-input`);

// async function getProduct(){
//     try{
//         let response = await fetch(`https://dummyjson.com/products`);
//         let data = await response.json();
//         displayProducts(data.products)
//     }catch(error){
//         console.error(error);
//     };
// };

// getProduct();

// function displayProducts(products){
//     let content = ``;
//     for(const product of products){
//         let {title, thumbnail} = product;
//         content += `
//             <div class="col-6 col-sm-4 col-md-3">
//                 <div class="product-card">
//                 <img src="${thumbnail}" alt="${title}" class="product-img">
//                 <div class="product-title">${title}</div>
//                 </div>
//             </div>`;
//     }
//     productContainer.innerHTML = content;
// }

// task2

// const taskInput = document.querySelector(`#task-input`);
// const taskBtn = document.querySelector(`#task-btn`);
// const taskList = document.querySelector(`#task-list`);

// let tasks = [];
// let edit = null;

// function displayContent(){
//     let content = ``;
//     for(let i = 0; i < tasks.length; i++){
//         content += `
//         <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
//             <span>${tasks[i]}</span>
//             <div>
//                 <button class="btn text-decoration-none" onclick="editTask(${i})">✏️</button>
//                 <button class="btn text-decoration-none" onclick="deleteTask(${i})">🗑️</button>
//             </div>
//         </div>
//         `
//     }
//     taskList.innerHTML = content;
// }

// function task(){
//     let task = taskInput.value;
//     if(edit !== null){
//         tasks[edit] = task;
//         edit = null;
//         taskBtn.textContent = `Add`;
//     }else{
//         tasks.push(task);
//     }
//     taskInput.value = ``;
//     displayContent();
// }

// function deleteTask(index){
//     tasks.splice(index, 1);
//     displayContent();
// }

// function editTask(index){
//     taskInput.value = tasks[index];
//     edit = index;
//     taskBtn.textContent = "Update";
// }

// taskBtn.addEventListener("click", task);
// displayContent();
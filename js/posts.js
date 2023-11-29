"use strict";
console.log("posts.js file was loaded");

//taikomes
const appEl = document.getElementById("app"); //

const post = [
  { title: "Post One", body: "This is post One body" },
  { title: "Post Two", body: "This is post Two body" },
];

// sugeneruoti li elmenentus su antraste title, ir textu body
function printPosts() {
  appEl.innerHTML = "";
  post.forEach((postItem) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h3>${postItem.title}</h3><p>${postItem.body}</p>`;
    appEl.append(listItem);
  });
}

// iskviesti funkcija
printPosts();

function createPost(newPostObj) {
  //grazinti promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      post.push(newPostObj);
      console.log("created Post");
      resolve();
    }, 700);
  });
}

//gauti postus imituoja kad trunka 1.5 sek juos gauti
function getPosts() {
  setTimeout(() => {
    printPosts();
  }, 500);
}

//app eiga
const thirdPost = { title: "Post Three", body: "This is post Three body" };

//problema neatspausdina paskutinio post
// createPost(thirdPost);
// getPosts();

//callback sprendimas
// createPost(thirdPost, getPosts);

//promisify sprendimas
createPost(thirdPost).then(getPosts);

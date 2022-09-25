const singupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const singup =document.querySelector(".singup");
const login =document.querySelector(".login");


loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginform");
    singup.classList.remove("singupform");
    moveBtn .innerHTML =("login");
})


singupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginform");
    singup.classList.add("singupform");
    moveBtn.innerHTML =("singup")
})
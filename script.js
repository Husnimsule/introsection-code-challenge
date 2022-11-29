// const hamburger = document.querySelector(".hamburger");
// const navmenu = document.querySelector(".nav-menu");
  
// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navmenu.classList.toggle("active")

// })
// document.querySelectorAll(".nav-link").forEach(n => n.a)
// addEventListener("click",() => {
//     hamburger.classList.remove("active");
//     navmenu.classList.remove("active");
// })

const hamburger = document.getElementById('open')

function show(){
    hamburger.style.display = "block"
    hamburger.style.right = "0px"
}

function hide(){
    hamburger.style.display = "none"

}
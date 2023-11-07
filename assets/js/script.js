let popup = document.getElementById('popup');
let closemenu = document.getElementById("close-menu");
let btmenu = document.getElementById("bt-menu");
let menu = document.getElementById("menu")
let links = document.getElementsByTagName("a");
let about = document.getElementById("about");
let aboutbt = document.getElementsByClassName("aboutbt");
let proj = document.getElementById("proj");
let projbt = document.getElementsByClassName("projbt");
let home = document.getElementById("home");
let logo = document.getElementById("logo");
let resumebt = document.getElementsByClassName("resumebt");
let rsm = document.getElementById("rsm");

btmenu.addEventListener("click", () => {
  menu.style.display = "block";
  btmenu.style.visibility = "hidden";
})

closemenu.addEventListener("click", () => {
  menu.style.display = "none";
  btmenu.style.visibility = "visible";
})

function openpp() {
  popup.style.animation = "animopen 200ms";
  popup.style.display = 'block';
  menu.style.display = "none";
  btmenu.style.visibility = "visible";

}

function closepp() {
  popup.style.animationDirection = "reverse";
  //popup.classList.add('closele')
  popup.style.display = 'none'
}


for (link in links) {
  if (link > 0) {
    links[link].setAttribute("target", "_blank");
  }
}

aboutbt[0].addEventListener("click", () => {
  home.style.display = "none";
  proj.style.display = "none";
  rsm.style.display = "none";
  about.style.display = "block";
})
aboutbt[1].addEventListener("click", () => {
  home.style.display = "none";
  proj.style.display = "none";
  rsm.style.display = "none";
  about.style.display = "block";
})
projbt[0].addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  rsm.style.display = "none"
  proj.style.display = "block";
})
projbt[1].addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  rsm.style.display = "none"
  proj.style.display = "block";
})

logo.addEventListener("click", () => {
  about.style.display = "none";
  proj.style.display = "none";
  rsm.style.display = "none"
  home.style.display = "block";
})

resumebt[0].addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  proj.style.display = "none"
  rsm.style.display = "block";
})

resumebt[1].addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  proj.style.display = "none"
  rsm.style.display = "block";
})
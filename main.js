// Set the menu scroll buttons
const logoBtn = document.getElementById('logo-btn');
const aboutBtn = document.getElementById('about-btn');
const careerBtn = document.getElementById('career-btn');
const logoBtnPhone = document.getElementById('logo-btn-phone');
const aboutBtnPhone = document.getElementById('about-btn-phone');
const careerBtnPhone = document.getElementById('career-btn-phone');
logoBtn.onclick = scrollSmoothlyTop;
aboutBtn.onclick = scrollSmoothly;
careerBtn.onclick = scrollSmoothly;
logoBtnPhone.onclick = scrollSmoothlyTop;
aboutBtnPhone.onclick = scrollSmoothly;
careerBtnPhone.onclick = scrollSmoothly;

function scrollSmoothly(e){
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}
function scrollSmoothlyTop(e){
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const logoImg = document.querySelector('.logo-nav')
document.onscroll = function(e){
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight
  let precent = scrollY/windowHeight;

  if(precent <= 0.25){
    cancelJobsAnimation();
  }
  else{
    startJobsAnimation();
  }

  // Menu btn sizes animation
  if(precent < 0.1){
    logoImg.style.width = '120px';
    aboutBtn.style.fontSize = '1.8rem';
    careerBtn.style.fontSize = '1.8rem';
  }
  else if(precent < 0.85){
    logoImg.style.width = '100px';
    aboutBtn.style.fontSize = '2.2rem';
    careerBtn.style.fontSize = '1.8rem';
  }
  else{
    logoImg.style.width = '100px';
    careerBtn.style.fontSize = '2.2rem';
    aboutBtn.style.fontSize = '1.8rem';
  }
}

// Jobs list animation
var animation = false;
function cancelJobsAnimation(){
  animation = false;
  document.querySelector("div.top").classList.remove("dot1");
  document.querySelector("div.mid").classList.remove("dot2");
  document.querySelector("div.btm").classList.remove("dot3");
  document.querySelector("div.btm-btm").classList.remove("dot4");
  for (const elem of document.getElementsByClassName("title-animate-js")){
    elem.classList.remove("title-animate");
  }
}
function startJobsAnimationNow(){
  if(!animation){
    animation= true;
    document.querySelector("div.top").classList.add("dot1");
    document.querySelector("div.mid").classList.add("dot2");
    document.querySelector("div.btm").classList.add("dot3");
    document.querySelector("div.btm-btm").classList.add("dot4");
    for (const elem of document.getElementsByClassName("title-animate-js")){
      elem.classList.add("title-animate");
    }
  }
}
function startJobsAnimation(){
  if(!animation){
      setTimeout(startJobsAnimationNow, 150);
  }
}

// Burger Menu
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('web-nav-phone');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbar.classList.add('open');
  }
  else{
    menuBtn.classList.remove('open');
    navbar.classList.remove('open');
  }
  menuOpen = !menuOpen;
});

// Getting the needed elements
const section = document.getElementById('description-grid');
const texts = document.getElementsByClassName('description');
const scrolls = document.getElementsByClassName('scroll-start-icon');


var anchoreScrolling = false;
document.onscroll = function(e){
  // grid-template-rows:  0 100vh 92vh 8vh --> 100vh 46vh 46vh 8vh
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight
  let precent = scrollY/windowHeight;

  // Makes sure the events doesnt trigger when using the scroll buttons
  if(anchoreScrolling) return false;

  // The image is getting smaller and the text is bieng shown
  if(precent <= 1){
    for (const elem of texts){
      elem.style.opacity = `${precent}`;
    }
    section.style.gridTemplateRows = `${precent*100}vh ${100-precent*54}vh ${92-precent*46}vh 8vh`;

    cancelJobsAnimation()
  }
  //Stay at the same block for 20vh
  else if(1 < precent && precent <= 1.1){
    for (const elem of texts){
      elem.style.opacity = `1`;
    }
    section.style.gridTemplateRows = `${precent*100}vh 46vh 46vh 8vh`;

    cancelJobsAnimation();
  }
  else{
    for (const elem of texts){
      elem.style.opacity = `1`;
    }
    section.style.gridTemplateRows = `110vh 46vh 46vh 8vh`;

    startJobsAnimation();
  }

  // The scroll buttons dissaperence
  if(precent <= 0.3){
    for (const elem of scrolls){
      elem.style.opacity = `${1-precent*(1/0.3)}`
    }
  }
  else{
    for (const elem of scrolls){
      elem.style.opacity = `0`
    }
  }

  window.scrollTo(0, scrollY);
}

// The jobs scroll button event - scrolling smoothly
document.getElementById('scroll-icon').onclick = function(e){
  anchoreScrolling=true;
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
  setTimeout(function(){ anchoreScrolling=false; }, 450);
  startJobsAnimationNow();
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
      setTimeout(startJobsAnimationNow, 300);
  }
}

// The scrollArrows animation
scrollArrowAnimation();
function scrollArrowAnimation(){
  var floatSlownes = 500;
  var floatRange = 13;
  for (const elem of scrolls){
    elem.style.transform = `translate3d(0, ${floatRange*Math.sin(Date.now()/floatSlownes)}px , 0)`
  }
  setTimeout(scrollArrowAnimation, 10);
}

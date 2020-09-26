const section = document.getElementById('description-grid');
const texts = document.getElementsByClassName('description');

// grid-template-rows:  0 50% 46% 4% --> 50% 23% 23% 4%
// grid-template-rows:  0 100vh 92vh 8vh --> 100vh 46vh 46vh 8vh

var anchoreScrolling = false;
document.onscroll = function(e){

  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight
  let precent = scrollY/windowHeight;

  if(anchoreScrolling) return false;

  if(precent <= 1){
    for (const elem of texts){
      elem.style.opacity = `${precent}`;
    }

    section.style.gridTemplateRows = `${precent*100}vh ${100-precent*54}vh ${92-precent*46}vh 8vh`;

    cancelJobsAnimation()
  }
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

  window.scrollTo(0, scrollY);
}

document.getElementById('scroll-icon').onclick = function(e){
  anchoreScrolling=true;
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
  setTimeout(function(){ anchoreScrolling=false; }, 450);
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
function startJobsAnimation(){
  if(!animation){
    animation= true;
      setTimeout(function(){
        document.querySelector("div.top").classList.add("dot1");
        document.querySelector("div.mid").classList.add("dot2");
        document.querySelector("div.btm").classList.add("dot3");
        document.querySelector("div.btm-btm").classList.add("dot4");
        for (const elem of document.getElementsByClassName("title-animate-js")){
          elem.classList.add("title-animate");
        }
      }, 500);
  }
}

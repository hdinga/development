import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const gsEase = 'circ.out';

//-- PAGE SCROLL CLICK --
export const PageClickScroll = () => {
  gsap.to(window, { duration: 1, scrollTo: '.section-projects', ease: gsEase });
}

//-- HEADER MOUSE PARALLAX --
export const HeaderMouseFX = () => {
  // defined mouse area
  document.querySelector('.section-masthead').addEventListener("mousemove", mouseMoveFunc);
  document.querySelector('.section-masthead').addEventListener("mouseleave", mouseleaveFunc);

  // mouse-move function
  function mouseMoveFunc(e) {
    var offsetX = (e.clientX * -0.025); //displace based on mouse location on page
    var offsetY = (e.clientY * -0.025); //displace based on mouse location on page

    gsap.to(".masthead-content", {
      x: offsetX, y: offsetY, ease: "circ.Out",
    });
  }

  // mouse-leave function
  function mouseleaveFunc(e) {
    gsap.to(".masthead-content", {
      x: 0, y: 0, transform: 'translateX(0%) translateY(0%)', delay: 3, ease: "circ.out", 
    });
  }
}

//-- SCROLL TO TOP --
export const ScrollToTop = () => {
  let isArrowActive = false;
  const scrollPosY = document.body.scrollHeight/2; //scroll position trigger
  const btnArrowUp = document.querySelector('.icn-arrowup');

  // handles scroll up animation
  function ScrollUpAnimation() {
    btnArrowUp.classList.add("hidden");
    gsap.to(window, { duration: 1, scrollTo: '.page-wrapper', ease: gsEase });
  }

  // handles scroll action
  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > scrollPosY) {
      // show arrow up & add listener if scrolled down half-way
      if ( !isArrowActive ) { // if arrow hidden on scroll down
        btnArrowUp.classList.remove("hidden");
        btnArrowUp.addEventListener('click', ScrollUpAnimation);
        gsap.to(btnArrowUp, { duration: 1, opacity: 1, ease: gsEase });
        isArrowActive = true;
      }
    } else {
      if( isArrowActive ) { // if arrow active on scroll up...
        gsap.to(btnArrowUp, { duration: 1, opacity: 0, ease: gsEase, onComplete: () => {
          btnArrowUp.classList.add("hidden");
          btnArrowUp.removeEventListener('click', ScrollUpAnimation);
        }});
        isArrowActive = false;
      }
    }
  })
}

//-- [BEHAVIOR] NEW --
export const NewBehavior = () => {
  console.log("hello world!");
}
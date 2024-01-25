import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
//
gsap.registerPlugin(ScrollToPlugin);

const gsEase = 'power1';

//-- PAGE SCROLL CLICK --
export const PageClickScroll = () => {
  document.querySelector('.icn-mouse').addEventListener('click', () => {
    gsap.to(window, { duration:1, scrollTo: '.page-content', ease: gsEase });
  });
}

//-- HEADER MOUSE PARALLAX --
export const HeaderMouseFX = () => {
  // defined mouse area
  document.querySelector('.masthead-content').addEventListener("mousemove", mouseMoveFunc);
  document.querySelector('.masthead-content').addEventListener("mouseleave", mouseleaveFunc);

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

//-- [MODAL IMAGE PREVIEW, FUNC] --
export const OpenModalPreview = () => {
  const arrProjectCard = document.querySelectorAll('.project-card .img-fluid');
  const modalPreview = document.querySelector('#modalPreview');
  const modalPreviewImg = document.querySelector('#modalPreview .img-fluid');

  // add listeners for each image instance
  Array.from(arrProjectCard).forEach(card => {
    card.addEventListener('click', function(event) {
      modalPreviewImg.setAttribute('src', card.getAttribute('src')); //set src to modal preview
        modalPreview.style.display = 'block';
        gsap.fromTo(modalPreview, { opacity: 0, scale: 1.10}, {opacity: 1, scale: 1, duration: 0.25, ease: "circ.out"}); //show modal
      event.preventDefault();
    });
  });

  // closes image modal on click
  function CloseModal() {
    gsap.to(modalPreview, { x: 0, y: 0, opacity:0, ease: "circ.out", onComplete: () => { modalPreview.style.display = 'none'; }}); //hide modal
  }

  // adds listener to close modal to button & backdrop
  document.querySelector('#btnCloseModal').addEventListener('click', () => { CloseModal(); });
  document.querySelector('.modal-backdrop').addEventListener('click', () => { CloseModal(); });
}

//-- [BEHAVIOR] NEW --
export const NewBehavior = () => {
  console.log("hello world!");
}
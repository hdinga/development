import gsap from "gsap";
import { TextPlugin } from "gsap/all";

//-- [ANIMATION] PRELOADER --
export const AnimPreloader = () => {
  const tl = gsap.timeline();
  tl.to(".loader .loader-accent", {
    duration: 0.25,
    opacity: 0,
    repeat: 3,
    yoyo: true,
    //fill: 'blue',
    ease: "circ.Out",
  });

  tl.to(".loader", {
    duration: 0.25,
    opacity: 0.5,
    scale: 1.025,
    repeat: 3,
    yoyo: true,
    ease: "circ.Out",
  }, "<"); // add to start of tl

  // Preloader animation completed
  tl.to(".preloader", {
    duration: 0.5,
    opacity: 0,
    display: "none",
  });
};

//-- [ANIMATION] TYPEWRITER --
export const Typewriter = () => {
  //VARIABLES
  const arrTitles = ['interactive','tinker','creative','designer','caffeinated','analytical','innovative','problem-solver','progressive','adaptable','user-centric','strategic','developer','visionary','methodical','responsive','imaginative','collaborative','empathetic','versatile','tech-savvy','detailed-oriented','communicative','wireframer']; //24

  // ARRAY RANDOMIZER - DUNSTENFELD ALGORITHM
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(arrTitles); //shuffle originalarray

  gsap.registerPlugin(TextPlugin); //bind textplugin to gsap
  const masterTl = gsap.timeline({repeat: -1});

  for( var i = 0; i < arrTitles.length; i++ ) {
    let nDelay = 1; // initial delay
    let tl = gsap.timeline({repeat: 1, repeatDelay: 1, yoyo: true});

    if( i > 0 ) { nDelay = 0; }; // no delay after initial start
    tl.to('.masthead-title', {
      delay: nDelay, duration: 1, opacity: 1, text: arrTitles[i], ease: 'power1.inOut'
    });
    masterTl.add(tl);
  }
}

//-- [FX] HEADER MOUSE PARALLAX --
export const HeaderMouseFX = () => {
  // defined mouse area
  document.querySelector('.tc-masthead').addEventListener("mousemove", mouseMoveFunc);
  document.querySelector('.tc-masthead').addEventListener("mouseleave", mouseleaveFunc);

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

//-- [ANIMATION, FX] NEW --
export const NewAnimation = () => {
  console.log("hello world!");
}
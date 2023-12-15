import gsap from "gsap";

const tl = gsap.timeline();

// PRELOADER ANIMATION
export const AnimPreloader = () => {

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
import gsap from "gsap";
import { useEffect } from "react";

export default function TypewriterFX() {

  //VARIABLES
  let nWord = 0;
  let wordIndex = 0;
  let typeSpeed = fnRandomNumber(100,200); //100;
  const deleteSpeed = 50;
  const delayTime = 1000;
  const arrWords = ['interactive','tinker','creative','designer','caffeinated','analytical','innovative','problem-solver','progressive','adaptable','user-centric','strategic','developer','visionary','methodical','responsive','imaginative','collaborative','empathetic','versatile','tech-savvy','detailed-oriented','communicative','wireframer'];

  // RANDOMNUMBER GENERATOR
	function fnRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
	}

  // ARRAY RANDOMIZER - DUNSTENFELD ALGORITHM
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(arrWords); //shuffle originalarray

  useEffect(() => {

    //-- MASTHEAD CONTENT PARALLAX FX --
    // defined mouse area
    document.querySelector('.tc-masthead').addEventListener("mousemove", mouseMoveFunc);
    document.querySelector('.tc-masthead').addEventListener("mouseleave", mouseleaveFunc);

    //mouse-move function
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

    //-- MASTHEAD TYPEWRITER FX --
    if(document.querySelector('.masthead-writer')){ //run ONLY IF DOM contains element	
      /*     
      function HandleTimer(mytimer, func) {
        mytimer = setTimeout(() => {func();}, randomSpeed);
        //var delayTimer = setTimeout(() => {func();}, randomSpeed);
        return () => clearTimeout(mytimer);
        //return () => clearTimeout(delayTimer);
      } 
      */

      // UNTYPING FUNCTION FX
      function untyping(){
        if(wordIndex >= 0) { //if current word is STILL being displayed...
          //console.log("untyping... "+arrWords[nWord]); //console
          document.querySelector('.masthead-writer').textContent = arrWords[nWord].slice(0, wordIndex); //delete current index
          wordIndex--; //decrement index

          //-- delete typing function
          const loopUnTypeTimer = setTimeout(untyping, deleteSpeed); //repeat function for next index
          return () => clearTimeout(loopUnTypeTimer);

        } else { //if no word is being displayed...
          if(nWord < arrWords.length-1){ //if more words available in array...
              nWord++; //get next word
          }else {
            nWord=0; //reset word count to first word
          }
          wordIndex=0; //reset word index

          //-- initialize typing function
          const newTypeTimer = setTimeout(typing, typeSpeed); //repeat function for next index
          return () => clearTimeout(newTypeTimer);
        }
      }

      // TYPING FUNCTION FX
      function typing() {
        if(wordIndex <= arrWords[nWord].length) { //if current word incompleted...
          //console.log("typing... "+arrWords[nWord]); //console
          document.querySelector('.masthead-writer').textContent = arrWords[nWord].slice(0, wordIndex); //add current index
          wordIndex++; //increment index

          //-- typing function
          //HandleTimer('newtimer2', typing);
          const loopTypeTimer = setTimeout(typing, typeSpeed); //repeat function for next index
          return () => clearTimeout(loopTypeTimer);
        } else { //if current word completed...

          //-- initialize delete typing function
          //HandleTimer(untyping);
          const initUnTypeTimer = setTimeout(untyping, delayTime); //repeat function for next index
          return () => clearTimeout(initUnTypeTimer);
        }
      }

      //-- initialize typing function
      //HandleTimer('newtimer', typing);
      const initTypeTimer = setTimeout(() => {typing();}, delayTime);
      return () => clearTimeout(initTypeTimer);
    }
  }, []);

  return (
    <><span className="masthead-writer"></span></>
  )
}

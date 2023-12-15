/***

///TRIGGERCELLDESIGNS 2004-2019
***/


/*global $, jQuery, alert*/
/*jslint node: true */
'use strict';



//DOCUMENT READY
$(document).ready(function () {
	
    //VARIABLES
	let gEase = Quad.easeOut;
	
	//RANDOMNUMBER GENERATOR
	function fnRandomNumber(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	//SVG READY
    function fnSVGReady() {
		
        ///CREATE SVGs <!!!-SVG MODIFIED-!!!>
        
		let svg_tbot = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 191 99"><defs><style>.cls-1 {fill: #594a42;}.cls-2 {fill: #c2b59b;}.cls-3 {fill: #726658;}.cls-4 {fill: #282829;}.cls-5 {fill: #1b75bc;}.cls-6 {opacity: 0.75;}.cls-6, .cls-7 {fill: url(#linear-gradient);}.cls-7 {opacity: 0.25;}</style><linearGradient id="linear-gradient" x1="0.371" y1="0.149" x2="0.611" y2="0.801" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff" stop-opacity="0.4"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><g id="tbot" transform="translate(0 0)"><g id="tbot_head"><path id="tbot-head-outer" class="cls-1" d="M-849.12-392a10.029,10.029,0,0,1-10-10v-13.26a7.026,7.026,0,0,1-5.88-6.91v-36a7.026,7.026,0,0,1,5.88-6.91V-481a10.03,10.03,0,0,1,10-10h160a10.03,10.03,0,0,1,10,10v16.087A7.028,7.028,0,0,1-674-458.17v36a7.028,7.028,0,0,1-5.12,6.742V-402a10.029,10.029,0,0,1-10,10Z" transform="translate(865 491)"/><path id="tbot-head-mid" class="cls-2" d="M-706-406H-858a7.008,7.008,0,0,1-7-7v-71a7.008,7.008,0,0,1,7-7h152a7.008,7.008,0,0,1,7,7v71A7.008,7.008,0,0,1-706-406Zm-1.561-10.69a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0-707.56-416.69Z" transform="translate(877.81 498.08)"/><path id="tbot-head-inner" class="cls-3" d="M-780-421a5.014,5.014,0,0,1-5-5v-60a5.015,5.015,0,0,1,5-5h43a5.015,5.015,0,0,1,5,5v60a5.015,5.015,0,0,1-5,5Zm-80,0a5.014,5.014,0,0,1-5-5v-60a5.015,5.015,0,0,1,5-5h43a5.015,5.015,0,0,1,5,5v60a5.015,5.015,0,0,1-5,5Z" transform="translate(894.31 505.58)"/></g><g id="tbot-eye-rt" transform="translate(-0.31)"><circle id="tbot-eye-rt-base" class="cls-4" cx="18" cy="18" r="18" transform="translate(118.31 39)"/><circle id="tbot-eye-rt-iris" class="cls-5" cx="10" cy="10" r="10" transform="translate(126.31 47)"/><path id="tbot-eye-rt-rfx2" class="cls-6" d="M140.34,49.09c.77,1.92-1.31,4.55-4.64,5.88s-6.65.86-7.42-1.05,1.31-4.55,4.64-5.88S139.58,47.18,140.34,49.09Z" transform="translate(0.5 0.67)"/><path id="tbot-eye-rt-rfx1" class="cls-7" d="M135.14,48.319c.442,1.1-.753,2.614-2.665,3.378s-3.82.494-4.262-.6.753-2.614,2.665-3.378S134.7,47.222,135.14,48.319Z" transform="matrix(-1, -0.017, 0.017, -1, 270.263, 115.418)"/><rect id="tbot-eye-rt-b-lid" class="cls-4" width="22" height="11" transform="translate(125.31 57)"/><rect id="tbot-eye-rt-t-lid" class="cls-4" width="22" height="11" transform="translate(125.31 46)"/></g><g id="tbot-eye-lt" transform="translate(-80.31)"><circle id="tbot-eye-lt-base" class="cls-4" cx="18" cy="18" r="18" transform="translate(118.31 39)"/><circle id="tbot-eye-lt-iris" class="cls-5" cx="10" cy="10" r="10" transform="translate(126.31 47)"/><path id="tbot-eye-lt-rfx2" class="cls-6" d="M140.34,49.09c.77,1.92-1.31,4.55-4.64,5.88s-6.65.86-7.42-1.05,1.31-4.55,4.64-5.88S139.58,47.18,140.34,49.09Z" transform="translate(0.5 0.67)"/><path id="tbot-eye-lt-rfx1" class="cls-7" d="M135.14,48.319c.442,1.1-.753,2.614-2.665,3.378s-3.82.494-4.262-.6.753-2.614,2.665-3.378S134.7,47.222,135.14,48.319Z" transform="matrix(-1, -0.017, 0.017, -1, 270.263, 115.418)"/><rect id="tbot-eye-lt-b-lid" class="cls-4" width="22" height="11" transform="translate(125.31 57)"/><rect id="tbot-eye-lt-t-lid" class="cls-4" width="22" height="11" transform="translate(125.31 46)"/></g></g></svg>';
				  
        //add svg to DOM
		$('.tbot').html(svg_tbot);
    }
	
	//BOTANIMATIONS
	function fnBotAnimation() {
		
		//MODULAR FUNCTION: EYELID
		function eyelid(obj,speed,delay,scale,origin,fn) {
			TweenMax.to(obj, speed, {delay: delay, scaleY:scale, transformOrigin:origin, ease:gEase, onComplete:fn});
		}
		//MODULAR FUNCTION: EYEBALL
		function eyeball(obj,speed,delay,xPos,y,fn) {
			TweenMax.to(obj, speed, {delay: delay, x:xPos, y:y, ease:gEase, onComplete:fn});
		}
		
		//!EXPRESSION: BLINK EYELID
		function botExpression0() {
			let wait = fnRandomNumber(0,20000);

			function tween1(){ //open LR sequence
				eyelid($('#tbot-eye-lt-t-lid'),0.3,0,0,'top');
				eyelid($('#tbot-eye-lt-b-lid'),0.3,0,0,'bottom', botExpression0);
				
				eyelid($('#tbot-eye-rt-t-lid'),0.3,0,0,'top');
				eyelid($('#tbot-eye-rt-b-lid'),0.3,0,0,'bottom');
			}
			function tween0(){ //close LR sequence
				eyelid($('#tbot-eye-lt-t-lid'),0.3,0,1,'top');
				eyelid($('#tbot-eye-lt-b-lid'),0.3,0,1,'bottom');
				
				eyelid($('#tbot-eye-rt-t-lid'),0.3,0,1,'top');
				eyelid($('#tbot-eye-rt-b-lid'),0.3,0,1,'bottom',tween1);
			}
			setTimeout(tween0, wait);
		}
		
		//!EXPRESSION: EYELID WAKE UP
		function botExpression1() {
			function tween3(){
				eyelid($('#tbot-eye-lt-t-lid'),0.5,0,0,'top');
				eyelid($('#tbot-eye-lt-b-lid'),0.5,0,0,'bottom', botExpression0);
				
				eyelid($('#tbot-eye-rt-t-lid'),0.5,0,0,'top');
				eyelid($('#tbot-eye-rt-b-lid'),0.5,0,0,'bottom');
			}
			function tween2(){
				eyelid($('#tbot-eye-lt-t-lid'),0.5,0,1,'top');
				eyelid($('#tbot-eye-lt-b-lid'),0.5,0,1,'bottom',tween3);
			}
			function tween1(){
				eyelid($('#tbot-eye-lt-t-lid'),0.5,1,0.5,'top');
				eyelid($('#tbot-eye-lt-b-lid'),0.5,1,0.5,'bottom',tween2);
			}
			function tween0(){
				eyelid($('#tbot-eye-rt-t-lid'),0.5,1,1,'top');
				eyelid($('#tbot-eye-rt-b-lid'),0.5,1,1,'bottom',tween1);
			}
			
			//
			eyelid($('#tbot-eye-rt-t-lid'),0.5,5,0.5,'top');
			eyelid($('#tbot-eye-rt-b-lid'),0.5,5,0.5,'bottom',tween0);
		}
		
		//!EXPRESSION: EYEBALL LOOK UP
		function botExpression2() {
			let wait = fnRandomNumber(1000,60000);
			
			function tween1(){ //reset
				eyeball($('#tbot-eye-lt'),0.5,5,'+=0',0);
				eyeball($('#tbot-eye-rt'),0.5,5,'+=0',0, botExpression2);
			}
			function tween0(){ //lookup LR sequence
				eyeball($('#tbot-eye-lt'),0.5,0,'+=0',-22);
				eyeball($('#tbot-eye-rt'),0.5,0,'+=0',-22, tween1);
			}
			//
			setTimeout(tween0, wait);
		}
		
		botExpression1();
		botExpression2();
	}
    
    //INITIALIZE PAGE
    function init() {
        fnSVGReady();
		fnBotAnimation();
        
    }//INIT END
    
	//
    init();
    
    //*** CODE TESTING AREA START -->//
    
    //<--- CODE TESTING AREA END ***//
    
}); //--DOCUMENT READY END
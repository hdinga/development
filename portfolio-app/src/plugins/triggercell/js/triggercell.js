/***

///TRIGGERCELLDESIGNS 2004-2024
***/


/*global $, jQuery, alert*/
/*jslint node: true */
'use strict';



//DOCUMENT READY
$(document).ready(function () {
	

    //VARIABLES
	var arrProjects = ['subway-app','nordic-visitor-app','ef-must-see','ef-airfare-sale','staples-app','quickhit-app','ef-summer-sale','notehub-search','notehub-brand', 'notehub-alerts'];
    const offset = 100; //displacement
	const tColorLHT = "#FAFAFA"; //"#FF5252";
    const tColorDRK = "#555555";
    const tColorALT = "#FF5252";
    const tweenEase = Cubic.easeInOut;
	
    let nDate = new Date();
    let nYear = nDate.getFullYear();
    let isTransitioning = store.get('transitionState'); //detects if user is navigating across or loading page
	
	//ANTI-SPAM (LOAD DYNAMIC DATA) 
    $('.tc-footer_copyright').html("&#169;2004 - "+nYear+" TriggercellDesigns"); //load footer copyright
	//$('.tc-about_section3 figure:nth-child(3) .figure-caption').html(nYear); //
    $('.tc-contact_info-email').html('hello@triggercell.com'); //load contact email
    $('.tc-contact_info-email').attr('href','mailto:hello@triggercell.com'); //load contact email
    

    //if 'null/undefined', user is NOT navigating across, hide div filter
    if(!isTransitioning){
        $(".tc-site_filter").css({"display":'block', "opacity":'0', "left":'100%'});
    }
	
	//RANDOMNUMBER GENERATOR
	function fnRandomNumber(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
    //NAVBAR RESET
    function fnNavReset() {
        //TweenMax INIT CONFIG
        TweenMax.set($('.tc-navbar_logo'), {y:-offset, alpha:0});
        TweenMax.set($('.tc-header_navbar'), {y:-offset, alpha:0});
        TweenMax.set($('.nav-item'), {y:-offset, alpha:0});
    }
    
    //NAVBAR UNLOAD
    function fnNavUnload() {
        //animate navmenu out
        $('.nav-item').each(function(index) {
            const delay = index*0.1;
            TweenMax.to($(this), 0.5, {delay: delay, alpha:1, y:-offset/2, ease:Back.easeOut});
        })
        TweenMax.to($('.tc-header_navbar'), 0.25, {delay: 0.3, alpha:0, y:-offset/2, ease:tweenEase, onComplete: fnNavReset});
        TweenMax.to($('.tc-navbar_logo'), 0.25, {delay: 0.0, alpha:0, y:-offset/2, ease:Back.easeInOut});
    }
    
    //NAVMENU READY
    function fnNavReady() {
        
        //reset navbar
        fnNavReset();
        
        //animate navmenu in
        TweenMax.to($('.tc-header_navbar'), 0.5, {delay: 0, alpha:1, y:0, ease:Back.easeInOut});
        TweenMax.to($('.tc-navbar_logo'), 0.5, {delay: 0.2, alpha:1, y:0, ease:Back.easeInOut});
        
        $('.nav-item').each(function(index) {
            const delay = index*0.1;
            TweenMax.to($(this), 0.5, {delay: delay, alpha:1, y:0, ease:Back.easeOut});
        })
    }
    
	//TYPERWRITERFX
	function fnTypewriterFX() {
		
		//VARIABLES
		let arrWords = ['interactive','tinker','creative','designer','caffeinated','analytical','innovative','problem-solver','progressive','adaptable','user-centric','strategic','developer','visionary','methodical','responsive','imaginative','collaborative','empathetic','versatile','tech-savvy','detailed-oriented','communicative','wireframer'];
		let nWord = 0;
		let wordIndex = 0;
		let randomSpeed = 100;
		
		if(document.getElementById('tTyping')){ //run ONLY IF DOM contains element	
				
			//TYPING UNDO FX
			function untyping(){

				randomSpeed = fnRandomNumber(100,300); //choose random type speed

				if(wordIndex >= 0) { //if current word is STILL being displayed...

					document.querySelector('#tTyping').textContent = arrWords[nWord].slice(0, wordIndex); //delete current index
					wordIndex--; //decrement index
					setTimeout(untyping, randomSpeed); //repeat function for each index

				}else { //if no word is being displayed...
					if(nWord < arrWords.length-1){ //if more words available in array...
					   nWord++; //get next word
					}else {
						nWord=0; //reset word count to first word
					}
					wordIndex=0; //reset word index
					setTimeout(typing, randomSpeed); //begin typing next word
				}
			}

			//TYPING FX
			function typing(){

				if(wordIndex <= arrWords[nWord].length) { //if current word incompleted...
					document.querySelector('#tTyping').textContent = arrWords[nWord].slice(0, wordIndex); //add current index
					wordIndex++; //increment index
					setTimeout(typing, randomSpeed); //repeat function for next index
				}else { //if current word completed...
					setTimeout(untyping, 1000); //wait and then delete
				}
			}
			setTimeout(typing, randomSpeed); //initialize typing fx
		} //end if
	}
	
	//SVG READY
    function fnSVGReady() {
        
        
        ///CREATE SVGs <!!!-SVG MODIFIED-!!!>
        
        //SVG - CLOSE (LHT)
        let svg_close_lht = '<svg id="svg_close_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -127.697)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 127.697)"/><path id="icn-close" class="cls-1" style="fill:'+tColorLHT+'"; d="M-1401.531-103.708V-117.84h-14.132v-2.735h14.132v-14.132h2.736v14.132h14.132v2.735H-1398.8v14.132Z" transform="translate(2208.693 1224.974) rotate(45)"/></g>' +'</svg>';
        
        //SVG - CLOSE (DRK)
        let svg_close_drk = '<svg id="svg_close_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -127.697)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 127.697)"/><path id="icn-close" class="cls-1" style="fill:'+tColorDRK+'"; d="M-1401.531-103.708V-117.84h-14.132v-2.735h14.132v-14.132h2.736v14.132h14.132v2.735H-1398.8v14.132Z" transform="translate(2208.693 1224.974) rotate(45)"/></g>' +'</svg>';
        
        //SVG - CHEVRON UP (LHT)
        let svg_arrowup_lht = '<svg id="svg_arrowup_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -128)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrowup" class="cls-1" style="fill:'+tColorLHT+'"; d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1322 161.803) rotate(180)"/></g>' +'</svg>';
        
        //SVG - CHEVRON UP (DRK)
        let svg_arrowup_drk = '<svg id="svg_arrowup_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -128)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrowup" class="cls-1" style="fill:'+tColorDRK+'"; d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1322 161.803) rotate(180)"/></g>' +'</svg>';
        
        //SVG - CHEVRON LEFT (LHT)
        let svg_arrowleft_lht = '<svg id="svg_arrowleft_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -128)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrow" class="cls-1x" style="fill:'+tColorALT+'"; d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1313.803 131) rotate(90)"/></g>' +'</svg>';
        
        //SVG - CHEVRON LEFT (DRK)
        let svg_arrowleft_drk = '<svg id="svg_arrowleft_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1280 -128)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrow" class="cls-1" style="fill:'+tColorDRK+'"; d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1313.803 131) rotate(90)"/></g>' +'</svg>';
        
		//SVG - CHEVRON RIGHT (LHT)
        let svg_arrowright_lht = '<svg id="svg_arrowright_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g id="icon_arrowright" transform="translate(1325 173) rotate(180)"><path id="btn-base" class="cls-1" style="fill:rgb(255,255,255,0)" d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrow" class="cls-2" style="fill:'+tColorLHT+'" d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1313.803 131) rotate(90)"/></g>' +'</svg>';
		
		//SVG - CHEVRON RIGHT (DRK)
        let svg_arrowright_drk = '<svg id="svg_arrowright_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g id="icon_arrowright" transform="translate(1325 173) rotate(180)"><path id="btn-base" class="cls-1" style="fill:rgb(255,255,255,0)" d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1280 128)"/><path id="icn_arrow" class="cls-2" style="fill:'+tColorDRK+'" d="M19.363,19.8l0,.008L2,7.648V3.229L19.363,15.387,37,3.038v4.42L19.368,19.8Z" transform="translate(1313.803 131) rotate(90)"/></g>' +'</svg>';
		
        //SVG - ICON LINKEDIN (LHT)
        let svg_linkedin_lht = '<svg class="svg_linkedin_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1217 -392)"><path id="btn-base" class="cls-1" style="fill:'+tColorLHT+'"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1217 392)"/><path id="icn_linkedin" class="cls-2" style="fill:'+tColorDRK+'"; d="M-155.757-31.985V-41.79c0-2.687-1.02-4.191-3.146-4.191-2.313,0-3.52,1.566-3.52,4.191v9.805h-5.546V-50.661h5.546v2.516a6.513,6.513,0,0,1,5.63-3.084c3.957,0,6.792,2.422,6.792,7.422v11.823Zm-21.691,0V-50.661h5.779v18.676ZM-178-56.557A3.434,3.434,0,0,1-174.581-60a3.429,3.429,0,0,1,3.419,3.443,3.435,3.435,0,0,1-3.419,3.45A3.431,3.431,0,0,1-178-56.557Z" transform="translate(1404 460)"/>' +'</svg>';
        
        //SVG - ICON LINKEDIN (DRK)
        let svg_linkedin_drk = '<svg class="svg_linkedin_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1217 -392)"><path id="btn-base" class="cls-1" style="fill:'+tColorDRK+'"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1217 392)"/><path id="icn_linkedin" class="cls-2" style="fill:'+tColorLHT+'"; d="M-155.757-31.985V-41.79c0-2.687-1.02-4.191-3.146-4.191-2.313,0-3.52,1.566-3.52,4.191v9.805h-5.546V-50.661h5.546v2.516a6.513,6.513,0,0,1,5.63-3.084c3.957,0,6.792,2.422,6.792,7.422v11.823Zm-21.691,0V-50.661h5.779v18.676ZM-178-56.557A3.434,3.434,0,0,1-174.581-60a3.429,3.429,0,0,1,3.419,3.443,3.435,3.435,0,0,1-3.419,3.45A3.431,3.431,0,0,1-178-56.557Z" transform="translate(1404 460)"/>' +'</svg>';
        
        //SVG - ICON BEHANCE (LHT)
        let svg_behance_lht = '<svg class="svg_behance_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1217 -458)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1217 458)"/><path id="icn_behance" class="cls-1" style="fill:'+tColorLHT+'"; d="M-36.422,80.2c-1.862-1.5-2.8-3.957-2.8-7.355,0-3.184.852-5.628,2.534-7.322a8.888,8.888,0,0,1,6.571-2.545,10.482,10.482,0,0,1,4.317.864,7.454,7.454,0,0,1,3.173,2.713,8.989,8.989,0,0,1,1.469,3.8A24.46,24.46,0,0,1-21.005,74H-34.381a4.372,4.372,0,0,0,1.917,3.879,4.869,4.869,0,0,0,2.646.7,4.064,4.064,0,0,0,2.668-.842,4.013,4.013,0,0,0,.987-1.267h4.9a6.058,6.058,0,0,1-1.783,3.319,8.921,8.921,0,0,1-6.907,2.679A10.045,10.045,0,0,1-36.422,80.2Zm3.431-12.21a5.09,5.09,0,0,0-1.279,2.837h8.275a4.029,4.029,0,0,0-1.278-2.9,4.194,4.194,0,0,0-2.848-.987A3.844,3.844,0,0,0-32.991,67.988ZM-61,81.835V57h12.009q4.542.067,6.436,2.657a6.3,6.3,0,0,1,1.144,3.79A5.553,5.553,0,0,1-42.567,67.1a5.962,5.962,0,0,1-1.895,1.413,5.56,5.56,0,0,1,2.87,2.186,6.666,6.666,0,0,1,.964,3.644,7.24,7.24,0,0,1-1.11,3.958,6.83,6.83,0,0,1-1.76,1.951A6.794,6.794,0,0,1-46.3,81.5a17.166,17.166,0,0,1-3.51.336Zm4.957-4.317v.011h6.021a5.84,5.84,0,0,0,2.512-.437,3.151,3.151,0,0,0,1.637-3.106,2.661,2.661,0,0,0-1.581-2.657,6.049,6.049,0,0,0-2.478-.426h-6.111Zm0-10.719H-50a4.938,4.938,0,0,0,2.624-.617A2.362,2.362,0,0,0-46.368,64,2.224,2.224,0,0,0-47.7,61.71a9.069,9.069,0,0,0-2.938-.393h-5.4Zm16.818-5.864V57h18.22v3.936Z" transform="translate(1281 411)"/></g>' +'</svg>';
        
        //SVG - ICON BEHANCE (DRK)
        let svg_behance_drk = '<svg class="svg_behance_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1217 -458)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1217 458)"/><path id="icn_behance" class="cls-1" style="fill:'+tColorDRK+'"; d="M-36.422,80.2c-1.862-1.5-2.8-3.957-2.8-7.355,0-3.184.852-5.628,2.534-7.322a8.888,8.888,0,0,1,6.571-2.545,10.482,10.482,0,0,1,4.317.864,7.454,7.454,0,0,1,3.173,2.713,8.989,8.989,0,0,1,1.469,3.8A24.46,24.46,0,0,1-21.005,74H-34.381a4.372,4.372,0,0,0,1.917,3.879,4.869,4.869,0,0,0,2.646.7,4.064,4.064,0,0,0,2.668-.842,4.013,4.013,0,0,0,.987-1.267h4.9a6.058,6.058,0,0,1-1.783,3.319,8.921,8.921,0,0,1-6.907,2.679A10.045,10.045,0,0,1-36.422,80.2Zm3.431-12.21a5.09,5.09,0,0,0-1.279,2.837h8.275a4.029,4.029,0,0,0-1.278-2.9,4.194,4.194,0,0,0-2.848-.987A3.844,3.844,0,0,0-32.991,67.988ZM-61,81.835V57h12.009q4.542.067,6.436,2.657a6.3,6.3,0,0,1,1.144,3.79A5.553,5.553,0,0,1-42.567,67.1a5.962,5.962,0,0,1-1.895,1.413,5.56,5.56,0,0,1,2.87,2.186,6.666,6.666,0,0,1,.964,3.644,7.24,7.24,0,0,1-1.11,3.958,6.83,6.83,0,0,1-1.76,1.951A6.794,6.794,0,0,1-46.3,81.5a17.166,17.166,0,0,1-3.51.336Zm4.957-4.317v.011h6.021a5.84,5.84,0,0,0,2.512-.437,3.151,3.151,0,0,0,1.637-3.106,2.661,2.661,0,0,0-1.581-2.657,6.049,6.049,0,0,0-2.478-.426h-6.111Zm0-10.719H-50a4.938,4.938,0,0,0,2.624-.617A2.362,2.362,0,0,0-46.368,64,2.224,2.224,0,0,0-47.7,61.71a9.069,9.069,0,0,0-2.938-.393h-5.4Zm16.818-5.864V57h18.22v3.936Z" transform="translate(1281 411)"/></g>' +'</svg>';
        
        //SVG - ICON INSTAGRAM (LHT)
        let svg_instagram_lht = '<svg class="svg_instagram_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1382 -392)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1382 392)"/><path id="icn_instagram" class="cls-1" style="fill:'+tColorLHT+'"; d="M60.747,30.894a14.928,14.928,0,0,1-4.85-.936,10.185,10.185,0,0,1-5.845-5.844,14.3,14.3,0,0,1-.935-4.852C49.024,17.125,49,16.447,49,11.011s.024-6.125.118-8.263A14.979,14.979,0,0,1,50.052-2.1a9.9,9.9,0,0,1,2.3-3.541,9.868,9.868,0,0,1,3.542-2.3,15.042,15.042,0,0,1,4.862-.936C62.9-8.977,63.576-9,69.012-9s6.113.023,8.24.128a14.979,14.979,0,0,1,4.852.935,9.738,9.738,0,0,1,3.541,2.3,9.776,9.776,0,0,1,2.3,3.542,14.292,14.292,0,0,1,.935,4.85C88.976,4.9,89,5.576,89,11.011s-.024,6.114-.118,8.252a14.947,14.947,0,0,1-.935,4.852A10.188,10.188,0,0,1,82.1,29.958a14.3,14.3,0,0,1-4.852.936c-2.138.094-2.816.116-8.252.116S62.887,30.988,60.747,30.894Zm.526-35.476a10.7,10.7,0,0,0-3.553.655,6.016,6.016,0,0,0-2.2,1.438,5.882,5.882,0,0,0-1.438,2.2,10.555,10.555,0,0,0-.655,3.553c-.094,2.022-.116,2.618-.116,7.739s.023,5.715.116,7.737a10.619,10.619,0,0,0,.655,3.553,6.036,6.036,0,0,0,1.438,2.2,5.788,5.788,0,0,0,2.2,1.438,10.6,10.6,0,0,0,3.553.654c2.023.094,2.618.118,7.739.118s5.715-.024,7.737-.118a10.741,10.741,0,0,0,3.554-.654,6.031,6.031,0,0,0,2.2-1.438,5.8,5.8,0,0,0,1.438-2.2,10.588,10.588,0,0,0,.654-3.553c.094-2.022.118-2.618.118-7.737s-.024-5.717-.118-7.739a10.732,10.732,0,0,0-.654-3.553,6.031,6.031,0,0,0-1.438-2.2,5.882,5.882,0,0,0-2.2-1.438,10.565,10.565,0,0,0-3.554-.655c-2.022-.094-2.618-.116-7.737-.116S63.284-4.675,61.273-4.582Zm-3.49,15.592A11.226,11.226,0,1,1,69.01,22.237,11.227,11.227,0,0,1,57.783,11.011Zm4.586,0A6.64,6.64,0,1,0,69.01,4.37,6.641,6.641,0,0,0,62.37,11.011ZM76.413.971A2.627,2.627,0,1,1,79.04,3.6,2.624,2.624,0,0,1,76.413.971Z" transform="translate(1336 403)"/></g>' +'</svg>';
        
        //SVG - ICON INSTAGRAM (DRK)
        let svg_instagram_drk = '<svg class="svg_instagram_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1382 -392)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1382 392)"/><path id="icn_instagram" class="cls-1" style="fill:'+tColorDRK+'"; d="M60.747,30.894a14.928,14.928,0,0,1-4.85-.936,10.185,10.185,0,0,1-5.845-5.844,14.3,14.3,0,0,1-.935-4.852C49.024,17.125,49,16.447,49,11.011s.024-6.125.118-8.263A14.979,14.979,0,0,1,50.052-2.1a9.9,9.9,0,0,1,2.3-3.541,9.868,9.868,0,0,1,3.542-2.3,15.042,15.042,0,0,1,4.862-.936C62.9-8.977,63.576-9,69.012-9s6.113.023,8.24.128a14.979,14.979,0,0,1,4.852.935,9.738,9.738,0,0,1,3.541,2.3,9.776,9.776,0,0,1,2.3,3.542,14.292,14.292,0,0,1,.935,4.85C88.976,4.9,89,5.576,89,11.011s-.024,6.114-.118,8.252a14.947,14.947,0,0,1-.935,4.852A10.188,10.188,0,0,1,82.1,29.958a14.3,14.3,0,0,1-4.852.936c-2.138.094-2.816.116-8.252.116S62.887,30.988,60.747,30.894Zm.526-35.476a10.7,10.7,0,0,0-3.553.655,6.016,6.016,0,0,0-2.2,1.438,5.882,5.882,0,0,0-1.438,2.2,10.555,10.555,0,0,0-.655,3.553c-.094,2.022-.116,2.618-.116,7.739s.023,5.715.116,7.737a10.619,10.619,0,0,0,.655,3.553,6.036,6.036,0,0,0,1.438,2.2,5.788,5.788,0,0,0,2.2,1.438,10.6,10.6,0,0,0,3.553.654c2.023.094,2.618.118,7.739.118s5.715-.024,7.737-.118a10.741,10.741,0,0,0,3.554-.654,6.031,6.031,0,0,0,2.2-1.438,5.8,5.8,0,0,0,1.438-2.2,10.588,10.588,0,0,0,.654-3.553c.094-2.022.118-2.618.118-7.737s-.024-5.717-.118-7.739a10.732,10.732,0,0,0-.654-3.553,6.031,6.031,0,0,0-1.438-2.2,5.882,5.882,0,0,0-2.2-1.438,10.565,10.565,0,0,0-3.554-.655c-2.022-.094-2.618-.116-7.737-.116S63.284-4.675,61.273-4.582Zm-3.49,15.592A11.226,11.226,0,1,1,69.01,22.237,11.227,11.227,0,0,1,57.783,11.011Zm4.586,0A6.64,6.64,0,1,0,69.01,4.37,6.641,6.641,0,0,0,62.37,11.011ZM76.413.971A2.627,2.627,0,1,1,79.04,3.6,2.624,2.624,0,0,1,76.413.971Z" transform="translate(1336 403)"/></g>' +'</svg>';
        
        //SVG - ICON DRIBBBLE (LHT)
        let svg_dribbble_lht = '<svg class="svg_dribbble_lht" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1382 -392)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1382 392)"/><path id="icn_dribbble" class="cls-1" style="fill:'+tColorLHT+'"; d="M20,0A20,20,0,1,0,40,20,19.995,19.995,0,0,0,20,0Zm0,4.485a15.468,15.468,0,0,1,9.463,3.243,18.873,18.873,0,0,1-7.807,5.757A71.782,71.782,0,0,0,16.2,4.978,15.075,15.075,0,0,1,20,4.485ZM13,6.171a71.118,71.118,0,0,1,5.54,8.418A49.7,49.7,0,0,1,4.948,16.323,15.493,15.493,0,0,1,13,6.171ZM4.485,20c0-.138.02-.266.02-.394a52.516,52.516,0,0,0,15.574-2.07c.365.739.71,1.488,1.045,2.238A24.149,24.149,0,0,0,8.073,29.916,15.468,15.468,0,0,1,4.485,20ZM20,35.515a15.394,15.394,0,0,1-9.522-3.292c3.085-4.84,7.018-7.984,11.888-9.433a61.669,61.669,0,0,1,3.2,11.671A15.412,15.412,0,0,1,20,35.515Zm8.605-2.622A64.915,64.915,0,0,0,25.6,22.1a31.32,31.32,0,0,1,9.7.306A15.465,15.465,0,0,1,28.605,32.893ZM24.357,19c-.384-.877-.779-1.764-1.2-2.632a22.171,22.171,0,0,0,8.684-6.387,15.477,15.477,0,0,1,3.637,9.128A33.788,33.788,0,0,0,24.357,19Z" transform="translate(1385 395)"/></g>' +'</svg>';
        
        //SVG - ICON DRIBBBLE (DRK)
        let svg_dribbble_drk = '<svg class="svg_dribbble_drk" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">'+ '<g transform="translate(-1382 -392)"><path id="btn-base" class="cls-2" style="fill:rgb(255,255,255,0)"; d="M7,0H38a7,7,0,0,1,7,7V38a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(1382 392)"/><path id="icn_dribbble" class="cls-1" style="fill:'+tColorDRK+'"; d="M20,0A20,20,0,1,0,40,20,19.995,19.995,0,0,0,20,0Zm0,4.485a15.468,15.468,0,0,1,9.463,3.243,18.873,18.873,0,0,1-7.807,5.757A71.782,71.782,0,0,0,16.2,4.978,15.075,15.075,0,0,1,20,4.485ZM13,6.171a71.118,71.118,0,0,1,5.54,8.418A49.7,49.7,0,0,1,4.948,16.323,15.493,15.493,0,0,1,13,6.171ZM4.485,20c0-.138.02-.266.02-.394a52.516,52.516,0,0,0,15.574-2.07c.365.739.71,1.488,1.045,2.238A24.149,24.149,0,0,0,8.073,29.916,15.468,15.468,0,0,1,4.485,20ZM20,35.515a15.394,15.394,0,0,1-9.522-3.292c3.085-4.84,7.018-7.984,11.888-9.433a61.669,61.669,0,0,1,3.2,11.671A15.412,15.412,0,0,1,20,35.515Zm8.605-2.622A64.915,64.915,0,0,0,25.6,22.1a31.32,31.32,0,0,1,9.7.306A15.465,15.465,0,0,1,28.605,32.893ZM24.357,19c-.384-.877-.779-1.764-1.2-2.632a22.171,22.171,0,0,0,8.684-6.387,15.477,15.477,0,0,1,3.637,9.128A33.788,33.788,0,0,0,24.357,19Z" transform="translate(1385 395)"/></g>' +'</svg>';
        
		//SVG - TRIGGERCELL ICON
        let svg_tlogo = '<svg id="svg_tlogo" viewBox="0 0 32 32" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><g id="icon_triggercell" transform="translate(-521 -190)"><rect id="bground" style="fill:#343a40;opacity:0" width="32" height="32" rx="5" transform="translate(521 190)"/><path id="shellR" style="fill:#343a40" d="M51.81,22.081c.061,2.376,1.875,6.821,1.81,7.216a6.391,6.391,0,0,1-1.4,2.5,2.9,2.9,0,0,0,1.027-.174A11.687,11.687,0,0,0,55.53,29.37a15.452,15.452,0,0,0,1.438-4.324c-.116-.281-3.123-2.915-3.29-3.809a34.262,34.262,0,0,1-.292-4.438,34.889,34.889,0,0,1,.292-4.438c.164-.894,3.175-3.527,3.29-3.805A15.418,15.418,0,0,0,55.53,4.233a11.688,11.688,0,0,0-2.282-2.256A2.928,2.928,0,0,0,52.221,1.8a6.391,6.391,0,0,1,1.4,2.5c.064.395-1.749,4.843-1.81,7.216.225.258.514.566.7.823,0,.127.205,2.3.205,4.465s-.205,4.324-.205,4.451C52.324,21.519,52.035,21.827,51.81,22.081Z" transform="translate(491.749 189.2)"/><path id="shellL" style="fill:#343a40" d="M5.169,22.081C5.105,24.457,3.3,28.9,3.362,29.3a6.358,6.358,0,0,0,1.4,2.5,2.9,2.9,0,0,1-1.027-.174A11.777,11.777,0,0,1,1.449,29.37,15.452,15.452,0,0,1,.011,25.046c.116-.281,3.123-2.915,3.287-3.809A33.656,33.656,0,0,0,3.59,16.8,33.656,33.656,0,0,0,3.3,12.362C3.134,11.472.123,8.838.011,8.557A15.418,15.418,0,0,1,1.449,4.233,11.688,11.688,0,0,1,3.731,1.977,2.939,2.939,0,0,1,4.759,1.8a6.358,6.358,0,0,0-1.4,2.5C3.3,4.7,5.108,9.146,5.169,11.519c-.225.258-.514.566-.7.823,0,.127-.205,2.3-.205,4.465s.205,4.324.205,4.451C4.656,21.519,4.945,21.827,5.169,22.081Z" transform="translate(525.998 189.2)"/><path id="cell3" style="fill:#ef2b2d" d="M28.04,56.343l.292-1.823-.392-.43H26.053l-.421.459H20.846l-.417-.459H18.545l-.395.43.292,1.823.408.449h1.586l.8.883h4l.806-.883h1.586Z" transform="translate(514.141 154.512)"/><path id="cell2" style="fill:#ef2b2d" d="M28.089,42.221H26.1l-.542-.591h-4l-.491.539H19.018l-.408.449V43.8l.408.446h2.042l.491.546h4l.542-.594h1.993l.408-.446V42.667Z" transform="translate(513.829 162.767)"/><path id="cell1" style="fill:#ef2b2d" d="M28.04,29.559l.292,1.827-.392.43H26.053l-.421-.459H20.846l-.417.459H18.545l-.395-.43.292-1.827.408-.449h1.586l.8-.88h4l.806.88h1.586Z" transform="translate(514.141 171.667)"/></g></svg>';
		
		
        //add svg to DOM
		$('.tc-preloader_content').html(svg_tlogo);
        $('.tc-btn_returnhome').html(svg_arrowleft_lht);
        $('.tc-button_close').html(svg_close_drk);
        $('.tc-button_top').html(svg_arrowup_drk);
		$('.tc-button_right').html(svg_arrowright_drk);
        
        $('.burgermenu .tc-socialicon_wrapper a:nth-child(1)').html(svg_linkedin_lht);
        $('.burgermenu .tc-socialicon_wrapper a:nth-child(2)').html(svg_behance_lht);
        $('.burgermenu .tc-socialicon_wrapper a:nth-child(3)').html(svg_instagram_lht);
        $('.burgermenu .tc-socialicon_wrapper a:nth-child(4)').html(svg_dribbble_lht);
        
        $('#tContact .tc-socialicon_wrapper a:nth-child(1)').html(svg_linkedin_drk);
        $('#tContact .tc-socialicon_wrapper a:nth-child(2)').html(svg_behance_drk);
        $('#tContact .tc-socialicon_wrapper a:nth-child(3)').html(svg_instagram_drk);
        $('#tContact .tc-socialicon_wrapper a:nth-child(4)').html(svg_dribbble_drk);
        
        $('#tFooter .tc-socialicon_wrapper a:nth-child(1)').html(svg_linkedin_lht);
        $('#tFooter .tc-socialicon_wrapper a:nth-child(2)').html(svg_behance_lht);
        $('#tFooter .tc-socialicon_wrapper a:nth-child(3)').html(svg_instagram_lht);
        $('#tFooter .tc-socialicon_wrapper a:nth-child(4)').html(svg_dribbble_lht);
        
		
		//PRELOADER LOGO ANIMATION
		function fnLogoAnimation() {
			TweenMax.set($('#shellL'), {x:"+=9", fill:"#fff", alpha:0});
			TweenMax.set($('#shellR'), {x:"-=9", fill:"#fff", alpha:0});
			
			TweenMax.set($('#cell1'), {scale:"1.5", fill:"#fff", alpha:0, transformOrigin:"center"});
			TweenMax.set($('#cell2'), {scale:"1.5", fill:"#fff", alpha:0, transformOrigin:"center"});
			TweenMax.set($('#cell3'), {scale:"1.5", fill:"#fff", alpha:0, transformOrigin:"center"});
			
			//
			function tween2() {
				TweenMax.to($('#cell3'), 0.2, {delay:0.0, fill:tColorALT, ease:tweenEase});
				TweenMax.to($('#cell2'), 0.2, {delay:0.1, fill:tColorALT, ease:tweenEase});
				TweenMax.to($('#cell1'), 0.2, {delay:0.2, fill:tColorALT, ease:tweenEase, onComplete:fnLoadReady});
			}
			function tween1() {
				TweenMax.to($('#shellL'), 0.2, {delay:0, x:"-=9", fill:"#343a40", alpha:1, ease:Back.easeInOut});
				TweenMax.to($('#shellR'), 0.2, {delay:0, x:"+=9", fill:"#343a40", alpha:1, ease:Back.easeInOut});

				TweenMax.to($('#cell3'), 0.2, {delay:0.6, scale:"1", alpha:1, transformOrigin:"center", ease:tweenEase, onComplete:tween2});
				TweenMax.to($('#cell2'), 0.2, {delay:0.8, scale:"1", alpha:1, transformOrigin:"center", ease:tweenEase});
				TweenMax.to($('#cell1'), 0.2, {delay:1.0, scale:"1", alpha:1, transformOrigin:"center", ease:tweenEase});
			}
			tween1();
		}
		fnLogoAnimation();
		
        //MOUSEOVER - CLOSE
        $('.tc-button_close').mouseover(function(){
            TweenMax.to($(this), 0.3, {delay:0, rotation:"180", ease:tweenEase});
            TweenMax.to($('.tc-button_close .cls-1'), 0.5, {delay:0, fill:tColorALT, ease:tweenEase});
        });
        
        //MOUSEOUT - CLOSE
        $('.tc-button_close').mouseout(function(){
            TweenMax.to($(this), 0.3, {delay:0, rotation:"0", ease:tweenEase});
            TweenMax.to($('.tc-button_close .cls-1'), 0.5, {delay:0, fill:tColorDRK, ease:tweenEase});
        });
        
        //MOUSEOVER - BURGERMENU
        $('.burgermenu-btn').mouseover(function(){
			function tweenEnd() {
				TweenMax.to($('.burgermenu-btn-line1'), 0.3, {delay:0, y:2, ease:Back.easeOut});
            	TweenMax.to($('.burgermenu-btn-line2'), 0.4, {delay:0, backgroundColor: tColorALT, scaleX:1.0, ease:tweenEase});
            	TweenMax.to($('.burgermenu-btn-line3'), 0.3, {delay:0, y:-2, ease:Back.easeOut});
			}
			
			//
            TweenMax.to($('.burgermenu-btn-line1'), 0.3, {delay:0, y:-5, ease:Back.easeOut});
            TweenMax.to($('.burgermenu-btn-line2'), 0.4, {delay:0, backgroundColor: tColorLHT, scaleX:0.75, ease:tweenEase});
            TweenMax.to($('.burgermenu-btn-line3'), 0.3, {delay:0, y:5, ease:Back.easeOut, onComplete:tweenEnd});
        });
        
		//MOUSEOVER - BURGERMENU
        $('.burgermenu-btn').mouseout(function(){
			function tweenEnd() {
				TweenMax.to($('.burgermenu-btn-line1'), 0.3, {delay:0, y:0, ease:Back.easeOut});
            	TweenMax.to($('.burgermenu-btn-line2'), 0.4, {delay:0, backgroundColor: tColorDRK, scaleX:1.0, ease:tweenEase});
            	TweenMax.to($('.burgermenu-btn-line3'), 0.3, {delay:0, y:0, ease:Back.easeOut});
			}
			
			//
            TweenMax.to($('.burgermenu-btn-line1'), 0.3, {delay:0, y:-5, ease:Back.easeOut});
            TweenMax.to($('.burgermenu-btn-line2'), 0.4, {delay:0, backgroundColor: tColorLHT, scaleX:1.25, ease:tweenEase});
            TweenMax.to($('.burgermenu-btn-line3'), 0.3, {delay:0, y:5, ease:Back.easeOut, onComplete:tweenEnd});
        });
		
        //MOUSEOVER / MOUSEOUT SOCIAL ICONS
        function fnSocialStates(element,baseColor) {
            $(element).mouseover(function(){
                TweenMax.to($(element+' .cls-1'), 0.3, {delay:0, css:{fill:tColorALT}, alpha:1, ease:tweenEase});
            });
            //
            $(element).mouseout(function(){
                TweenMax.to($(element+' .cls-1'), 0.3, {delay:0, fill:baseColor, alpha:1, ease:tweenEase});
            });
        }
        
        //assign mouseover states to social icons
        fnSocialStates('#svg_arrowleft_lht', tColorLHT);
        fnSocialStates('.svg_linkedin_lht', tColorLHT);
        fnSocialStates('.svg_behance_lht', tColorLHT);
        fnSocialStates('.svg_instagram_lht', tColorLHT);
        fnSocialStates('.svg_dribbble_lht', tColorLHT);
        
        //assign mouseover states to social icons
        fnSocialStates('#svg_arrowup_drk', tColorDRK);
        fnSocialStates('.svg_linkedin_drk', tColorDRK);
        fnSocialStates('.svg_behance_drk', tColorDRK);
        fnSocialStates('.svg_instagram_drk', tColorDRK);
        fnSocialStates('.svg_dribbble_drk', tColorDRK);
    }
	
    //PROJECT HERO PARALLAX FX
    function fnParallax() {
        const speed = 0.1; //*the higher this num the faster the image moves
        var yScrollPos = $(window).scrollTop(); //get window scroll top position
        
        //update image y %position on scroll, starting from 50%
        $('.tc-parallax_wrapper').css('background-position', 'center '+(50+(yScrollPos*speed))+'%');
    }
    
    //LAXXX.JS READY
    function fnLaxxxReady() {
        
        //presets
        lax.addPreset("FadeOutDown", function() {
            return { 
                "data-lax-opacity": "vh 1,(vh*0.75) 1, (vh*0.5) 0",
                "data-lax-translate-y": "vh 0, (vh*0.25) 0, (vh*0.5) 300" 
            }
        });
        
        //presets
        lax.addPreset("FadeInUp", function() {
            return { 
                "data-lax-opacity": "(vh*1) 0, (vh*0.75) 1",
                "data-lax-translate-y": "(vh*1) 100, (vh*0.75) 0" 
            }
        });
        
        //load each sequentially
        function fnLaxxxThis(element) {
            $(element).each(function(index) {
                $(this).addClass('lax');
                $(element).attr({ 'data-lax-preset': "FadeInUp"}); 
            });
        }
        fnLaxxxThis('.tc-expertise_tile');
        fnLaxxxThis('.tc-gallery_tile');
        fnLaxxxThis('.tc-client_tile');
        
        //setup
        $(".tc-test").addClass('lax');
        //$(".tc-test").attr({ 'data-lax-opacity':'(vh*0.25) 0, (vh*0.5) 1 '}); 
        $(".tc-test").attr({ 'data-lax-translate-y':'(vh*0) 500, (vh*0.5) 0, vh (vh*0.5) '}); 
        
        //setup
        $(".tc-scrolldown_wrapper").addClass('lax');
        $(".tc-scrolldown_wrapper").attr({ 'data-lax-preset':'FadeOutDown' }); 
        
        //
        $(".tc-button_top").addClass('lax');
        $(".tc-button_top").attr({ 'data-lax-opacity': "(vh*0.5) 0, (vh*0.75) 1"}); 
        $(".tc-button_top").attr({ 'data-lax-translate-y': "(vh*0.5) 0, (vh*0.75) -50"}); 
        
        //
        $(".tc-project_content").addClass('lax');
        $(".tc-project_content").attr({ 'data-lax-preset': "FadeInUp"});
        
        //
        $(".tc-section_label").addClass('lax');
        $(".tc-section_label").attr({ 'data-lax-preset': "FadeInUp"}); 
        
        //
        $(".tc-hero_layer1").addClass('lax');
        $(".tc-hero_layer1").attr({ 'data-lax-translate-y': "(vh*0) 0, (vh*1) -200"}); 
        
        //
        $(".tc-hero_layer2").addClass('lax');
        $(".tc-hero_layer2").attr({ 'data-lax-translate-y': "(vh*0) 0, (vh*1) -100"}); 
        
        //
        $(".tc-hero_layer3").addClass('lax');
        $(".tc-hero_layer3").attr({ 'data-lax-translate-y': "(vh*0) 0, (vh*1) -50"}); 
        
        //
        $(".tc-hero_layer5").addClass('lax');
        $(".tc-hero_layer5").attr({ 'data-lax-translate-y': "(vh*0) 0, (vh*1) -200"});
        $(".tc-hero_layer5").attr({ 'data-lax-opacity': "(vh*0) 0.75, (vh*0.5) 1"}); 
        
        
        //init
        lax.setup();
        const updateLax = () => {
            lax.update(window.scrollY);
            window.requestAnimationFrame(updateLax);
        }
        window.requestAnimationFrame(updateLax);
    }
    


    //INITIALIZE PAGE
    function init() {

        //remove preloader, display page content
        $("#tPreloader").css("display","none");
        $(".tc-content_wrapper").css("display","block");

        //detect page transition direction
        if(isTransitioning=="outbound"){
			
            //transitioning away from home
            store.remove("transitionState"); //delete stored val
            $(".tc-content_wrapper").css({"display":"block", "opacity":"1", "left":'100%'}); //prep for transition
            
            //transition filter and wrapper to new loaded page content
            TweenMax.to($('.tc-site_filter'), 0.25, {delay: 0.1, left: '-100%', alpha: 1, ease:tweenEase});
            TweenMax.to($('.tc-content_wrapper'), 0.5, {delay: 0, left: '0%', alpha: 1, ease:tweenEase});
            //console.log('page is navigating '+isTransitioning) //console log
        }else if(isTransitioning=="inbound"){
			
            //transitioning to home
            store.remove("transitionState"); //delete stored val
            $(".tc-content_wrapper").css({"display":"block", "opacity":"1", "left":"-100%"}); //prep wrapper for transition
            
            //transition filter and wrapper to new loaded page content
            TweenMax.to($('.tc-site_filter'), 0.25, {delay: 0, left: '100%', alpha: 1, ease:tweenEase});
            TweenMax.to($('.tc-content_wrapper'), 0.5, {delay: 0, left: '0%', alpha: 1, ease:tweenEase});
            //console.log('page is navigating '+isTransitioning) //console log
        }
        
        //PARTICLES JS
        if ($('#particlesjs').length > 0) { //if particlesjs div present "1"
            particlesJS.load('particlesjs', 'src/plugins/particles/particles-config.json');
        }

        //NAVMENU
        fnNavReady();
        
		//TYPEWRITER FX
		fnTypewriterFX();
		
        //PARALLAX FX
        fnParallax();
        
        //LAXXX
        fnLaxxxReady();
        
    }//INIT END
    
    //PRELOADER READY (!triggered by preloader logo animation)
    function fnLoadReady() {
        TweenMax.to($('#tPreloader'), 0.25, {delay: 0, alpha: 0, ease:Linear.easeInOut, onComplete:init}); 
    }
	
	//SVG READY
    fnSVGReady();
    
    //CONTACT LOAD
    function fnContactLoad() {
        //prep content
        $("#tc-contact_modal").css({"opacity":"0", "top":"-30%", "transform":"scale(1)"});
        $('#tc-contact_modal').modal('toggle');
        TweenMax.to($('#tc-contact_modal'), 0.5, {delay: 0, top:"0%", scale: 1, alpha: 1, ease:Back.easeInOut});
    }
    
    //BURGERMENU CLOSE
    function fnBMenuClose() {
        //
        function fnBMenuReset() {
            //reset burgermenu
            $(".burgermenu").css({"display":"none", "opacity":"0", "transform":"scale(1.3)"});
        }
        //$(".tc-content_wrapper").css({"display":"block"});
        $(".tc-content_wrapper").css({"pointer-events":"auto", "opacity":"1"});
        
        //animation
        TweenMax.to($('.burgermenu'), 0.5, {delay: 0, scale: 1.3, alpha: 0, ease:Back.easeInOut, onComplete: fnBMenuReset});
        TweenMax.to($('.tc-header_navbar'), 0.5, {delay: 0, y:"0%", alpha: 1, ease:tweenEase});
    }
    
    //WINDOW SCROLL EVENTS
    $(window).scroll(function() {
        var scrollY = $(window).scrollTop();
        let vh = $(window).height();
        
        //init parallax fx
        fnParallax();
        
        if (scrollY > vh*0.2) {
            //
        }
    })
    
    //*** EVENTS START -->//
    
    //PARALLAX HERO FX (MOUSEMOVE)
    $('#tMasthead').mousemove(function(e) {
        var offsetX = (e.pageX * -1/50); //displace based on mouse location on page
        var offsetY = (e.pageY * -1/50); //displace based on mouse location on page
        
        //translate element x&y css values
        $('.tc-masthead_header-content').css({
            'transform':'translate('+offsetX+'px , '+offsetY+'px)',
            'transition': '0.1s ease-in-out'
        });
    });
    
    //PARALLAX HERO FX RESET (MOUSELEAVE)
    $('#tMasthead').mouseleave(function(e) {
        
        $('.tc-masthead_header-content').css({
           'transform':'translate(0px, 0px)',
           'transition': '1s ease-in-out'
        });
    });
    
	//LOAD NEW CONTENT
    function fnLoadContent(url, transition) {

        //delay before loading page request
        setTimeout(function() {
            store.set('transitionState', transition); //user is navigating across, create local cache indicating 
			
            //load new page
            window.location = url;
        }, 500);
    }
	
	//PAGE LOADER
	function fnPageLoader(href) {
		//event.preventDefault();//prevent click action
        
		let dirX = 1; //default slide direction of filter (right)
		
		let bound = "outbound"; //determines direction to move page & filter
		
		//!ABOUT PAGE - transition from left - right
		if(href=='about.html') {dirX=-1; bound='inbound';}
		
        //TRANSITION OUT (FROM LANDING PAGE)
        
        //UNLOAD NAVMENU
        fnNavUnload();
        
        //position filter for transition animation
        $(".tc-site_filter").css({"display":"block", "opacity":"1", "left":dirX*'100'+'%'});
        
        //TRANSITION PAGE OUT FX
		TweenMax.to($('.tc-content_wrapper'), 0.25, {delay: 0.1, left: dirX*'-100'+'%', alpha: 0, ease:tweenEase, onComplete:fnLoadContent(href,bound)});
        TweenMax.to($('.tc-site_filter'), 0.25, {delay: 0, left: '0%', alpha: 1, ease:tweenEase});
	}
	
	//MAIN MENU & PORTFOLIO FUNCTION:
    $("#tPortfolio .tc-gallery_tile a:nth-child(1), .tc-header_navmenu li:nth-child(3) a:nth-child(1)").click(function(event){
        event.preventDefault();//prevent click action
        
		//collects href data from clicked element
        let href = $(this).attr("href"); //get href request
		
		fnPageLoader(href);
    });
	
	//BURGERMENU FUNCTION:
    $(".burgermenu li:nth-child(3) a:nth-child(1)").click(function(event){
        
		event.preventDefault();//prevent click action
		
		//collects href data from clicked element
        let href = $(this).attr("href"); //get href request
		
		setTimeout(function() {
			fnPageLoader(href);
		},500);
    });
	
    //SCROLLTOTOP 
    $(".tc-button_top").click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    //PROJECT - IMAGE PREVIEW
    $(".tc-project_content").click(function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src')); //get image url from clicked element
        $('#imgModal').modal('show'); //launch modal
    });
    
    //PROJECT EXIT & RETURN HOME: 
    $(".tc-btn_returnhome").click(function(){
        
        //position filter for transition animation
        $(".tc-site_filter").css({"display":"block", "opacity":"1", "left":"-100%"});
        
        //TRANSITION PAGE OUT FX
        TweenMax.to($('.tc-site_filter'), 0.25, {delay: 0, left: '0%', alpha: 1, ease:tweenEase});
        TweenMax.to($('.tc-content_wrapper'), 0.25, {delay: 0, left: '100%', alpha: 0, ease:tweenEase, onComplete:fnLoadContent('index.html','inbound')});
    });
    
    //BURGER MENU - CLOSE:
    $("#btnBurgerMenuClose, .burgermenu li a:nth-child(1)").click(function(){
        fnBMenuClose();
    });
    
    //BURGER MENU - OPEN: 
    $(".burgermenu-btn").click(function(){
        
        //prep content
        $(".burgermenu").css({"display":"block", "opacity":"0", "transform":"scale(1.3)"});
        $(".tc-content_wrapper").css({"pointer-events":"none", "opacity":"0.25"});
        
        //animation
        TweenMax.to($('.burgermenu'), 0.5, {delay: 0, scale: 1, alpha: 1, ease:Back.easeInOut});
        TweenMax.to($('.tc-header_navbar'), 0.5, {delay: 0, y: '-100px', alpha: 0, ease:tweenEase});
    });
    
    //BURGER MENU - CONTACT: 
    $(".burgermenu ul li:nth-child(5)").click(function(){
        
        //delay
        setTimeout(function() { fnContactLoad(); }, 500);
    });
    
    //HEADER MENU - CONTACT: 
    $(".tc-header_navmenu li:nth-child(5)").click(function(){
        fnContactLoad();
    });
    
	//BTN NEXT PROJECT FUNC
	$("#tFooter a").click(function(event){
        event.preventDefault();//prevent click action
		
		//get current page number
		let pageNum = $('.tc-content_wrapper section').attr('id').slice(3,4);
		
		//
		function getHref(){
			let href = arrProjects[pageNum]+'.html'; //define next page href
			fnPageLoader(href); //initial page load
		}
		
		if(pageNum >= arrProjects.length){ 
			pageNum=0; //if last page then reset
			getHref();
		}else { 
			//pageNum++; //if more pages then increment
			getHref();
		}
    });
    
	
	
	
	
	
    //*** CODE TESTING AREA START -->//
    
    //always define function first before calling
    
	//TweenMax.set(mc, {x:100, y:200});
    //TweenMax.delayedCall(5, init);
    //txt1.style.opacity = 0;
    //$("#tPreloader").hide();
    //parent.location.hash = "hello";
    //sessionStorage.setItem('breakfast','cereal');
    //console.log(sessionStorage.getItem('breakfast'));
    
    //<--- CODE TESTING AREA END ***//
    
}); //--DOCUMENT READY END
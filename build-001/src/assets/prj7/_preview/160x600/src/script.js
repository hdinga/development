/***

STANDARD_A, REGIONAL_B - 160x600, 300X250, 320X100, 728X90
///TRIGGERCELLDESIGNS 2005-2018
***/
    
/* jshint strict: false, -W117 */

//GLOBAL VARIABLES
var metatag;
var disp;
var wFrame;
var hFrame;
var nLoop = 0;
var fDelay;
var tweenEase = 'Cubic.easeInOut';
var nCounter;
var runtime = 15;
var vid;


//--
function init() {
    //VARIABLES
    disp = 100;
    nCounter = 0;
    fDelay = 0;
    wFrame = container.offsetWidth; //
    hFrame = container.offsetHeight; //
    //vid = document.getElementById("bgVideo");
	
    //INIT PROPERTIES
	document.title = "EF Go Ahead Tours Campaign";
    //metatag = document.getElementsByTagName('meta');
	//metatag[1].setAttribute("content", "width=00, height=00");
	
	TweenLite.defaultOverwrite = "false";//
	
	TweenLite.set(lockup, {alpha:0, x:0, y:-5});
	TweenLite.set(cta, {alpha:0, scale:0.75});
    TweenLite.set(logo_gat, {alpha:0, y:disp/4});
    TweenLite.set(logo_txt1, {alpha:0, y:disp/4});
	TweenLite.set(logo_txt2, {alpha:0, y:disp/4});
    TweenLite.set(logo_box1, {alpha:0, y:disp});
	TweenLite.set(logo_box2, {alpha:1, y:disp/4});
	TweenLite.set(bground, {alpha:0, scale:1.1});
	
	//--
	TweenLite.set(txt1a, {alpha:0, x:0, y:disp/6});
    TweenLite.set(txt1b, {alpha:0, x:0, y:0});
	TweenLite.set(txt1c, {alpha:0, y:disp/10});
	
	TweenLite.set(txt1, {alpha:0, scale:4, x:0, y:110});
	TweenLite.set(txt2, {alpha:0, y:disp/2});
	
	//--
    document.getElementById("container").style.visibility = "visible";
    
    //INIT CALLOUTS
	fnMediaType(); //SELECT MEDIA TYPE: SM/RM
    setTimeout (function(){startFrame();}, 0000); //delaytimer
}

//-- MEDIA TYPE (STANDARD/RICH MEDIA)
function fnMediaType() {
	if (richmedia) {
		
		document.getElementById('btn').addEventListener('click', RMExitHandler, false); //DS EXIT HANDLER
		//DStudioVideoHandler(); //DS VIDEO HANDLER
		//getUserAgentOS(); //DS USERAGENT OS (ENABLE TO FIX VIDEO AUTOPLAY ISSUES ON IOS)
	}
}

//-- DOUBLECLICK VIDEO HANDLER
function DStudioVideoHandler() {
	//DOUBLECLICK STUDIO VIDEO HANDLER
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	  studio.video.Reporter.attach('video', bgVideo);
	}); 
}

//-- RM EXIT HANDLER (DOUBLECLICK)
function RMExitHandler(e) {
	Enabler.exit('Background Exit');
}

//--
function startFrame(){
    //fnBannerTimer();
	//vid.play();
    TweenLite.to(curtain, 0, {delay:0, alpha:0, onComplete:tween0});
}

//--
function tween0(){
	fDelay=0;
	
	TweenLite.to(txt1, 0.8, {delay:0, alpha:1, scale:1, ease:tweenEase});
	TweenLite.to(bground, 0.6, {delay:0, scale:1, alpha:1, x:0, y:0, ease:Power1.easeOut, onComplete:tween1});
}

//--
function tween1(){
	fDelay=0.5;

	TweenLite.to(txt1, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Back.easeInOut});
	TweenLite.to(txt2, 0.85, {delay:fDelay+0.3, alpha:1, x:0, y:0, ease:Back.easeInOut});
	TweenLite.to(cta, 0.5, {delay:fDelay+0.4, alpha:1, x:0, y:0, scale:1, ease:Back.easeOut});
	
	TweenLite.to(logo_box1, 0.75, {delay:fDelay+0.3, alpha:1, x:0, y:0, ease:tweenEase});
	TweenLite.to(logo_gat, 0.75, {delay:fDelay+0.37, alpha:1, x:0, y:0, ease:tweenEase});
	TweenLite.to(logo_txt1, 0.75, {delay:fDelay+0.4, alpha:1, x:0, y:0, ease:tweenEase});
	
	
	TweenLite.to(bground, 3, {delay:0, scale:1, alpha:1, x:-10, y:0, ease:Linear.easeNone, onComplete:tweenEnd});
}

//--
function tweenEnd(){
	fDelay=0.1;
	
	TweenLite.delayedCall(0.75, fnRollOverFx);
	TweenLite.delayedCall(2.0, fnRollOutFx);
	
	TweenLite.to(bground, 0.75, {delay:fDelay+0.60, scale:1, alpha:1, x:-10, y:0, ease:tweenEase});
	TweenLite.to(cta, 0.5, {delay:fDelay, alpha:1, scaleX:1, scaleY:1, ease:Back.easeInOut, onComplete:ctaListeners});
}

//--
function endFrame(){
    
    //ANIMATION LOOP x3
    if(nLoop < 2){
        TweenLite.delayedCall(3, init);
        nLoop++;
    }
}

//-- MOUSE BGROUND PAN (EVENT)
function fnMouseMovement(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	
	TweenLite.to(bground, 1, {delay:0, alpha:1, x:-mouseX/20, y:0, ease:Cubic.easeOut});
	TweenLite.to(txt1a, 1, {delay:0, alpha:1, x:mouseX/50, y:0, ease:Cubic.easeOut});
	TweenLite.to(txt1b, 1, {delay:0, alpha:1, x:mouseX/50, y:0, ease:Cubic.easeOut});
	//TweenLite.to(cta, 1, {delay:0, alpha:1, x:-mouseX/50, y:0, ease:Cubic.easeOut});
}

//-- BANNER FRAME TIMER
function fnBannerTimer() {
    var timeTicker = setInterval(fnCounter, 1000);
    
    function fnCounter(){
        if(nCounter<runtime){
            //console.log(nCounter);
            nCounter++;
        }else {
            clearInterval(nCounter);
        }
    }
}

//--CTA MOUSE EVENTS
function ctaListeners(){
	btn.addEventListener("mouseenter", fnCtaMouseOver);
    btn.addEventListener("mouseenter", fnRollOverFx);
	btn.addEventListener("mouseleave", fnRollOutFx);
	btn.addEventListener("mousemove", fnMouseMovement); //background map
}

//
function fnRollOverFx(){
	TweenLite.to(cta, 0.2, {delay:0, x:0, y:-disp/6, ease:Linear.easeInOut});
	TweenLite.to(logo_gat, 0.5, {delay:0, alpha:1, x:0, y:-disp/4, ease:Cubic.easeOut});
	TweenLite.to(logo_txt1, 0.5, {delay:0, alpha:1, x:0, y:-disp/4, ease:Cubic.easeOut});
	TweenLite.to(logo_box1, 0.5, {delay:0, alpha:1, x:0, y:-disp/4, ease:Cubic.easeOut});
	TweenLite.to(logo_txt2, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(logo_box2, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Cubic.easeOut});
}
//
function fnRollOutFx(){
	TweenLite.to(logo_gat, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(logo_txt1, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(logo_box1, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(logo_txt2, 0.5, {delay:0, alpha:1, x:0, y:disp/4, ease:Cubic.easeOut});
	TweenLite.to(logo_box2, 0.5, {delay:0, alpha:1, x:0, y:disp/4, ease:Cubic.easeOut});
	
	///RESET MOUSE OFFSETS
	TweenLite.to(txt1a, 1, {delay:0, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(txt1b, 1, {delay:0, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(cta, 0.3, {delay:0, x:0, y:0, ease:Cubic.easeOut});
	TweenLite.to(bground, 1, {delay:0, x:0, y:0, ease:Cubic.easeOut});
}

//
function fnCtaMouseOver(){
    TweenLite.to(cta, 0.2, {scale:1.1, ease:Linear.easeInOut});
	TweenLite.to(btn_shimmer, 0.5, {delay:0, alpha:1, x:105, y:0, ease:Linear.easeInOut, onComplete: fnCtaMouseOut});
}
//
function fnCtaMouseOut(){
    TweenLite.to(cta, 0.2, {scale:1.0, ease:Linear.easeInOut});
	TweenLite.to(btn_shimmer, 0.5, {delay:0, alpha:1, x:0, y:0, ease:Linear.easeInOut});
}

//-- FUNCTION OS PLATFORM
function getUserAgentOS() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	
	//WINDOWS
    if (/windows phone/i.test(userAgent)) {
        //return "Windows Phone";
    }
	//ANDROID
    if (/android/i.test(userAgent)) {
        //return "Android";
    }
    //iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		vid.style.display = "none";
        //return "iOS";
    }
    //return "Unknown OS"
}


/***
LIBRARY

TweenLite.delayedCall(5, init);
//txt1.style.opacity = 0;

***/
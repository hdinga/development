/***

///TRIGGERCELLDESIGNS 2005-2015
***/
    
/* jshint strict: false, -W117 */


//GLOBAL VARIABLES
var disp;
var fDelay;
var nCycle = 1;
var wFrame;
var hFrame;
var nCounter;
var arrTweens;


//--
function init() {
    //VARIABLES
    disp = 100;
    fDelay = 5;
    nCounter = 0;
    wFrame = container.offsetWidth; //
    hFrame = container.offsetHeight; //
    //arrTweens = [init, tween1a, tween2a, tween3a]; 
    
    
    //INIT PROPERTIES
    TweenMax.defaultOverwrite = "false";
    
    TweenLite.set(stageCurtain, {alpha:1}); // 
    


    TweenLite.set(imgSub1, {alpha:0, y:+disp/4});
    TweenLite.set(imgSub2, {alpha:0, y:+disp/4});
    TweenLite.set(imgSub3, {alpha:0, y:+disp/4});
    
    TweenLite.set(txtHeader, {alpha:0, y:disp/4});
    TweenLite.set(txtGroup1, {alpha:0, y:disp/4});
    TweenLite.set(txtGroup2, {alpha:0, y:disp/4});
    TweenLite.set(txtGroup3, {alpha:0, y:disp/4});
    
    document.getElementById("banner").style.visibility = "visible";
    
    //INIT CALLOUTS
    setTimeout (function(){startFrame();}, 0000); //delaytimer
}

//--
function startFrame(){
    //fnBannerTimer();
    fnMovingParticles();
    TweenLite.to(stageCurtain, 0.25, {delay:0, alpha:0, onComplete:tween1});
}

//-- FRAME 1

function tween1(){
 
    TweenLite.to(txtHeader, 0.5, {delay:0.2, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(imgSub1, 0.5, {delay:0.4, alpha:1, x:0, y:0, ease:Expo.easeInOut});

    
    TweenLite.to(txtGroup1, 0.75, {delay:0.40, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(txtGroup2, 0.75, {delay:0.45, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(txtGroup3, 0.75, {delay:0.50, alpha:1, y:0, ease:Back.easeInOut}); 
    
    TweenLite.to(txtGroup2_txt1, 0.5, {delay:0.5, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween2}); //nFunction
}
//-- FRAME 2
function tween2(){
    TweenLite.to(imgSub1, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt1, 0.5, {delay:fDelay, alpha:1, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(imgSub2, 0.5, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt2, 0.5, {delay:fDelay, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween3}); //nFunction
}

//-- FRAME 3 
function tween3(){
    TweenLite.to(imgSub2, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt2, 0.5, {delay:fDelay, alpha:1, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(imgSub3, 0.5, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt3, 0.5, {delay:fDelay, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween4}); //nFunction
}

//-- FRAME 4 
function tween4(){
    TweenLite.to(imgSub3, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt3, 0.5, {delay:fDelay, alpha:1, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(imgSub1, 0.5, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(txtGroup2_txt1, 0.5, {delay:fDelay, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween2}); //nFunction
}

//-- FRAME 2 RESET
/*function tween2b(){
    
    //--
    TweenLite.set(f2_imgHrline, {alpha:0, y:disp/3});
    TweenLite.set(f0_txtGroup2, {alpha:0, y:disp});
    TweenLite.set(f2_txtGroup1, {alpha:0, y:disp/3});
    TweenLite.set(f2_txtGroup2, {alpha:0, y:disp/3});
    TweenLite.set(f2_txtGroup3, {alpha:0, y:disp/3});
    
    TweenLite.set(f2_txtGroup2_txt1, {alpha:1, backgroundPositionY:0});
    TweenLite.set(f2_txtGroup2_txt2, {alpha:1, backgroundPositionY:0});
    TweenLite.set(f2_txtGroup2_txt3, {alpha:1, backgroundPositionY:0});
    tween3();
}


//-- FRAME 3 INTRO
function tween3(){
    TweenLite.to(stageSeparator, 0.5, {delay:0, alpha:1, x:520, ease:Expo.easeInOut});
    
    TweenLite.to(f0_txtGroup3, 0.5, {delay:0.2, alpha:1, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f0_item3, 0.5, {delay:0.4, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    
    TweenLite.to(f3_txtGroup1, 0.75, {delay:0.40, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f3_txtGroup2, 0.75, {delay:0.45, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f3_txtGroup3, 0.75, {delay:0.50, alpha:1, y:0, ease:Back.easeInOut, onComplete: fnFrameHold, onCompleteParams:[3]}); //nFunction
    
    //--
    switch(nCycle){
        case 1:
            TweenLite.to(f3_txtGroup2_txt1, 0.5, {delay:0.5, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut});
        break;
        case 2:
            TweenLite.to(f3_txtGroup2_txt2, 0.5, {delay:0.5, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut});
        break;
        case 3:
            TweenLite.to(f3_txtGroup2_txt3, 0.5, {delay:0.5, aplha:1, backgroundPositionY:-50, ease:Expo.easeInOut});
        break;
    }
}

//-- FRAME 3 EXIT
function tween3a(){
    TweenLite.to(f0_txtGroup3, 0.5, {delay:0.2, alpha:0, y:-disp, ease:Back.easeInOut});
    TweenLite.to(f0_item3, 0.5, {delay:0.4, alpha:0, x:disp*2, ease:Expo.easeInOut});
    
    TweenLite.to(f3_txtGroup1, 0.75, {delay:0.40, alpha:0, y:-disp, ease:Expo.easeInOut});
    TweenLite.to(f3_txtGroup2, 0.75, {delay:0.45, alpha:0, y:-disp, ease:Expo.easeInOut});
    TweenLite.to(f3_txtGroup3, 0.75, {delay:0.50, alpha:0, y:-disp, ease:Expo.easeInOut, onComplete: tween3b});
}
//-- FRAME 3 RESET
function tween3b(){
    
    if(nCycle > 2){
        nCycle = 1;
    }else {
        nCycle++;
    }
    
    //--
    TweenLite.set(f0_txtGroup3, {alpha:0, y:disp});
    TweenLite.set(f3_txtGroup1, {alpha:0, y:disp/3});
    TweenLite.set(f3_txtGroup2, {alpha:0, y:disp/3});
    TweenLite.set(f3_txtGroup3, {alpha:0, y:disp/3});
    
    TweenLite.set(f3_txtGroup2_txt1, {alpha:1, backgroundPositionY:0});
    TweenLite.set(f3_txtGroup2_txt2, {alpha:1, backgroundPositionY:0});
    TweenLite.set(f3_txtGroup2_txt3, {alpha:1, backgroundPositionY:0});
    tween1();
}
*/

//--
function fnFrameHold(nFunction){
    TweenLite.delayedCall(5, arrTweens[nFunction]);
}

//-- 
function fnMovingParticles(){
    
    tweenParticle1();
    function tweenParticle1(){
        TweenLite.to(stageTexture, 360, {delay:0, alpha:0.7, rotationZ: 90, ease:Linear.easeNone, onComplete: tweenParticle2});
    }
    function tweenParticle2(){
        TweenLite.to(stageTexture, 360, {delay:0, alpha:1.0, rotationZ: 00, ease:Linear.easeNone, onComplete: tweenParticle1});
    }
}

//-- BANNER FRAME TIMER
function fnBannerTimer() {
    var timeTicker = setInterval(fnCounter, 1000);
    var runtime = 30;
    function fnCounter(){
        if(nCounter<runtime){
            console.log(nCounter);
            nCounter++;
        }else {
            clearInterval(nCounter);
        }
    }
}


/***
LIBRARY

TweenLite.delayedCall(5, init);
//txt1.style.opacity = 0;

***/
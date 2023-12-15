/***

///TRIGGERCELLDESIGNS 2005-2015
***/
    
/* jshint strict: false, -W117 */


//GLOBAL VARIABLES
var disp;
var dAlpha;
var wFrame;
var hFrame;
var nCounter;
var arrTweens;


//--
function init() {
    //VARIABLES
    disp = 50;
    dAlpha = 0;
    nCounter = 0;
    arrTweens = [tween1a, tween2a, tween3a, tween4a, init];
    wFrame = container.offsetWidth; //
    hFrame = container.offsetHeight; //
    
    //INIT PROPERTIES
    TweenMax.defaultOverwrite = "false";
    
    TweenLite.set(stageCurtain, {alpha:1}); // 
    
    TweenLite.set(f0_txtHeader1, {alpha:dAlpha, x:0, y:disp}); // 
    TweenLite.set(f0_img1, {alpha:dAlpha, x:-disp*12, y:0}); // 
    TweenLite.set(f0_img2, {alpha:dAlpha, x:-disp*12, y:0});
    TweenLite.set(f0_img3, {alpha:dAlpha, x:-disp*12, y:0});
    TweenLite.set(f0_img4, {alpha:dAlpha, x:-disp*12, y:0});
    
    
    //FRAME-1
    TweenLite.set(f1_txtHeader1, {alpha:dAlpha, y:disp}); //
    TweenLite.set(f1_txt1, {alpha:dAlpha, x:-disp/2}); // 
    
    TweenLite.set(f1_img1, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f1_img2, {alpha:dAlpha, y:hFrame, rotation: 0}); //
    TweenLite.set(f1_img3, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f1_img4a, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f1_img4b, {alpha:dAlpha, y:hFrame}); //
    
    
    //FRAME-2
    TweenLite.set(f2_txtHeader1, {alpha:dAlpha, y:disp}); //
    TweenLite.set(f2_txtHeader2, {alpha:dAlpha, y:disp}); //
    TweenLite.set(f2_txt1, {alpha:dAlpha, x:-disp/2}); // 
    TweenLite.set(f2_txt2, {alpha:dAlpha, x:-disp/2}); //
    
    TweenLite.set(f2_img1, {alpha:dAlpha, y:hFrame, rotation: 0}); //
    TweenLite.set(f2_img2, {alpha:dAlpha, y:hFrame, rotation: 0}); //
    TweenLite.set(f2_img3, {alpha:dAlpha, y:hFrame, rotation: 0}); //
    
    
    //FRAME-3
    TweenLite.set(f3_txtHeader1, {alpha:dAlpha, y:disp}); // 
    TweenLite.set(f3_txt1, {alpha:dAlpha, x:-disp/2}); // 
    
    TweenLite.set(f3_img1, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: -50}); //
    TweenLite.set(f3_img2, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img3, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: -75}); //
    TweenLite.set(f3_img4a, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    TweenLite.set(f3_img4b, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    TweenLite.set(f3_img5, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img6a, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img6b, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img7a, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img7b, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img8, {alpha:dAlpha, y:hFrame}); //
    TweenLite.set(f3_img9a, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 60}); //
    TweenLite.set(f3_img9b, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    TweenLite.set(f3_img9c, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    TweenLite.set(f3_img9d, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    TweenLite.set(f3_img9e, {alpha:dAlpha, y:hFrame, rotationX: 0, rotationZ: 0}); //
    

    
    //FRAME-4
    TweenLite.set(f4_txtHeader1, {alpha:dAlpha, y:disp}); // 
    
    TweenLite.set(f4_imgTxt1, {alpha:dAlpha, y:disp/4}); // 
    TweenLite.set(f4_imgTxt2, {alpha:dAlpha, y:disp/4}); // 
    TweenLite.set(f4_imgTxt3, {alpha:dAlpha, y:disp/4}); // 
    TweenLite.set(f4_imgTxt4, {alpha:dAlpha, y:disp/4}); // 
    TweenLite.set(f4_imgTxt5, {alpha:dAlpha, y:disp/4}); // 
    TweenLite.set(f4_imgTxt6, {alpha:dAlpha, y:disp/4}); //
    
    TweenLite.set(f4_img1, {alpha:dAlpha, y:hFrame}); // 
    TweenLite.set(f4_img2, {alpha:dAlpha, y:hFrame}); // 
    TweenLite.set(f4_img3, {alpha:dAlpha, y:hFrame}); // 
    TweenLite.set(f4_img4a, {alpha:dAlpha, y:hFrame}); // 
    //TweenLite.set(f4_img4b, {alpha:dAlpha, y:0}); // 
    TweenLite.set(f4_img4b1, {alpha:dAlpha, y:0}); 
    TweenLite.set(f4_img4b2, {alpha:dAlpha, y:0});
    TweenLite.set(f4_img4b3, {alpha:dAlpha, y:0});
    TweenLite.set(f4_img4b4, {alpha:dAlpha, y:0});
    TweenLite.set(f4_img5, {alpha:dAlpha, y:hFrame}); // 
    TweenLite.set(f4_img6, {alpha:dAlpha, y:hFrame}); // 
    TweenLite.set(f4_img7a, {alpha:dAlpha, y:disp}); // 
    TweenLite.set(f4_img7b, {alpha:dAlpha, y:-disp}); // 
    
    
    document.getElementById("banner").style.visibility = "visible";
    
    
    
    //INIT CALLOUTS
    setTimeout (function(){startFrame();}, 0000); //delaytimer
}

//--
function startFrame(){
    //fnBannerTimer();
    TweenLite.to(stageCurtain, 0.25, {delay:0, alpha:0, onComplete:tween1});
}

//-- FRAME 1 INTRO
function tween1(){
    TweenLite.to(f0_txtHeader1, 0.5, {delay:0, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f0_img1, 0.75, {delay:0, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    
    TweenLite.to(f1_img1, 0.75, {delay:0.2, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f1_img2, 0.75, {delay:0, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f1_img2,30,0,30]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f1_img3, 0.75, {delay:0.2, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f1_img4a, 0.75, {delay:0.5, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f1_img4b, 0.75, {delay:0.6, alpha:1, y:0, ease:Cubic.easeOut});
    
    TweenLite.to(f1_txtHeader1, 0.5, {delay:0.8, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f1_txt1, 0.5, {delay:1.3, alpha:1, x:0, ease:Cubic.easeOut, onComplete: FrameHold, onCompleteParams:[0]}); //nFunction
}
//-- FRAME 1 EXIT
function tween1a(){
    TweenLite.to(f1_txtHeader1, 0.5, {delay:0, alpha:0, y:-disp/2, ease:Cubic.easeOut});
    TweenLite.to(f1_txt1, 0.5, {delay:0, alpha:0, x:disp/2, ease:Cubic.easeOut});
    TweenLite.to(f0_img1, 0.5, {delay:0, alpha:0, x:-disp*12, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f1_img1, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f1_img2, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut}); 
    TweenLite.to(f1_img3, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f1_img4a, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f1_img4b, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut, onComplete: tween2});
}

//-- FRAME 2 INTRO
function tween2(){
    TweenLite.to(f0_img2, 0.75, {delay:0, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    
    TweenLite.to(f2_img1, 0.75, {delay:0.2, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f2_img1,30,0,-30]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f2_img2, 0.75, {delay:0, alpha:1, y:0, ease:Cubic.easeOut}); 
    TweenLite.to(f2_img3, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f2_img3,30,0,30]}); //mc, vSpeed, xRotation, zRotation
    
    TweenLite.to(f2_txtHeader1, 0.5, {delay:0.8, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f2_txt1, 0.5, {delay:1.3, alpha:1, x:0, ease:Cubic.easeOut});
    TweenLite.to(f2_txtHeader2, 0.5, {delay:1.8, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f2_txt2, 0.5, {delay:2.3, alpha:1, x:0, ease:Cubic.easeOut, onComplete: FrameHold, onCompleteParams:[1]}); //nFunction
}
//-- FRAME 2 EXIT
function tween2a(){
    TweenLite.to(f2_txtHeader1, 0.5, {delay:0, alpha:0, y:-disp/2, ease:Cubic.easeOut});
    TweenLite.to(f2_txt1, 0.5, {delay:0, alpha:0, x:disp/2, ease:Cubic.easeOut});
    TweenLite.to(f2_txtHeader2, 0.5, {delay:0+0.1, alpha:0, y:-disp/2, ease:Cubic.easeOut});
    TweenLite.to(f2_txt2, 0.5, {delay:0+0.1, alpha:0, x:disp/2, ease:Cubic.easeOut});
    TweenLite.to(f0_img2, 0.5, {delay:0, alpha:0, x:-disp*12, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f2_img1, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f2_img2, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut}); 
    TweenLite.to(f2_img3, 0.75, {delay:0+0.3, alpha:0, y:-hFrame, ease:Cubic.easeOut, onComplete: tween3});
}

//-- FRAME 3 INTRO
function tween3(){
    TweenLite.to(f0_img3, 0.75, {delay:0, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    
    TweenLite.to(f3_img1, 0.75, {delay:0, alpha:1, y:0, rotationZ: 0, ease:Cubic.easeOut});
    TweenLite.to(f3_img2, 0.75, {delay:0, alpha:1, y:0, ease:Cubic.easeOut}); 
    TweenLite.to(f3_img3, 0.75, {delay:0.3, alpha:1, y:0, rotationZ: 0, ease:Cubic.easeOut});
    TweenLite.to(f3_img4a, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img4a,30,0,30]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img4b, 0.75, {delay:0.4, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img4b,10,0,-60]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img5, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img6a, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img6b, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img7a, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img7b, 0.75, {delay:0.35, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img8, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f3_img9a, 0.75, {delay:0.2, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img9a,20,60,-30]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img9b, 0.75, {delay:0.3, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img9b,30,10,-60]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img9c, 0.75, {delay:0.2, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img9c,30,10,30]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img9d, 0.75, {delay:0.4, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img9d,30,60,-10]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f3_img9e, 0.75, {delay:0.1, alpha:1, y:0, ease:Cubic.easeOut, onComplete: fnSpinner, onCompleteParams:[f3_img9e,30,10,30]}); //mc, vSpeed, xRotation, zRotation
    
    TweenLite.to(f3_txtHeader1, 0.5, {delay:0.6, alpha:1, y:0, ease:Cubic.easeOut, onComplete: FrameHold, onCompleteParams:[2]});
    //TweenLite.to(f3_txt1, 0.5, {delay:0.6, alpha:1, x:0, ease:Cubic.easeOut}); //nFunction
}
//-- FRAME 3 EXIT
function tween3a(){
    TweenLite.to(f3_txtHeader1, 0.5, {delay:0, alpha:0, y:-disp/2, ease:Cubic.easeOut});
    //TweenLite.to(f3_txt1, 0.5, {delay:0, alpha:0, x:disp/2, ease:Cubic.easeOut});
    TweenLite.to(f0_img3, 0.5, {delay:0, alpha:0, x:-disp*12, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f3_img1, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img2, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut}); 
    TweenLite.to(f3_img3, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img4a, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img4b, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img5, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img6a, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img6b, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img7a, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img7b, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img8, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img9a, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img9b, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img9c, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img9d, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f3_img9e, 0.75, {delay:0, alpha:0, y:-hFrame, ease:Cubic.easeOut, onComplete: tween4});
}

//-- FRAME 4 INTRO
function tween4(){
    TweenLite.to(f0_img4, 0.75, {delay:0, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    
    TweenLite.to(f4_img7a, 0.5, {delay:0.0, alpha:1, y:0, ease:Cubic.easeOut});
    TweenLite.to(f4_img7b, 0.5, {delay:0.0, alpha:1, y:0, ease:Cubic.easeOut});
    
    //honey-mustard
    TweenLite.to(f4_img2, 0.5, {delay:0.0, alpha:1, y:0, ease:Expo.easeOut});
    TweenLite.to(f4_imgTxt2, 0.5, {delay:0.3, alpha:1, x:0, ease:Cubic.easeOut});
    
    //mustard
    TweenLite.to(f4_img5, 0.5, {delay:0.0, alpha:1, y:0, ease:Power3.easeOut, onComplete: fnSpinner, onCompleteParams:[f4_img5,30,0,-60]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f4_imgTxt5, 0.5, {delay:0.3, alpha:1, x:0, ease:Cubic.easeOut});
    
    //sweet-onion
    TweenLite.to(f4_img1, 0.5, {delay:0.2, alpha:1, y:0, ease:Power3.easeOut, onComplete: fnSpinner, onCompleteParams:[f4_img1,30,0,90]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f4_imgTxt1, 0.5, {delay:0.5, alpha:1, x:0, ease:Cubic.easeOut});
    
    //vinegar
    TweenLite.to(f4_img6, 0.5, {delay:0.2, alpha:1, y:0, ease:Power3.easeOut});
    TweenLite.to(f4_imgTxt6, 0.5, {delay:0.5, alpha:1, x:0, ease:Cubic.easeOut});
    
    //ketchup
    TweenLite.to(f4_img4a, 0.5, {delay:0.3, alpha:1, y:0, ease:Power3.easeOut});
    //TweenLite.to(f4_img4b, 0.5, {delay:0.6, alpha:1, y:0, ease:Power3.easeOut});
    TweenLite.to(f4_img4b1, 0.5, {delay:0.6, alpha:1, y:0, ease:Power3.easeOut});
    TweenLite.to(f4_img4b2, 0.5, {delay:0.7, alpha:1, y:0, ease:Power3.easeOut});
    TweenLite.to(f4_img4b3, 0.5, {delay:0.8, alpha:1, y:0, ease:Power3.easeOut});
    TweenLite.to(f4_img4b4, 0.5, {delay:0.9, alpha:1, y:0, ease:Power3.easeOut});
    
    TweenLite.to(f4_imgTxt4, 0.5, {delay:0.6, alpha:1, x:0, ease:Cubic.easeOut});
    
    //oil
    TweenLite.to(f4_img3, 0.5, {delay:0.4, alpha:1, y:0, ease:Power3.easeOut, onComplete: fnSpinner, onCompleteParams:[f4_img3,30,0,60]}); //mc, vSpeed, xRotation, zRotation
    TweenLite.to(f4_imgTxt3, 0.5, {delay:0.7, alpha:1, x:0, ease:Cubic.easeOut});
    
    TweenLite.to(f4_txtHeader1, 0.5, {delay:0.4, alpha:1, y:0, ease:Cubic.easeOut, onComplete: FrameHold, onCompleteParams:[3]}); //nFunction

}
//-- FRAME 4 EXIT
function tween4a(){
    TweenLite.to(f4_txtHeader1, 0.5, {delay:0.0, alpha:0, y:-disp/2, ease:Cubic.easeOut});
    TweenLite.to(f0_img4, 0.5, {delay:0, alpha:0, x:-disp*12, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f4_img7a, 0.75, {delay:0.0, alpha:0, y:disp, ease:Cubic.easeOut});
    TweenLite.to(f4_img7b, 0.75, {delay:0.0, alpha:0, y:-disp, ease:Cubic.easeOut});
    
    //honey-mustard
    TweenLite.to(f4_img2, 0.75, {delay:0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_imgTxt2, 0.75, {delay:0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    
    //mustard
    TweenLite.to(f4_img5, 0.75, {delay:0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_imgTxt5, 0.75, {delay:0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    
    //sweet-onion
    TweenLite.to(f4_img1, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_imgTxt1, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    
    //vinegar
    TweenLite.to(f4_img6, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_imgTxt6, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    
    //ketchup
    TweenLite.to(f4_img4a, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_img4b1, 0.25, {delay: 0.0, alpha:0, y:0, ease:Cubic.easeOut});
    TweenLite.to(f4_img4b2, 0.25, {delay: 0.15, alpha:0, y:0, ease:Cubic.easeOut});
    TweenLite.to(f4_img4b3, 0.25, {delay: 0.20, alpha:0, y:0, ease:Cubic.easeOut});
    TweenLite.to(f4_img4b4, 0.25, {delay: 0.25, alpha:0, y:0, ease:Cubic.easeOut});
    
    TweenLite.to(f4_imgTxt4, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    
    //oil
    TweenLite.to(f4_img3, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut});
    TweenLite.to(f4_imgTxt3, 0.75, {delay: 0.0, alpha:0, y:-hFrame, ease:Cubic.easeOut, onComplete: init}); 
}

//--
function FrameHold(nFunction){
    TweenLite.delayedCall(5, arrTweens[nFunction]);
}

//--
function fnSpinner(mc, vSpeed, xRotation, zRotation){
    TweenLite.to(mc, vSpeed, {delay:0, rotationX: xRotation, rotationZ: zRotation, ease:Linear.easeNone});
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
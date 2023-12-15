#include <FastLED.h>

//
int pinRed = 2;
int pinGreen = 3;
int pinBlue = 4;

//
int redVal;
int greenVal;
int blueVal;

// the setup function runs once when you press reset or power the board
void setup() {
  //
  pinMode(pinBlue, OUTPUT);
  pinMode(pinGreen, OUTPUT);
  pinMode(pinRed, OUTPUT);

  //
  digitalWrite(pinRed, HIGH);
  digitalWrite(pinGreen, LOW);
  digitalWrite(pinBlue, LOW);

  /*
  pinMode(pinRed, INPUT);
  pinMode(pinGreen, INPUT);
  pinMode(pinBlue, INPUT);
  
  digitalWrite(pinRed, LOW);
  digitalWrite(pinGreen, LOW);
  digitalWrite(pinBlue, LOW);
  */
}

/*
void setColor(int redValue, int greenValue, int blueValue) {
  digitalWrite(pinRed, redValue);
  analogWrite(pinGreen, greenValue);
  analogWrite(pinBlue, blueValue);
}*/

// the loop function runs over and over again forever
void loop() {

  #define delayTime 5 //

  for (int i=0;i<255;i+=1){
    redVal -= 1;
    greenVal += 1;
    analogWrite(pinRed, redVal);
    analogWrite(pinGreen, greenVal);
    delay(delayTime);
    
    }

    redVal = 0;
    greenVal = 255;
    blueVal = 0;

    /*for (int i=0;i<255;i+=1){
    greenVal -= 1;
    blueVal += 1;
    analogWrite(pinGreen, greenVal);
    analogWrite(pinBlue, blueVal);
    delay(delayTime);
    
    }

    redVal = 0;
    greenVal = 0;
    blueVal = 255;

    for (int i=0;i<255;i+=1){
    blueVal -= 1;
    redVal += 1;
    analogWrite(pinBlue, blueVal);
    analogWrite(pinRed, redVal);
    delay(delayTime);
    
    }*/
    
  //digitalWrite(pinRed, HIGH);
  //digitalWrite(pinBlue, HIGH);
  //digitalWrite(pinGreen, HIGH);
  //delay(1000);
  /*delay(1000);
  setColor(0, 255, 0); // Green Color
  delay(1000);
  setColor(0, 0, 255); // Blue Color
  delay(1000);
  setColor(255, 255, 255); // White Color
  delay(1000);
  setColor(170, 0, 255); // Purple Color
  delay(1000);*/
}

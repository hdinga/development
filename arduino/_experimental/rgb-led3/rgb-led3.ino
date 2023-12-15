
//
int pinRed = 2;
int pinGreen = 3;
int pinBlue = A4;

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
}

/*
void setColor(int redValue, int greenValue, int blueValue) {
  digitalWrite(pinRed, redValue);
  analogWrite(pinGreen, greenValue);
  analogWrite(pinBlue, blueValue);
}*/

// the loop function runs over and over again forever
void loop() {

  //#define delayTime 5 //

analogWrite(A4, 255);
  /*
  for (int i=0; i<255; i++){
    analogWrite(pinBlue, i);
    delay(10);
    
    }

    /*
    for (int i=255; i>0; i--){
    analogWrite(pinRed, i);
    delay(1000);
    
    }
    */
    
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

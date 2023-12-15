#include <FastLED.h>

#define LED_PIN     6
//#define CLOCK_PIN 4 
#define NUM_LEDS    60
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB
#define BRIGHTNESS  255

CRGB leds[NUM_LEDS];

void setup() {
    //delay(1000);
    LEDS.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS);
//  LEDS.addLeds<LED_TYPE, LED_PIN, CLOCK_PIN COLOR_ORDER>(leds, NUM_LEDS);
    //FastLED.setBrightness(BRIGHTNESS);
    Serial.begin(9600);
}

int nCounter =0;
int mCounter =255;
int fadeAmount = 25;
int brightness = 0; 
int nLed=0;
int nLoop=0;
int nColor = 0;


void loop() {
  // put your main code here, to run repeatedly:
  fadeUp3();
  //fadeUp2(nLed);
  //fadeUp();
  if(nLed >= NUM_LEDS) { nLed=0;}
}

void fadeUp() {
  if(fadeAmount == 1) {
    leds[nLed].setRGB(255,0,0);  // Set Color HERE!!!
    leds[nLed].maximizeBrightness(brightness);
    FastLED.show();
  
    brightness = brightness + fadeAmount;
  
    if(brightness >= 255){
      fadeAmount = -fadeAmount; 
      nLoop=1;
    }

    if(brightness <= 0 || fadeAmount == -1){
      nLoop=0;
    //nLed++;
    }
    Serial.println(brightness);
  }
}

void fadeUp2(int n) {
  leds[n].setRGB(255,0,0);  // Set Color HERE!!!
    leds[n].maximizeBrightness(brightness);
    FastLED.show();
  
    brightness = brightness + fadeAmount;
  

    if(brightness == 0){
      fadeAmount = fadeAmount; 
      //nLoop=1;
      //Serial.println(brightness);
    }

    if(brightness == 255){
      fadeAmount = -fadeAmount; 
      //nLoop=1;
      //Serial.println(brightness);
    }

    if(brightness == 0 && nLoop == 1){
      fadeAmount = -fadeAmount; 
      nLoop=0;
    nLed++;
    }
    
    //Serial.println(brightness);

}

//
void fadeUp3() {
  if(nLoop == 0) {
    leds[nLed] = 0xFF007F;
    //leds[nLed].setRGB(255,0,0);  // Set Color HERE!!!
    
    leds[nLed].maximizeBrightness(brightness);
    FastLED.show();
  
    brightness = brightness + fadeAmount;
    //brightness++;
    
    if(brightness > 255){
      //fadeAmount = -fadeAmount; 
      nLoop=1;
    }

    //Serial.println(brightness);
  }else if(nLoop == 1) {
    leds[nLed] = 0xFF007F;
    //leds[nLed].setRGB(255,0,0);  // Set Color HERE!!!
    ///leds[nLed].fadeLightBy(brightness);
    leds[nLed].maximizeBrightness(brightness);
    FastLED.show();

  //brightness--;
    brightness = brightness - fadeAmount;
  
    if(brightness < 0){
      nLed++;
      nLoop=0;
    }

    delay(0);
    //Serial.println(brightness);
  }
}

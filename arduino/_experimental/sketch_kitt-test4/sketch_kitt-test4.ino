/* Code for FastLED video tutorial
 *  by Nils Gregersen 2017
 *  youtube: hamburgtech
 *  email: info@hamburgtech.de
 */

#include <FastLED.h>

#define LED_PIN     6
//#define CLOCK_PIN 4 
#define NUM_LEDS    60
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB
#define BRIGHTNESS  255

int nCounter =0;
int mCounter =255;
int fadeAmount = 1;
int brightness = 0; 
int nLed=0;

int nLedB=0;

int nLoop =0;
int nSpeed =0;

CRGB leds[NUM_LEDS];

void setup() {
    delay(1000);
    LEDS.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS);
//  LEDS.addLeds<LED_TYPE, LED_PIN, CLOCK_PIN COLOR_ORDER>(leds, NUM_LEDS);
    FastLED.setBrightness(BRIGHTNESS);
    Serial.begin(9600);
}

void loop() {

 for(int i=0;i<=BRIGHTNESS;i++){  

   leds[nLed] = 0xFF0000;
   leds[nLed].maximizeBrightness(i);
   FastLED.show();
   
   //delay(nSpeed);
   //Serial.println(i);
   
 }

 if(nLed>5) { 
  
for(int j=BRIGHTNESS;j>=0;j--){  

   //leds[nLed] = 0xFF0000;
   leds[nLedB].maximizeBrightness(j);
   FastLED.show();
if(nLedB<=60) { nLedB++; }
 }
 
  }
 
 
  if(nLed<=60) { nLed++; }
  //FastLED.clear(); 
}

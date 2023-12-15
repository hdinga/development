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
#define BRIGHTNESS  64

int nLoop =0;
int nSpeed =100;
int nColor = "23F000";

CRGB leds[NUM_LEDS];

void setup() {
    delay(1000);
    LEDS.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS);
//  LEDS.addLeds<LED_TYPE, LED_PIN, CLOCK_PIN COLOR_ORDER>(leds, NUM_LEDS);
    FastLED.setBrightness(BRIGHTNESS);
    Serial.begin(9600);
}

void loop()
{
  if(nLoop==0) {
 for(int i=0;i<=NUM_LEDS;i++){  
   leds[i-3].setRGB(0,0,0);
   leds[i] = 0xFF0000;
   if(i==NUM_LEDS) { nLoop=1; }
   FastLED.show();
   
   delay(nSpeed);
   //Serial.println(i);
 }
  }
  //FastLED.clear();    

if(nLoop ==1) {
  for(int i=NUM_LEDS;i>=0;i--){  
   leds[i+3].setRGB(0,0,0);
   leds[i] = 0xFF0000;
   if(i==0) { nLoop=0; }
   FastLED.show();
   delay(nSpeed);
   //Serial.println(i);
 }
}
  FastLED.clear(); 
}

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
int fadeAmount = 1;
int brightness = 0; 
int nLed=0;
int nLoop=0;
int nColor = 0;


void loop() {
  fadeUp();
  if(nLed >= NUM_LEDS) { nLed=0;}
}


//
void fadeUp() {
  leds[nLed] = 0xFF007F;
  leds[nLed+1] = 0xFF0000;
  leds[nLed+2] = 0xFF007F;
  
  if(nLoop == 0) {
    
    leds[nLed].maximizeBrightness(brightness);
    leds[nLed+1].maximizeBrightness(brightness);
    leds[nLed+2].maximizeBrightness(brightness);
    
    FastLED.show();
  
    brightness = brightness + fadeAmount;
    
    if(brightness > 255){
      nLoop=1;
    }
    
  }else if(nLoop == 1) {
    leds[nLed].maximizeBrightness(brightness);
    leds[nLed+1].maximizeBrightness(brightness);
    leds[nLed+2].maximizeBrightness(brightness);
    
    FastLED.show();

    brightness = brightness - fadeAmount;
  
    if(brightness < 0){
      nLed++;
      nLoop=0;
    }

    delay(0);
    //Serial.println(brightness);
  }
}

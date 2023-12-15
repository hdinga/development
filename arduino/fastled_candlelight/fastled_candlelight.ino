//This is for a single LED to display as if it is a small candle or flame or a small lantern. You can edit the Hue range to change the color of the flame
// it works best when you keep the values in the same color range ie. red orange yellow. You can change the saturation to have less white and more of a fire vs a light source.
//And then the Value will allow and brighter consistent light or a bouncing dim to bright light.




#include <FastLED.h>
#define NUM_LEDS 75
#define LED_PIN 2
#define CLOCK_PIN 11
#define BRIGHTNESS 255


//===============================================================
CRGB leds[NUM_LEDS];

void setup() {
  // put your setup code here, to run once: 
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setMaxPowerInVoltsAndMilliamps(5, 500);
  FastLED.setBrightness(BRIGHTNESS);
  FastLED.clear();
  FastLED.show();
  
}

void loop() {
  for( int i = 0; i < NUM_LEDS; i++) {
    //leds[i] = CHSV( random8(26,45), random8(175,255), random8(50,255));
    leds[i] = CHSV( random8(10,60), random8(200,255), random8(50,255));
    FastLED.setBrightness(random8(0,BRIGHTNESS));
  }

FastLED.show();

}

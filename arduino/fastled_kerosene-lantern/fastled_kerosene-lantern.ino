/*
  File: kerosene.ino
  By: Andrew Tuline
  Date: Sept 2021
 
  YouTube: https://youtu.be/nujPXey2Elo
  
  To simimulate a kerosene lantern on an Arduino Nano with WS2812 LED's and three potentiometers.
 
  This routine creates a sinewave envelope that limits the brightness across the length of the LED strip and uses my twinkleup routine to animate each LED.
 
  This routine:
  - Must support strands >255 leds.
  - Uses floating point math for ease of development.
 
  It has:
  - An adjustable location from 1 up to NUM_LED/2 for the maximum brightness.
  - An adjustable gamma correction in the top half (after the maximum value).
  - An adjustable minimum brightness.
 
  Bottom half of strand has:
  - A portion of a sinewave going from 0 to 255.
  - A slider to control the location of maximum brightness (up to NUM_LEDS/2).
  - A slider to adjust the minimum brightness.
 
  Top half of strand has:
  - A portion of a sinewave going from 255 to 0.
  - The frequency of that wave extends from end of bottom half up to NUM_LEDS-1.
  - An adjustable gamma correction. Think tapering the flame.
  - Minimum brightness is not applied here.
 
  Controls:
  A2 - Upper flame height/taper (aka gamma correction).
  A3 - Max brightness location (aka adjustable frequency).
  A4 - Minimum brightness for bottom half of animation.
 
  Optional Controls:
 
  ?? - Blur amount.
  ?? - Speed.
  ?? - Colours/palette selectability
 
*/
 
 
#include <FastLED.h>
 
#define LED_DT 10
#define NUM_LEDS 100
 
uint8_t max_bright = 255;
struct CRGB leds[NUM_LEDS];
CRGBPalette16 currentPalette = LavaColors_p;
 
 
#define PI 3.1415926535
 
// Global variables used by controls.
uint16_t lowSin;        // Adjustable midpoint/maximum brightness location of the animation.
float gammaFlame;            // Used for tapering the top half of the flame.
uint8_t minBri;         // Used to control minimum brightness for bottom half of flame.
 
 
 
void setup() {
  Serial.begin(115200);
  LEDS.addLeds<WS2811, LED_DT, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(max_bright);
} // setup()
 
 
 
void loop() {
  getinputs();
  kerosene();
  FastLED.show();
} // loop()
 
 
 
void getinputs() {
  lowSin = analogRead(A3) / 32;                       // The location of the highest value of the sine wave is between 0 and 31. . .
  if (lowSin > NUM_LEDS / 2) lowSin = NUM_LEDS / 2;   // But not higher than halfway.
  //gammaFlame = (float)(1024 - analogRead(A2)) / 128. + 1.; // original.
  gammaFlame -= (float)(1024 - analogRead(A2)) / 128. + 1.; // Tapering/gamma correction on the top half of the wave.
  minBri =  analogRead(A4) / 4;                       // Minimum brightness for the bottom half of the wave.
} // getinputs()
 
 
 
void kerosene() {
 
  random16_set_seed(535);                                                         // Pseudo-random number seed ensures the same random numbers for every frame. Requires no array space.
  uint16_t sinOut;                                                                // Envelope of brightness.
  uint16_t pixBri;                                                                // Resultant pixel brightness.
 
  for (int i = 0; i < NUM_LEDS; i++) {
    if (i < lowSin) {                                                             // Low end of the kerosene lamp.
      sinOut = (127 * cos( PI + i * PI / lowSin) + 127.);                         // Create a sinewave based brightness envelope.
      pixBri = beatsin8(128 / 2 + random8() / 4, 128, 255, 0, random8());         // Every pixel gets a different timebase.
      pixBri = pixBri * sinOut / 255;                                             // Apply the brightness envelope.
      if (pixBri < minBri) pixBri = minBri;                                       // Oops, not bright enough.
    } else {                                                                      // High end of the kerosene lamp.
      float temp = (float)(i - lowSin) / (NUM_LEDS - lowSin - 1);                 // Tapering high end of the flame.
      sinOut = cos( PI * temp) * 128. + 127;                                      // Create a sinewave based brightness envelope.
      sinOut = (float)(pow((float)sinOut / (float)255, gammaFlame) * 255. + 0.5);      // Gamma correction applied to the envelope.
      pixBri = beatsin8(128 / 2 + random8() / 4, 128, 255, 0, random8());         // Every pixel gets a different timebase.
      pixBri = pixBri * sinOut / 255;                                             // Apply the brightness envelope, but with no minBri value test.
    }
 
    //    setPixelColor(i, color_blend(SEGCOLOR(1), color_from_palette(random8()+now/100, false, PALETTE_SOLID_WRAP, 0), pixBri));  // Used for WLED.
    //   leds[i] = ColorFromPalette(currentPalette, i * 20 + millis() / 100, pixBri, LINEARBLEND);                                 // Palette compatible.
    leds[i] = CHSV(40, 255, pixBri); //change led color                                                                                               // Basic CHSV support.
  }
 
  blur1d( leds, NUM_LEDS, 128);                                                   // Need to blur so it looks more like a kerosene lamp. Could be adjustable.
 
} // kerosene()

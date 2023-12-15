int pinDefault = 3;
int nSec = 1000;
int nMin = 60*nSec;
int nDelay = 1000;

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(pinDefault, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(pinDefault, HIGH);
  delay(nMin);
  digitalWrite(pinDefault, LOW);
  delay(nMin/2);
  Serial.print("hello");
}

const int pinDefault = 3;

long int nSec = 1000;
long int nMin = nSec*60;
long int nDelay = nMin*60;

int nCounter = 0;
int maxCount = 10;

// setup
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(pinDefault, OUTPUT);
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {

  if (nCounter < maxCount) {
    nCounter++;
    digitalWrite(pinDefault, HIGH);

    //
    Serial.write("nCounter: ");
    Serial.println(nCounter);
    Serial.write("DELAY: ");
    Serial.println(nMin);
    Serial.println("---");
    Serial.println("");
    delay(nMin); 

    //
    digitalWrite(pinDefault, LOW);
    delay(nMin);
  } else {
    nCounter=0;

    //
    Serial.println("nCounter: RESET");
    Serial.write("COOLDOWN: ");
    Serial.println(nDelay);
    Serial.println("---");
    Serial.println("");

    //
    delay(nDelay); 
  }
}

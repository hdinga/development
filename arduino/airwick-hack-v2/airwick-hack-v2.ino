const int pinDefault = 10;

long int nSec = 1000; //1sec
long int nMin = nSec*60; //1min

long int nDelay = nMin*60; //delay between burst sessions: 60mins
long int nInterval = nMin*5; //burst interval 5mins
long int nDuration = nMin; //burst length: 1 mins

int nCounter = 0; //counter per burst
int maxCount = 1000; //session

// setup
void setup() {
  pinMode(pinDefault, OUTPUT); //initialize pin as output.
  Serial.begin(9600);
  Serial.println("Initialize Serial Monitor");
}

// the loop function runs over and over again forever
void loop() {

  if (nCounter < maxCount) {
    nCounter++;
    digitalWrite(pinDefault, HIGH); //ON
    //TXLED1; //TX LED macro to turn LED ON (DEBUGGING

    //trace output
    Serial.write("nCounter: ");
    Serial.println(nCounter);
    Serial.write("DELAY: ");
    Serial.println(nDuration);
    Serial.println("---");
    Serial.println("");

    //burst duration
    delay(nDuration); 

    //switch off
    digitalWrite(pinDefault, LOW); //OFF
    //TXLED0; //TX LED is not tied to a normally controlled pin so a macro is needed, turn LED OFF
    delay(nInterval); //interval between bursts
  } else {
    nCounter=0;

    //trace output
    Serial.println("nCounter: RESET");
    Serial.write("COOLDOWN: ");
    Serial.println(nDelay);
    Serial.println("---");
    Serial.println("");

    //
    delay(nDelay); //burst session delay
  }
}

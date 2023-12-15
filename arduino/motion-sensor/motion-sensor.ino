#define SensorPin 3
#define LedPin 6


// the setup function runs once when you press reset or power the board
void setup() {
  // 
  pinMode(SensorPin, INPUT);
  pinMode(LedPin, OUTPUT);
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {
  int sensorValue = digitalRead(SensorPin);

  if(sensorValue == HIGH) {
    digitalWrite(LedPin, HIGH);
    Serial.println("Motion Detected!!!");
  }else {
    digitalWrite(LedPin, LOW);
  }
}

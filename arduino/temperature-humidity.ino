#include <dht.h>

dht DHT;

#define DHT11_PIN 7

void setup(){
  Serial.begin(9600);
}

void loop()
{
  int chk = DHT.read11(DHT11_PIN);
  int ctemp = DHT.temperature;
  int ftemp = ((ctemp * 9) + 3) / 5 + 32;
  int ftempDisplay = ftemp + " *F";
  Serial.write("Temperature = ");
  Serial.print(ftemp);
  Serial.println(" *F");
  
  Serial.print("Current Humidity = ");
  Serial.println(DHT.humidity);
  delay(60000);
}

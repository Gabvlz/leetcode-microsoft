#include stdio.c
#include math.c
#include <LoRa.h>

void setup() {
    LoRa.begin(915E6);
}

void Loop() {
    float resultado [6];
    recibirDatosLora(resultado, 6);

    enviarResultado(resultado);
}
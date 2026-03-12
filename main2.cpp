#include "MicroBit.h"

MicroBit uBit;

int power = 1023;
int reduction = 0;
int max_power = 1023;
int degrees = 0;

int button() {

    power -= 100;

    if (power < 20) {
        power = max_power;
        reduction = 0;
    }

    return power;
}

void onButtonA(MicroBitEvent) {

    uBit.io.P0.setAnalogValue(max_power);
}

void onButtonB(MicroBitEvent) {

    reduction++;

    power = button();

    uBit.io.P0.setAnalogValue(power);

    uBit.serial.printf("power: %d\n", power);
    uBit.serial.printf("reduction: %d\n", reduction);
}

int main() {

    uBit.init();

    uBit.serial.baud(115200);

    uBit.io.P0.setAnalogPeriodUs(20000); // bom para ESC

    uBit.messageBus.listen(
        MICROBIT_ID_BUTTON_A,
        MICROBIT_BUTTON_EVT_CLICK,
        onButtonA
    );

    uBit.messageBus.listen(
        MICROBIT_ID_BUTTON_B,
        MICROBIT_BUTTON_EVT_CLICK,
        onButtonB
    );

    if (!uBit.compass.isCalibrated()) {
        uBit.compass.calibrate();
    }

    while (true) {

        int ax = uBit.accelerometer.getX();
        int ay = uBit.accelerometer.getY();
        int az = uBit.accelerometer.getZ();

        uBit.serial.printf("Z: %d\n", az);

        int anterior = uBit.compass.heading();

        uBit.sleep(50);

        int atual = uBit.compass.heading();

        int diferenca = atual - anterior;

        if (diferenca > 10) {
            uBit.serial.printf("correcao necessaria\n");
        }

        degrees = uBit.compass.heading();

        uBit.display.clear();

        if (degrees >= 135 && degrees < 225) {

            for (int i = 0; i < 5; i++)
                uBit.display.image.setPixelValue(i, 2, 255);

            uBit.display.image.setPixelValue(0, 1, 255);
            uBit.display.image.setPixelValue(0, 3, 255);

        }
        else if ((degrees < 45 && degrees >= 0) || (degrees > 315)) {

            for (int i = 0; i < 5; i++)
                uBit.display.image.setPixelValue(i, 2, 255);

            uBit.display.image.setPixelValue(4, 1, 255);
            uBit.display.image.setPixelValue(4, 3, 255);

        }
        else if (degrees > 225 && degrees < 315) {

            for (int i = 0; i < 5; i++)
                uBit.display.image.setPixelValue(2, i, 255);

            uBit.display.image.setPixelValue(1, 4, 255);
            uBit.display.image.setPixelValue(3, 4, 255);

        }
        else if (degrees > 45 && degrees < 135) {

            for (int i = 0; i < 5; i++)
                uBit.display.image.setPixelValue(2, i, 255);

            uBit.display.image.setPixelValue(1, 0, 255);
            uBit.display.image.setPixelValue(3, 0, 255);

        }

        uBit.sleep(10);
    }
}

/**
 * Shield Input Ports 
 */
enum ebInputPorts {
    //% block="Entrada 1"
    ebiInput1 = 0,
    //% block="Entrada 2"
    ebiInput2 = 1,
    //% block="Entrada 3"
    ebiInput3 = 2,
    //% block="Entrada A"
    ebiInputA = 3,
    //% block="Entrada B"
    ebiInputB = 4,
    //% block="Entrada C"
    ebiInputC = 5
}

/**
 * Shield Output Ports 
 */
enum ebOutputPorts {
    //% block="Saída 1"
    eboOutput1 = 0,
    //% block="Saída 2"
    eboOutput2 = 1,
    //% block="Saída 3"
    eboOutput3 = 2,
    //% block="Saída A"
    eboOutputA = 3,
    //% block="Saída B"
    eboOutputB = 4,
    //% block="Saída C"
    eboOutputC = 5
}

/**
 * Shield Block Available Output Ports 
 */
enum ebBlockOutputPorts {
    //% block="Saída 1"
    ebbOutput1 = 0,
    //% block="Saída 2"
    ebbOutput2 = 1,
    //% block="Saída 3"
    ebbOutput3 = 2,
}

/**
 * EletroBlocks Block
 */

//% color="#AA278D" weight=100 icon="\uf1b2" block="EletroBlocks"
//% groups=['Blocos', 'Funções']
namespace eletroblocks {

    //% blockId="eletroblocks_setDigitalOutput" block="gravação digital na %port para %outputValue"
    //% outputValue.min=0 outputValue.max=1
    //% weight=97
    export function setDigitalOutput(port: ebOutputPorts, outputValue: number): void {
        let pin: DigitalPin;

        switch (port) {
            case ebOutputPorts.eboOutput1: {
                pin = DigitalPin.P13;
                break;
            }
            case ebOutputPorts.eboOutput2: {
                pin = DigitalPin.P14;
                break;
            }
            case ebOutputPorts.eboOutput3: {
                pin = DigitalPin.P15;
                break;
            }
            case ebOutputPorts.eboOutputA: {
                pin = DigitalPin.P3;
                break;
            }
            case ebOutputPorts.eboOutputB: {
                pin = DigitalPin.P4;
                break;
            }
            case ebOutputPorts.eboOutputC: {
                pin = DigitalPin.P10;
                break;
            }
        }

        pins.digitalWritePin(pin, outputValue);
    }
    //% blockId="eletroblocks_setAnalogOutput" block="gravação analógica na %port para %outputValue"
    //% outputValue.min=0 outputValue.max=1023
    //% weight=98
    export function setAnalogOutput(port: ebOutputPorts, outputValue: number): void {
        let pin: AnalogPin;

        switch (port) {
            case ebOutputPorts.eboOutput1: {
                pin = AnalogPin.P13;
                break;
            }
            case ebOutputPorts.eboOutput2: {
                pin = AnalogPin.P14;
                break;
            }
            case ebOutputPorts.eboOutput3: {
                pin = AnalogPin.P15;
                break;
            }
            case ebOutputPorts.eboOutputA: {
                pin = AnalogPin.P3;
                break;
            }
            case ebOutputPorts.eboOutputB: {
                pin = AnalogPin.P4;
                break;
            }
            case ebOutputPorts.eboOutputC: {
                pin = AnalogPin.P10;
                break;
            }
        }

        pins.analogWritePin(pin, outputValue);
    }

    //% blockId="eletroblocks_setServoOutput" block="define servo na %port para %outputValue"
    //% outputValue.min=0 outputValue.max=180 outputValue.defl=90
    //% weight=96
    export function setServoOutput(port: ebBlockOutputPorts, outputValue: number): void {
        let pin: AnalogPin;

        switch (port) {
            case ebBlockOutputPorts.ebbOutput1: {
                pin = AnalogPin.P13;
                break;
            }
            case ebBlockOutputPorts.ebbOutput2: {
                pin = AnalogPin.P14;
                break;
            }
            case ebBlockOutputPorts.ebbOutput3: {
                pin = AnalogPin.P15;
                break;
            }
        }
        pins.servoWritePin(pin, outputValue);
    }

    //% blockId="eletroblocks_getDigitalInput" block="leitura digital na %port"
    //% weight=99
    export function getDigitalInput(port: ebInputPorts): number {
        let pin: DigitalPin;

        switch (port) {
            case ebInputPorts.ebiInput1: {
                pin = DigitalPin.P0;
                break;
            }
            case ebInputPorts.ebiInput2: {
                pin = DigitalPin.P1;
                break;
            }
            case ebInputPorts.ebiInput3: {
                pin = DigitalPin.P2;
                break;
            }
            case ebInputPorts.ebiInputA: {
                pin = DigitalPin.P0;
                break;
            }
            case ebInputPorts.ebiInputB: {
                pin = DigitalPin.P1;
                break;
            }
            case ebInputPorts.ebiInputC: {
                pin = DigitalPin.P2;
                break;
            }
        }

        return pins.digitalReadPin(pin);
    }

    //% blockId="eletroblocks_getAnalogInput" block="leitura analógica na %port"
    //% weight=100
    export function getAnalogInput(port: ebInputPorts): number {
        let pin: AnalogPin;

        switch (port) {
            case ebInputPorts.ebiInput1: {
                pin = AnalogPin.P0;
                break;
            }
            case ebInputPorts.ebiInput2: {
                pin = AnalogPin.P1;
                break;
            }
            case ebInputPorts.ebiInput3: {
                pin = AnalogPin.P2;
                break;
            }
            case ebInputPorts.ebiInputA: {
                pin = AnalogPin.P0;
                break;
            }
            case ebInputPorts.ebiInputB: {
                pin = AnalogPin.P1;
                break;
            }
            case ebInputPorts.ebiInputC: {
                pin = AnalogPin.P2;
                break;
            }
        }

        let sum = 0;

        for (let i = 0; i <= 1000; i++) {
            sum += pins.analogReadPin(pin);
        }

        return sum / 1000;
    }

    // //% blockId="eletroblocks_getInput" block="lê %bloco"
    // export function getInput(): number {
    //     let sum = 0;
    //     let avg = 0;

    //     for (let i = 0; i <= 200; i++) {
    //         sum += pins.analogReadPin(this._pin);
    //     }
    //     avg = sum / 200;

    //     return avg;
    // }
}
let potencia = 1023
let y = 0
let graus = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (true) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else if (false) {
        
    }
    
})
function button(a: any): number {
    
    
    potencia = potencia - 100
    if (potencia < 20) {
        potencia = 1023
        y = 0
    }
    
    return potencia
}

// #print(potencia)
// #print(y)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    y = y + 1
    potencia = button(y)
    pins.analogWritePin(AnalogPin.P0, potencia)
})
graus = input.compassHeading()
basic.forever(function forever() {
    let aceleracaoX = input.acceleration(Dimension.X)
    // #print(aceleracaoX)
    let aceleracaoY = input.acceleration(Dimension.Y)
    // #print(aceleracaoY)
    let aceleracaoZ = input.acceleration(Dimension.Z)
    console.log(aceleracaoZ)
    let anterior = input.compassHeading()
    basic.pause(50)
    let atual = input.compassHeading()
    let diferenca = atual - anterior
    if (diferenca > 10) {
        console.log("correcao necessaria")
    }
    
})
// #print(graus)
basic.forever(function on_forever() {
    let graus = input.compassHeading()
    if (graus >= 135 && graus < 225) {
        basic.clearScreen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(0, 1)
        led.plot(0, 3)
    } else if (graus < 45 && graus >= 0 || graus <= 360 && graus > 315) {
        basic.clearScreen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(4, 1)
        led.plot(4, 3)
    } else if (graus > 225 && graus < 315) {
        basic.clearScreen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(3, 4)
    } else if (graus < 135 && graus > 45) {
        basic.clearScreen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 0)
        led.plot(3, 0)
    }
    
})
console.log(graus)
let D = 0

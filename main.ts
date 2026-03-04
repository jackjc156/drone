let x = 1023
let y = 0
let z = 0
let m = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (true) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else if (false) {
        
    }
    
})
function button(a: any): number {
    
    
    x = x - 100
    if (x < 20) {
        x = 1023
        y = 0
    }
    
    return x
}

// #print(x)
// #print(y)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    y = y + 1
    x = button(y)
    pins.analogWritePin(AnalogPin.P0, x)
})
z = input.acceleration(Dimension.X)
console.log(z)
m = input.compassHeading()
basic.forever(function forever() {
    let anterior = input.compassHeading()
    basic.pause(50)
    let atual = input.compassHeading()
    let diferenca = atual - anterior
    if (diferenca > 2) {
        console.log("correcao necessaria")
    }
    
})
basic.forever(function on_forever() {
    let m = input.compassHeading()
    if (m >= 135 && m < 225) {
        basic.clearScreen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(0, 1)
        led.plot(0, 3)
    } else if (m < 45 && m >= 0 || m <= 360 && m > 315) {
        basic.clearScreen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(4, 1)
        led.plot(4, 3)
    } else if (m > 225 && m < 315) {
        basic.clearScreen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(3, 4)
    } else if (m < 135 && m > 45) {
        basic.clearScreen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 0)
        led.plot(3, 0)
    }
    
    console.log(m)
})
console.log(m)
let D = 0

potencia = 1023
y = 0

graus = 0
def on_button_pressed_a():
    if True:
        pins.analog_write_pin(AnalogPin.P0, 1023)
        
       
    elif False:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def button(a: any):
        global potencia
        global y
        potencia = potencia - 100
        if potencia < 20:
            potencia = 1023
            y = 0
        return potencia
def on_button_pressed_b():
    global y
    global potencia
    y = y + 1
    potencia = button(y)
    pins.analog_write_pin(AnalogPin.P0, potencia)
    ##print(potencia)
    ##print(y)
    
input.on_button_pressed(Button.B, on_button_pressed_b)

graus = input.compass_heading()


def forever():
    aceleracaoX = input.acceleration(Dimension.X)
    ##print(aceleracaoX)
    aceleracaoY = input.acceleration(Dimension.Y)
    ##print(aceleracaoY)
    aceleracaoZ = input.acceleration(Dimension.Z)
    print(aceleracaoZ)


    anterior = input.compass_heading()
    
    basic.pause(50)
    atual = input.compass_heading()
        
    diferenca = atual - anterior
    if diferenca > 10:
        print("correcao necessaria")

basic.forever(forever)

def on_forever():
    graus = input.compass_heading()
    
    if graus >= 135 and graus < 225:
        basic.clear_screen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(0, 1)
        led.plot(0, 3)
    elif (graus < 45 and graus >= 0) or (graus <= 360 and graus > 315) :
        basic.clear_screen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(4, 1)
        led.plot(4, 3)
    elif graus > 225 and graus < 315:
        basic.clear_screen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(3, 4)
    elif graus < 135 and graus > 45:
        basic.clear_screen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 0)
        led.plot(3, 0)
    
    ##print(graus)
basic.forever(on_forever)


print(graus)
D = 0


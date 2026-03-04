x = 1023
y = 0
z = 0
m = 0
def on_button_pressed_a():
    if True:
        pins.analog_write_pin(AnalogPin.P0, 1023)
        
       
    elif False:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def button(a: any):
        global x
        global y
        x = x - 100
        if x < 20:
            x = 1023
            y = 0
        return x
def on_button_pressed_b():
    global y
    global x
    y = y + 1
    x = button(y)
    pins.analog_write_pin(AnalogPin.P0, x)
    ##print(x)
    ##print(y)
    
input.on_button_pressed(Button.B, on_button_pressed_b)
z = input.acceleration(Dimension.X)
print(z)
m = input.compass_heading()


def forever():
    anterior = input.compass_heading()
    
    basic.pause(50)
    atual = input.compass_heading()
        
    diferenca = atual - anterior
    if diferenca > 2:
        print("correcao necessaria")

basic.forever(forever)

def on_forever():
    m = input.compass_heading()
    
    


    if m >= 135 and m < 225:
        basic.clear_screen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(0, 1)
        led.plot(0, 3)
    elif (m < 45 and m >= 0) or (m <= 360 and m > 315) :
        basic.clear_screen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(4, 1)
        led.plot(4, 3)
    elif m > 225 and m < 315:
        basic.clear_screen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(3, 4)
    elif m < 135 and m > 45:
        basic.clear_screen()
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(1, 0)
        led.plot(3, 0)
    
    print(m)
basic.forever(on_forever)


print(m)
D = 0


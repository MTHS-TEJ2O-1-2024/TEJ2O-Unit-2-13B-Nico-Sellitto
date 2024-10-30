/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program lights up neopixels to a number
*/

// setup
let count = 0
let neopixelStrip: neopixel.Strip = null
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// lights up an amount of neopixels based on the number
input.onButtonPressed(Button.A, function() {
    count = 4
    while (count > 0) {
        basic.pause(500)
        
        if (count = 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
            basic.showNumber(4)
        }

        if (count = 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.showNumber(3)
        }

        if (count = 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.showNumber(2)
        }

        if (count = 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.showNumber(1)
        }

        if (count = -1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.showNumber(0)
        }
        neopixelStrip.show()
        basic.pause(500)
        count = count - 1
    }

    basic.showIcon(IconNames.Happy)
    
})

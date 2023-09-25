basic.forever(function () {
    serial.writeValue("Température", input.temperature())
    basic.pause(500)
})

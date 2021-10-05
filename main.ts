let cm = 0
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    cm = pins.map(
    pins.pulseIn(DigitalPin.P1, PulseValue.High),
    0,
    46473,
    2,
    1000
    )
    basic.showNumber(cm)
})

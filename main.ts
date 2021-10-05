let cm = 0
basic.forever(function () {
    basic.showNumber(cm)
})
basic.forever(function () {
    cm = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.pause(100)
})
basic.forever(function () {
    if (cm < 10) {
        music.playTone(262, 200)
    } else if (cm >= 10 && cm < 30) {
        music.playTone(262, 400)
    } else if (cm >= 31 && cm < 70) {
        music.playTone(262, 700)
    } else {
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
    }
})

let i = 0
basic.showIcon(IconNames.Fabulous)
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i > 4 && i <= 20) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        basic.pause(5000)
    } else {
        neZha.stopMotor(neZha.MotorList.M1)
    }
})

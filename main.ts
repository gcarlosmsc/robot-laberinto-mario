basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 0)
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14) < 10) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        basic.pause(1500)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(1500)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    }
})

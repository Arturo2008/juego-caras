function iniciar () {
    if (randint(1, 5) == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (randint(1, 5) == 2) {
        basic.showIcon(IconNames.Yes)
    }
    if (randint(1, 5) == 3) {
        basic.showIcon(IconNames.No)
    }
    if (randint(1, 5) == 4) {
        basic.showIcon(IconNames.Sad)
    }
    if (randint(1, 5) == 5) {
        basic.showIcon(IconNames.Skull)
    }
    if (randint(1, 5) == 6) {
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let elegir_icono = 1

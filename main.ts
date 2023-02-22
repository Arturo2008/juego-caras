input.onButtonPressed(Button.A, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            puntos_a += 1
            if (puntos_a == 10) {
                basic.showString("A: has ganado")
                music.playMelody("C D C F C A C C5 ", 1000)
            }
        } else if (num_icono == 0) {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntos_a > 0) {
                puntos_a += -1
            }
        }
    }
})
function partida_nueva () {
    juego_detenido = false
    puntos_a = 0
    puntos_b = 0
    pulsado = false
}
input.onButtonPressed(Button.AB, function () {
    partida_nueva()
})
input.onButtonPressed(Button.B, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            puntos_b += 1
        } else if (num_icono == 0) {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntos_b > 0) {
                puntos_b += -1
            }
        }
    }
})
function cambia_icono () {
    icono = randint(0, 9)
    emogis[icono].showImage(0)
    basic.pause(200)
}
let icono = 0
let puntos_b = 0
let juego_detenido = false
let puntos_a = 0
let num_icono = 0
let pulsado = false
let emogis: Image[] = []
emogis = [
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.No),
images.iconImage(IconNames.House),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Umbrella),
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Ghost)
]
basic.forever(function () {
    if (!(juego_detenido)) {
        cambia_icono()
    }
})

/*localização do navio*/
let location1 = 3
let location2 = 4
let location3 = 5

/*palpite do usuario
let palpite = prompt('Atire ! Insira um valor de 0 a 6:')
*/

//numero de acertos
let acertos = 0

//numero de palpites
let palpites = 0

//para definir se o navio afundou
let afundou = false

while (afundou == false) {
    let palpite = prompt('Preparar, Apontar, Atirar !!! (Insira um valor de 0 a 6)')
    if (palpite < 0 || palpite > 6) {
        alert('Verifique os valores, e tente novamente')
    } else {
        palpites = palpites + 1;
        if (palpite == location1 || palpite == location2 || palpite ==location3 ) {
            acertos = acertos + 1
            alert('Acertou !')
            if (acertos == 3) {
                afundou == true
                alert ('Navio inimigo afundado.')
            }
        }
    }
}

var stats = `Você deu ${palpites} tiros para derrubar o navio. A sua precisão foi ${3/palpites}`
alert(stats)

function wow () {
    opcio_usuari = game.askForNumber("Prem 1 per convertir de C a F, prem 2 per convertir de F a C", 1)
    return opcio_usuari
}
function fahrenheit_a_centigrados (temp_c: number) {
    return (temp_c - 32) * 5 / 9
}
function centigrados_a_fahrenheit (temp_f: number) {
    return temp_f * 9 / 5 + 32
}
function calcular (opcion2: number) {
    if (opcion2 == 1) {
        temperatura = game.askForNumber("Introdueix la temperatura en Centígrads:")
        resultado = centigrados_a_fahrenheit(temperatura)
        game.showLongText("" + temperatura + " °C són " + ("" + resultado) + " °F", DialogLayout.Top)
    } else if (opcion2 == 2) {
        temperatura = game.askForNumber("Introdueix la temperatura en Fahrenheit:")
        resultado = fahrenheit_a_centigrados(temperatura)
        game.showLongText("" + temperatura + " °F són " + ("" + resultado) + " °C", DialogLayout.Top)
    } else {
        game.showLongText("Opció no vàlida", DialogLayout.Bottom)
    }
}
let resultado = 0
let temperatura = 0
let opcio_usuari = 0
scene.setBackgroundImage(img`
    ffffcccebddddbbbbddddbeeccccceeeececceecffcdecffcffccbeeeeeeeeeecceeeccccccccfffffffffffffffffffffcccccceeecceecccfffffffffffffcccecececcceeccceecccfffffffffff
    ffffffcccebddddddddddbeecceeceeeceefeecfffccdccfcccccbbeeeceeccecceeeeeeeccccffffffffffffffffffcfcccccccccccceeccccfcfcfcfcffffcccceececcceeeeeeeccccffffffffff
    fffffffffccebbddddddbeeccceeeeeeeeeeecfffecfcdbcccccffceeeeeeeeeceeeeeeececccccccfcffffffffffffccccccceeeceeeeecccccccccccccccccccceeeeeeeeeeeeeecccccfffffffff
    fffffffffffcceebddddececccceeceeeeeeccffecffffbdcccffcccebeeeeeeecebeeeeccccccccccccffffffffffcccfccccccceeeeeecccccccccccccccccceeeeeeeccceeeeeecccccfffffffff
    fffffffffffffcceebbbeccccceceeeeeeeccfcccffffffcbbcffceeeeeeeeeeeecceececccccccccccccccffffffccccccccceceeeeeeeeccccccccccccccccceeeeeeeeeeecceeeccccccfcffffff
    fffffffffffffffccceeeccccecceeeeebcfffcefffffffffcbecfeeeeeeeeeeebecccceeecccccccccccccccfccccccccccccceeeeeeccceecccccccccccccceeeeceeeeeeeeeeecccccccccffffff
    fffffffffffffffffffceccfceeecceecbcfccbffffffffffffcbceeeebbeeeeeeeccceeceeccccccccccccfccccccccccccceeeeeeeeeeeeeeecccccccccccceeeeeeeeeeeeeceeecccccccfffcfff
    ffffffffffffffffffffffcccceeeeecccbccecfffffffffffffcceeeeeeeeeeecceeeceeceeccccccccccccccccccccccccceceeeeeeeeecccccccccccccccceeeeeeeeeeeeeeeeeeccccccccccccc
    fffffffffffffffffffffcccccceeececccbeffffffffcffffffcceeeeeeeeceeeeceecceeeeecccccccccccccfccccccceecceeebeeeceecccceecccceeeceeeeeeeeeeeecceeeeecccccccccccccc
    ffffffffffffffffffffcccccccccceecccbcfffffffffffffffccceeeeeeeeeeeeeeeeceeececcccccccccccccccccceceecceeeeeeeeccceecceeeeeceeeeeeeeeeeeccccceeeceeccceccccccccc
    cfffffffffffffffffffcccccecccccccccecccccccffffffffcfceeeeeeeeeeeeceeeeeceeceeecccccccccccccccccceceeeeeeceececeeceeeeecceeceeeeeeeeeeeccccceeeeeeeeecccccccccc
    cccfffffffffffffffffcccccceceeecccccfcccccfffffffffcccceebeeeeecceeeeeeeceeeececccccccceeeccccceeeceeeeeeeceeeeeeceeecceeeeeeeccceeeeeeeceeceeeeecceeeccccccccc
    cccffcfffffffffffffccccccccccccccccfffbcccffffffffccccceeeeceeceeeeeeeeeeeeeeeeeeeeceeccceeccceceeeceeceeeeeeeeeeceeeceeeceeeeeeeeeeeeeeeeceeeecceeeeeeeeeccccc
    eccccccffffffffffffccccccceececcccfffffbefffffffffcccceeeeeeeeeeeeeeceeeeeeeeccceeeceecceeceeeeeeceeeeccceeeececeeeeeeeeeeeceeeeeeceeceeeceeeeeeeececeecccccccc
    becccccccccfffffffccccccccceeeecccfffffcdcffffffffccccceeeeeeeeeeeeeeeeeceecceeeeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeceeeeeeeeeeeccccc
    1eeccccccccccfcfffccccccceceecccccffffffccfffffcccccceeeeeeeeeeeeeeeeeceeeeeeeeeeeeeceeceeceeeeeebceeeeeeeeeeeeeeeeeeeeeeecceeeeceeeceeeceeeeeeeeeeeeeeeecccccc
    ddecccccccccfccfcccccccceeeeccccccffffffffffcccfccccceeeeeeeeeeeeeeceeeceeeeeeeeeecececceeeeeeeeceeeeeeeeeeeeeeeeeeeeeeececeeeeeeeeecceecceeccceeeeeeceeeeecece
    dddeeeccccccccccfcccccccccccccccccffffffffffccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceecceeeeeeeceee
    dddbeeeeccccccccccccccceececccccccffffffffcccccecceeeceeeeeeeeeeebeeeeeeebeceeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebeebeeeeeeeeeeeeeeeebeeeeeeeeeeeeecccccceeeecee
    bbddbeeeeccccccccccccceeeecccceccccccfccfcccccceeeeeeeeeeeeeeebeebeebeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeecccc
    bbdd1beeeeecccccccceeeceeeeeeceeeeccccccccceeeeeeeeeeeebeeebbeeeebeeeeeeeeeeeeebbeeeebbeeeeeeeeeeeeeebeeebbeebbbbeeeebeeebbeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeec
    dbddd1eecccccccccceceececceeeeeeeeeccecceeeeeeeeeeeeeeeeeeeeebeeeebeebbeebeeeeeeebeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeebbeeeeebeeeeebeeeeeebeeeeeeeeeeeeeeeecccccee
    dbdddbbcccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbebeebebbeebebbeeebebebeebeeeeeebbbeeeeeeeeeeeeeeeeebeeebbeeebbeeeeeeeeeeeebeeecceeeeceeeccceeee
    dddbeeeccccccccccceececeeeeeeeeeeeeeeeeeeeeeeeebeeeeeebebbeebeeeebbbeebbbeeebbbbbbbbbebbbbbbebbbbbbbebbbebbbbbbbbbebbbbbbbebbbbeebbbbeeeeeeeeeeeeeeeeeceeeeeeee
    ddbecccccccccccccccceeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbbbeeeecceeeeeeeeeceeeeee
    beccffcccccccccceeeeceeeeeeeebbd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dbbbbeeeeeeeeeeeeeeeceeeec
    eccfffcccccccececeeeeeeeeebb11111111111111111111111dddd1111d1111111111111111111d11111dd111d1ddddd1dd11111111ddd11d1111111111111111111111dbbbeebeeeeeeeeeeeeeeee
    cffffccccccceceeeceeeeeebd111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111dbbeeeeeeeeeeeeeeeece
    fffffcfccccccceeceeeeeeb11111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccccccccccbbdd11111bbbeeeeeeeeeeecceee
    ffffffccccccececceeeeed11111111444444444444444444444444444444444444444444444444444f6666666666666666666666666666666666666cccdddc99999bbbcd1111dbeebeeeeeecccccee
    ffffccccccceceeeceeebd1111111444444444444e4444444444444444444444444dde444dd4444444f666666666666666666666666666666666666cd111111cbb669999bbb1111bbebeeeeeceeeeec
    fffccfccceeeeeeeeebbd1111111444444444d4ed5e44e444444444444444444444dddeeddd4444444f66666666666666666666666666666666666bd1111111111d6666999dcd111beebeeeeceeeeee
    fffcccccccecceeeeebd11111114444444444eee44eeeb444444444d444444444444ddbe4d44444444f6666666666666666666666666666666666cd111111111111b66666699bb111dbeeeeeeeeeeee
    fffcccccceecceeeeb111111111444444444ee4555544e444444444d4444444444444ddee444444444f6666666666666666666cc6666666666666cddddddd1dddddc666666699bb111bbeeeeeeeeeee
    fccccccccceceeeeed11111114444444444e4555555554ed4444d44444bdddb4444445dd4444444444f66666666666666666cd11db666666666666ccccccccccccc66666666669bb111bebbeceeeeee
    fccccccccccceeeeb11111144444444444ee55555545554f444444444ed1111b444444444444444444f66666666666666666d11111b666666666666666666666666666666666669bb111beeeeeeeeee
    fccccccccccceceb111111144444444444f455ddddd5555ee4444444b1111111b44444444444444444f6666666666666666bd11111dddb6666666666666666666666666666666666bd11dbeeeecceee
    ccccccccccccceed11111444444444444bc555ddddd55554e4444444b1111111dbb444444444444444f666666666666666cb111111111dc6666666666666666666666666666666666cd11beeeeeeece
    fcccccccccccceb111114444444444444ee555dddddd555445444eee1111111111dd44444444444444f666666666666661111111111111c66666666666666666666666666666666669b11dbebebeeee
    cccccccccccceed111144444444444444ee555dddddd5554c4444d1111111111111d44444444444444f6666666666666d1111111111111166666666666666666666666666666666669bd11beeeeeeee
    fccccccccccccd1111444444444444444e4455dddddd5544b444b11111111111111de4444444444444f666666666666cd1111111111111dc66666666666666666666666666666666669cd11beecccce
    ccccccccccccc111114444444444444d5e4e445555555544e444eddddddddddddddde4444444444444f666666666666ce333333333333bc666666666666666666666666666666666669bb11beeeeeee
    ccccccccccccc11114444444444444444eeee44444444efe4444eeeeeeeeeeeeeeeee4444444444444f8888888888888ffffffffffffff88888666688888888888666666666666666669bd1deeeeecc
    ccccccccccccd111444bdde44bd444444eeee22222222efee22222eeeeeeeeeeeeee2222222222222ef88888888888888888888888888888888888888888888888888666666666666666cdd1beeeeee
    ccccccccccccddde44b1111dd11444444eeeefeeeefeefeeee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeef888888888888888888888888888888888888888888888888888666666666666666bdddeeeeee
    fcccccccccccddb44e11111111114444442eeefeeeffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef888888888888888888888888888888888888888888888888888666666666666669cdddececce
    fccccccccccbddb4edd1111111114444442eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef888888888888888888888888888888888888888888888888888866666666666666cdddeeeccc
    fccccccccccbddd4e3dd1111111dd4444442eeeeccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff888888666666666666666bdddbeeeee
    fccccccccccbddd4e3dddd111ddddb444442efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88cc6666666666666666dddbeecee
    cccccccccccbddb44e33dddddddddb44444efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc6666666666666666dddbeecec
    fccccccccccbddb44eb33ddddd33be4dd44ffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccfccccccccccccccccccccccccccccccccccccccccccccccffccc6666666666666666dddbccecc
    cccccccccccbddb444e333333333e4dddd4feee222effe44efe444444444bfbebbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7cfccc6666666666666666dddccceee
    cccccccccccbddb4444eb33333be44dddd4fe244eee44eeeeefeeeeeeeebddfedeeeeecccccbddddddfddddbcccccccccccbddddbcccccccbddddccccccccccbbbcccb6666666666666666dddcceecc
    cfcccccffccbddb44444eeeeeee444ddddbc24efe44dddd4effffffffffeddbddcffffffffcdcdddddfddddffffffffffffcddddbfffffffcddddffffffffffcdbccbbb666666668666666dddbeccee
    fccccccccccbddb444444444444444ddddbe44e44dddddddcfeeeeeeeeefeddddbeeeeeeebbdbdddddfddddccccccccccccfcddcffcccccccddbfccccccccccfbbccbb6668fc8cc6666666dddbccecc
    fcccccccccfbddb444444444444444ddddbeecb4ddddddddff44444444ecfdddddddddddddddddddddfdddddddddddddddcffddcffdddddffbdbfcddddddddcfcbbcbb66c66cfc66666666dddcccccc
    cccccccffcfbddb444444444444444ddddbfdddffdddddddff44444444ecfdddddddddddddddddddddfdddddddddddddddcffddcffdddddffbdbfcddddddddcfcbbcbb666666f666666666dddcccccc
    fccccfcccffbddb44444444e444444ddddbeddddbcdbddddff44444444effddbcbddddddddddddddddfdddddddddddddddcffddcffdddddffbdbfcddddddddcfcdbcb66666666666666666dddcccccc
    fccccccccccbddb4444444c1e44444ddddbedddcdccbddddff44444444effddefcddddddddddddddddfdddddddddddddddcffddcffdddddfcbdbffddddddddcfcdbc666666666666666666dddcccccc
    cccccccfcccbddb444444e11de4444ddddbeddcbddbdddddfc44444444effddefeddddddcfcdddddddfddddddcccccccccfffddcfcdddddbbddbfcddddddddcfcbbc666666666666666666dddcccccc
    cccccccfcffbddb44444ed111be444ddddbedfdddddddddde4444444444eddddedddddddefcdddddddfdddddcfffffffffffddddcdddddddddddcbdddddddddcbbbc66666666666cc66666dddbcccce
    cfccccccfffbddb4444edddd11b444ddddbedcbdddddddddfc44444444effddefeddddddffdbcdddddfdddddcffffffffffffddcfcdddddccddbccddddddddcfcbbc6666666666b1b66666dddcccccc
    fcccccccccfbddb444ebddddd1db44ddddbcddcddddbbdddff44444444effddcfcdd444effe4ecbdddfdddbdccddddddddcffddcffdddddffbdbfcddddddddcfcbbc666666666b111c6666dddcccccc
    fcccfccffffbbdb444eddddddddd44ddddbcddbffdccfbddff44444444effddcfcd4444efcbeedddddfdddcbeeddddddddcffddcffdddddffbdbfcddddddddcfcbbc66666666c1111dc666dddcccccc
    cccccfccfffbddb444edddbbbddd44ddddbcbdbbbbbbbdddff44444444effddecb444444ffbeedddddfddccceeddddddddcffddcffdddddffbdbfcbdddddddcfcbbc6666666cd11dddc666dddcccccc
    ccccccccfffbddb444eddbeebddd44ddddbcbddddddddddbff44444444cffddddd4444444fddddddddfddccceebbddddddcffddcffdddddffbdbfcbdddbbbbcfcbbc6666666d111dddc666dddcccccc
    ccccfcccfffbddb444edddbbdddd44ddddbcbddddddddddbfc44444444cffddd444444444fddddddddfddccceeebddbbbbcffddcffbdbbbffbdcfcbbbbbbbbcffcbc66666cd11ddbddc666dddcccccc
    ccccccccfcfbddb444eddddddddd44ddddbcbddddddddddbfcee2eeeeecffddd44eeeeeeefddddbcbdfdbccfceebcccccccffddcffcccccfcbbbffcccccccccfeebc66666bd1dddbddc666dddbccccc
    fccfcccffffbbdb444eddddddddd44ddddbcbbbbdddbbbbbefef2ffffffcbbd44fffffffffbbbecccdfdbccfccecffffffccbbbbffffffffcbbbccffffffffffcebc6666bdddbbdbddc666dddcccccc
    cccccffffcfbbdb444eddddddddd44ddddbcbbbbbbbbbbbbbecf2ffffffebb44bfffffffffbbcecccbfbbcff8ceefffffffcbbbbbfffffffbbbbbfffffffffefcecc666cdddbebdbddc666dddcccccc
    cccccfffcffbbdb444edddbbbddd44ddddbcbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbfbeceffcbfbcccfcceecbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcefcecc666cbddbebdbddc666dddcccccc
    cccfcffccffbddb444eddbeebddd44ddddbfffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc666ffeddbddbddc666dddccfccc
    cccccffcfffbbdb444edddbbdddd44ddddbfffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6668fcbddddbddc666dddcccccc
    ccccfffffffbbdb444ebdddddddd44ddddbff88cbbbbbcbbbbbbfbbbbbbbbbbbbbbbbbbbbcbbbbbbfbfbcbbbbbbcbbbbbbcbbbbbbbbbbbbbbcbbbbbbbcbbbbbcc8fc66668fcbdddbddc666dddcccccc
    cccfffccfffbbdb444ebdddddddbe4ddddbfcc8cbcccbcbbccccfbbcccdcccbccccbccccbcbbcccbfbfbcbccccbcbbcccbcbbcccbbcccbbccfbbcccbbcbbbbbb88fc666668fcddddddc666dddcccccc
    cccffcfffffbddb444ecbdddddbf44ddddbccc8cbbccccbbbccbfbccccccccbccccbcccbbcbfccbbfbfbcbbcccbcbccccbcbbccccbccccbcccbfccbbbcbbbbbbf8fc9966688fcdddddc666dddcccccc
    ccfcccfcfffbddb444efcbdddbcc44d1111ccc8cbbbbccbbbbbbfbcbbbccbbbbbbcbcbbbbcbfbbbbfbfbcbbbbcbcbccbbbcbbbbccbcbbcbbbcbfbbbbbcbcbcbcf8fb9999668ffcdddc8666dddcccccc
    cccccccffcfbbdb4444efcddbcf444d1111bcc8cbbcccccbbbbbfbcccbccccbbbbcbcccbbcbcccbbfbfbcbbcccbcbcccbbcbbbcccbccccbbbcbcccbbbcbbbcbc88c999996668fcbdbf8666dddcccccc
    fccfccfffffbddb4444effebefe4445d1111bcccbcbbbccbbbbbfbccbbbbbcbbbbcbbcbbbcbccccbfbfbcbbcccbcbcccbbcbbccccbccccbbbcbccbccbcbbcbbcfcd1999666668fccfc6666dddccccff
    ccffccfffffbbdb44444effcfe44444d1111dbccbcbbbccbbbbbfbcbbbbbbcbbbbcbbbbbbcbfbbcbfbfbcbbbbfbcbccbbbcbbbbccbcbccbbbcbfbbccbcbbbbbcbd119996666668fff86666dddcccccc
    cccccfccfffbbdb444444effe4444444ceeddddbecccbccbbbbcfbccccbcccbccccbbbbbbcbfcccbfbfbcbccccbcbccccbfbbccccbccccbcbcbfccccbcccccceffffb66666666888866666dddcccccc
    ffccfcffcffbbdb4444444ee44444fcddddd999ddddfcccbbcbcfbccffbcccbccccbbbbbbcbbcccbfbfbcbcfccbcbccccbcbbffcbbccfbccccbccccccfdddb4eeeeeccf666666688666666dddccfccc
    ccccccfffffbbdb444444444444ecb999999999bccddbfcbbbbcfbbbbbbbbbbbbbbbbbbbbfbbbbbbfbfbcbbbbbbcbbcbbbccbbbbbbbbbbbbbfbbbbcccbbeeeeeeeeeeeecc6666666666666dddcccccc
    cccccffffffbbdb444444eee4efb6666999999999999ddcd1111111111111111111111111111111111111111111111111111111111111111111111cddeeeeeeeeeeeeeeeef86cc86666666dddcccccc
    fcfccfcffffbbdb4444ebbbbec666666999dddbbbbb1dddcdddddddddd5d5555dd555ddd5555555dddc9999999999999999999999999999999999cd4eeeeeeeeeeeeeeeeeeccdddc666666dddcccccc
    ccccfffffffbbdb444ebdb66db6666669ddbcfffffffcddbe444444444444444444444444444444444f6966666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeecccedc66666dddcccccc
    cccfccfffffbbdb444edcffc6d666669dcfffffceeeeebbdbe454444444ceece4f44ec4ec4ecce4444f666c66c6c6ccc6fcc8c8c6c8666666668b4eeeeeeeeeeeeeeeeeeeeeefffedc6666dddcccccc
    ccfccffffffbbdb444bb88886666669dcfffcceeeeeee4eddee45444444c4dce4f44ee4ec4eeee4444f666868c6ccccc6f6866c86c666666666bdeeeeeeeeeeeeeeeeeeeeeecccfcb86666dddcccccc
    fcfffffffffbbdb444bb888c666669dfffceeeeeeeeeeee8ddc44444444fbece4fe4ee4eceeccc4444f66686886c68c66f688cc868c6666666cdd44eeeeeeeeeeeeceeeeeecff6fcb86666dddcccccc
    fccfcffcfffbbdb444cd888666666bffceeeeeeeeeeee4ec6dbe444444444444444444444444444444f6666666666666666666666666666666b44eeeeeeeeceeeeefeeeeeecfc6cec66666dddcccccc
    ccccccfffffbbdb444cbcbb66666dffceeeeeeceeeeeeeef661e444444444444444444444444444444f666666666666666666666666666666cdeeeee4eccceeeccffeeeeeeffccc8666666dddcffccc
    ccfcccfffffbbdb444efcc866666cfceeeeecfeeeecfeefff6dbe44444444eeeeeeeeeeeeeeeeeeeeefc88888888888888888888866666668b4eceeecfffcfffffe4cefeeefffcc6666666dddcccccc
    cccccffffffbbdb4444ef886666dffcccccffccccffccffff89be444444efffffffffffffffffffffffffffffffffffffffffffff86666668beceeecfddddddee3ddeeceecfceec8666666dddcccccc
    cccffcfffffbbdb4444e8886666dfcffffffffffffcfeffff86de444444ffeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccf8666668ecccfffeddddddddbdd4fceeffddddf666666dddcccfcc
    ccfffffffffbbdb4444e8888666cffffffcffffee3ffcbffff6be44444ecebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcf866666ceffffbffdddddddcffbdeceefbddddc666666dddcccccc
    cfcccffffffbbdb4444ec888666cfce4efcee43dddffcdffff6be44444ebddddddddddddddddddddddddddddddddddddddddddddddf666666cffffbffcddddddeffbd3eeefbddd3ef66666dddccccfc
    ccfffcfffffbbdb4444e8888666cfddddfcdddddddffbdffff8be44444eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf666666fffffbffeddddddeffbdbeeefbdd34cf66666dddccfccc
    fcccfcfffffbbdb4444e8888666cedddddbdddddddfcddcfff6b444444eeebbbbbbbbbbbbbbbbbebbbeeeebbbbbbbbbbbbbbbbbbbcc666666cfffcdbcbdddddddefddeeeece4444cf66666dddcccccc
    fcfccffffffbbdb44444f888686b4ddddddddddddddb43bff8db4444444feeebebeeeeecccccccccccccccccccccccccbcbbbbcccf6666666cccfd44ddddddddddd44ceceefe44eff66666dddcccccc
    ccfccffffffbbdb44444f888886dedddddddbdddbddd44bffcde44444444efffffffffffffffffffffffffffffffffffffffffffc966666666cfcd44dddbddbdddd44eecceffecfff66666dddcccccc
    cccffcfffffbbdb44444f888886deddddddddbbbddddddbfcbbe4444444444444444442eeeeeeeeeeef88888888888888888866666666666668fcdddddddebbdddddddefcefffffff66666dddcfccfc
    ccccccfffffbbdb444444f888886deddddddddddddddddcfcdc4444444444444444444444444444444f66866688666666666666666666666666befddddddddddddddddffeeffffffc66666dddccfccc
    ccccccfffffbbdb444444c8888886bdddddddddddddddcfcde44444444444444444444444444444444f6666666666666666666666666666666cecfcbddddddddddddbeccecfffffc666666dddcffccf
    cfccfcfffffbbdb444444ef8888886dddddddddddddcffcdee4444444444eeeeeeeeee444444444444f666666666666ccccccccc66666666fcecfffffcdddddddddefecccffffff6666666dddcccccc
    cccffcfffffcbdb4444444ef888888666dddddddddfffbdce444444444bd1111111111d444444ebbbbbbbbc866666d1111111111dd666666cffffffffffeee444efeefffffffffc6666666dddcccccc
    ccccccfffffcbbb44444444eff8888666dddfdddddfbbbce444444444b1111111111111de444edd11111111c6666d1111111111111b666666666ffffffc44e444eeefffffffffff6666666dddcccccc
    ccfcccfffffcbbb44444444ec8fc8866661dcf4ffcdccfe444444444ed11111dd1111111b444ebbbbbbbbbbb866bd111111dd111111c66666668cffffcedde444e4eeeeeecfffff6666666bddccfcfc
    fcccccfffffcbbb44444444c8888c8666886bfefbbc8cbc444444444bddddddbbdddddddd444feeeecccccccc66cddddddbbbddddddb6666666ccfceeceddee44ed3eeeeeefffff6666666dddcfcfcc
    cccccffffffcbbb44444444c88cbbc6888886cfcc66f6bc444444444ebdddddbeebdddddd444efcccccccc8f666cddddddeebddddddb6666666fffdddeeddbe4ebddfebbceeffff6666666ddbcccccc
    cccccffffffcebb4444444c88ebddbc6666666cb66fcbbbe44444444cbbbbbbbebbddddbe4444effffffffc6666cbbbbbbbeebdddbbc6666666ffbdddbfddde2eddeedddefeffff6666666ddbcffccc
    cccccffffffcebb4444444f88e3dddc6c86666b668cddddbe4444444fcebbbbeebbbbbbef444444444f66666666fccbbbbeeebbbbbcf666666bdfdddd3fbddeebbecdddd4feffcc666666bdbbcccfcf
    ccfcffffcffcebb4444444f88e3dddd6dc8866668fbdddddbe444444efcceeeceeeeeecfe444444444f666666668fcccccccccccccf666666cddfdddd3fbddebfbdbdddd4feefbdb66666bbbccfcccc
    ccccffffffffcebe444444f88e4ddddc6bdbc6668f4dddddbbe444444effcccffffffffc4444444444f666666668ffffffffffffff8666666bdcfdddd3ffbdeedddedddd4feefe3dc6666dbbccfcccc
    ccccccfcffffcebd444444f88e4ddddf86dde8688f4dddddbee444444eefffffffffffee4444444444f6666666688ffffffffffff88666666b4cfdddd3fefbcdddbedddd4feefc4dc666bbbccfcfccc
    bcffffffffffceeb444444f88f43dddf8886bf888f4ddddfeee4444442eeeeeeeeeeeee44444444444f666666668888ffffff888886666666cbefeddd4feecfbdeeeddd4eceefee4c666bbbcccccccf
    ceffffcfffffcceb4444eeff8ce43ddf8888cff88fe3ddbffc444444442eeeeeeeeeee444444444444f666666668888888888888886666666fcccf3d3efeeefceeeedd34ceeefeeec666bbccfffcccc
    bfcfccfffffffceeb444fffff8c244eff88fffffffc44efffcb4444444422eeeeeee24444444444444f6666666668888888888888866666666ffffeeeffffffffffe434efecfffff866bbbccccccccc
    fffffffffffffccebb44eecffffceefffffffcccfffccfceee44444444444444444444444444444444f6666666666668886688886666666666668cffffff8c8fffffeeeffffffff6666bbcccfcccccc
    ffffffffffffffcceb444444e4efffee4444444444eeee444444444444444444444444444444444444f666666666666666666666666666666666666866666666668cfffcc668666666bbcccfffccccc
    ffccccffffffffcceeb44444444444444444444444444444444e44444444444dd44444444444444444f66666666666666666dd6666666666686666666666666666666666666666666bbbcfffcfccccc
    ccccccfffffffffccebb444444444e4ec4e4ecee4e44444444bb444444444dd11b4444444444444444f666666666666666c111d6666666666b66666666666c6c8686686666666666bbbccffffcfcccc
    ccccccfcffffffffccebb4444444e44f44c4ee4fee4444444ed1deeebddbcddddde444444444444444f666666666666666bddddcc11dcccb11b666666cfcc66f66f6f6666666666bbbccffffffffccc
    fffffcffffffffffcccebb444444e44fe4c4ee4f4ef444444ebddeeeebbbfbbbbbe444444444444444f666666666666666cbbbbccbbbccccbdb8666668cccc6f86f66c86666666bbbccfffffffccfcc
    fffffffffffffffffcccebb44444ec4cf4ffefec4fc444444eeeecccccccffceece444444444444444f666666666666666cccccffcccccccccc666666868cf6ff6868f8666666bbbccffffffcfccccc
    ffcfffffffffffffffcccebb4444444444444444444444444effce44eeeeefffff4444444444444444f666666666666666fffff88f88666fff86666666666666666666666666bbcccffffffffffcccc
    ffcfffffffffffffffcccceeb444444444444444444444444effe44444444effce4444444444444444f6666666666666668fff8668866668ff866666666666666666666666bbbcccfffffffffffcffc
    ccfcfffffffffffffffcccceebb44444444444444444444444e2e44444444eeee44444444444444444f66666666666666888888666666668888666666666666666666666bbbbcccfffffffcfcffcccc
    ccccfcfffffffffffffffcccceebb444444444444444444444444444444442ee444444444444444444f666666666666666888866666666688866666666666666666666bbbbcccfffffffffcfccfccfc
    ccccffffffffffffffffffcfcceeebb444444444444444444444444444444444444444444444444444f666666666666666688666666666666666666666666666666bbbbbccccfffffffffffcfcccccc
    cccffffffffffffffffffffccccceeebbbb44444444444444444444444444444444444444444444444c6666666666666666666666666666666666666666666bbbbbbbcccccfffffffffffffffcccccc
    ccfffffffffffffffffffffffcccccceeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffcccc
    fffcfcffffffffffffffffffffcccfcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffcfcc
    ccfcccfffffffffffffffffffffffccccccccccceeeecccccccceecceeceeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffccff
    cccfcffffffffffffffffffffffffffccccfffffffffffffcfffcffffffccccffcccccfccccccccccfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccc
    cfffffcffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffccccfc
    fcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccc
    ccfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfccfc
    cccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccfccc
    fccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfc
    cccfcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcc
    fcfcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccccfcff
    cfcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccccfc
    cccfccccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfcfccc
    fcccfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccc
    ccfcccfcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccccc
    cccfcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffccccc
    cccfcfcfccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccfccccc
    cccccbdbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfccc
    ccccbdddcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffccccc
    cccddddddcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccccccccccc
    cb1dddbdddfccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfccccfc
    ddddddbbbddfccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccfccfffcccccccc
    bddddcedbddbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccccccfccfcccff
    bb1ddebdddddcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcfffccfccccfcccccc
    bbdddddddddddcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfccccfccccccccfce
    ebbd11ddddddddcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccbccfcccccccfccccccc
    ccbbddddddddbdbfcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccdccffccccccccccccfc
    fcbbbdddddbbbbdbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcffffffffffffcffcffcedccfffccccccccccccf
    ffcbbbdddddbbbbdecccbcffffcffffcffffffcffffffffffffffffffffffffffffcffffffffffffffffffffffcfffffffffffcfffffffffced1dddbffffffffffcffcfffccbdccffffcccfccccfcff
    fffcbbb1dddecbbbdccccffffcfffffffffcffffcffffffffffffffffccfffffcffcfcfccffffcfffffcffcfcfcffcfcfcfcfffffcffcffccddbbbbbfffcfffccfcfcfcfceb11dcccfccccccfcccccf
    `)
calcular(wow())

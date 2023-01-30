function Updatescores () {
    OLED.clear()
    OLED.writeStringNewLine("player 1" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + Rounds)
}
let Ties = 0
let P2 = 0
let P1 = 0
let Rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("\"ready for a game\"")
Rounds = 0
P1 = 0
P2 = 0
Ties = 0
basic.pause(2000)
OLED.clear()
Updatescores()

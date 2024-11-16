radio.onReceivedString(function (receivedString) {
    basic.showString("Have you beaten " + receivedString + "?")
})
radio.setGroup(5643555)
if (input.buttonIsPressed(Button.A)) {
    radio.sendString("Rock")
} else if (input.buttonIsPressed(Button.B)) {
    radio.sendString("Paper")
} else if (input.buttonIsPressed(Button.AB)) {
    radio.sendString("Scissors")
}

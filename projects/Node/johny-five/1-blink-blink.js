const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  let led = new five.Led(13);
  led.strobe(1000);
});

var five = require("johnny-five"),
    board, lcd;

board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    // ED1 Pin #     6    8   2    3   4   5
    pins: [ 6, 8, 2, 3, 4, 5 ],

    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  lcd.on("ready", function() {
    // Tell the LCD you will use the heart character
    lcd.useChar("heart");

    // Line 1: Hi rmurphey & hgstrp!
    lcd.clear().print("NICTA ED1");
    lcd.cursor(1, 0);

    // Line 2: I <3 johnny-five
    lcd.print(" :heart: johnny-five");
  });

  this.repl.inject({
    lcd: lcd
  });

});


// @markdown
// [16 x 2 LCD White on Blue](http://www.hacktronics.com/LCDs/16-x-2-LCD-White-on-Blue/flypage.tpl.html)
// [20 x 4 LCD White on Blue](http://www.hacktronics.com/LCDs/20-x-4-LCD-White-on-Blue/flypage.tpl.html)
// @markdown

class ShinyLamp {
  constructor(colour) {
    this.colour = colour;
    this.brightness = 0;
    this.wishes = 0;
    this.message = ''
  }

  shineBright() {
    this.brightness += 3;
  }

  rubLamp() {
    this.brightness++;
    this.wishes = 7;
    this.message = 'Finally, it was getting cramped in there. Thanks for waking me, you now have 7 wishes'
  }

  makeWish() {
    if (this.wishes > 0) {
      this.wishes--;
    }
  }
}

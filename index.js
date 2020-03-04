class ShinyLamp {
  constructor(colour) {
    this.colour = colour;
    this.brightness = 0;
    this.wishes = 0;
  }

  shineBright() {
    this.brightness += 3;
  }

  rubLamp() {
    this.brightness++;
    this.wishes = 3;
  }

  makeWish() {
    if (this.wishes > 0) {
      this.wishes--;
    }
  }
}

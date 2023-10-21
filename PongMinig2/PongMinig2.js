/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PongMinig2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PongMinig2/costumes/costume1.svg", {
        x: 55.41666500000005,
        y: 36.75
      }),
      new Costume("Button3-a", "./PongMinig2/costumes/Button3-a.svg", {
        x: 45.43100000000004,
        y: 28.180000000000007
      })
    ];

    this.sounds = [new Sound("pop", "./PongMinig2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenthisspriteclicked() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.broadcast("launch pong 2 player");
    this.broadcast("game on");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.size = 100;
    while (true) {
      if (this.stage.costumeNumber === 6) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.costumeNumber === 7) {
        while (!this.keyPressed("any")) {
          yield;
        }
        this.stage.costume = "pong 2.2";
      }
      yield;
    }
  }
}

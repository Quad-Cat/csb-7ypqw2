/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PongMinig extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PongMinig/costumes/costume1.svg", {
        x: 55.41665499999999,
        y: 36.75
      }),
      new Costume("Button3-a", "./PongMinig/costumes/Button3-a.svg", {
        x: 45.43100000000001,
        y: 28.180000000000007
      })
    ];

    this.sounds = [new Sound("pop", "./PongMinig/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.broadcast("launch pong");
    this.broadcast("game on");
  }

  *whenGreenFlagClicked() {
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
}

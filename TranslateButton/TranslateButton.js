/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TranslateButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./TranslateButton/costumes/costume1.svg", {
        x: 59.21500699632122,
        y: 46.49495885629972
      }),
      new Costume("costume2", "./TranslateButton/costumes/costume2.svg", {
        x: 67.65196411764711,
        y: 99.83823529411765
      })
    ];

    this.sounds = [new Sound("pop", "./TranslateButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-19, -152);
    yield* this.wait(0.09);
    while (true) {
      this.moveAhead(108);
      this.moveBehind(1);
      yield;
    }
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.goto(-19, -152);
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("start_translate");
  }

  *whenthisspriteclicked2() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

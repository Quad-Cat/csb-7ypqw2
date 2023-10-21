/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PowerOff extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PowerOff/costumes/costume1.svg", {
        x: 9.221640000000008,
        y: 24.026365
      }),
      new Costume("costume2", "./PowerOff/costumes/costume2.svg", {
        x: 46.75,
        y: 66.30351586706706
      })
    ];

    this.sounds = [new Sound("pop", "./PowerOff/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-215, -167);
    this.visible = false;
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Sutting down", 1);
    this.stage.costume = "backdrop1";
    /* TODO: Implement stop all */ null;
  }
}

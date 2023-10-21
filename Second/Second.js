/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Second extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Second/costumes/costume1.svg", {
        x: 19.30000000000004,
        y: 19.100000000000023
      })
    ];

    this.sounds = [new Sound("pop", "./Second/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.moveAhead(100);
      this.stage.vars.second = new Date().getSeconds();
      this.direction = 6 * new Date().getSeconds();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.goto(147, -153);
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.moveAhead(100);
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hour extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Hour/costumes/costume1.svg", {
        x: 19.30000000000001,
        y: 19.099999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Hour/sounds/pop.wav")];

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
      this.stage.vars.hour = new Date().getHours();
      this.direction = 30 * new Date().getHours() + new Date().getMinutes() / 2;
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

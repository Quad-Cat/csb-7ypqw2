/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HelpButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HelpButton/costumes/costume1.svg", {
        x: 24.999995000000013,
        y: 16.258015
      }),
      new Costume("costume2", "./HelpButton/costumes/costume2.svg", {
        x: 52.18943248211494,
        y: 16.258015
      })
    ];

    this.sounds = [new Sound("pop", "./HelpButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      )
    ];
  }

  *whenthisspriteclicked() {
    this.stage.costume = "help";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(36, 167);
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
    yield* this.wait(0.001);
    this.moveAhead(9999999);
  }
}

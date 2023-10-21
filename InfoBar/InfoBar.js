/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class InfoBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("info bar", "./InfoBar/costumes/info bar.svg", {
        x: 239.50001,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./InfoBar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
  }
}

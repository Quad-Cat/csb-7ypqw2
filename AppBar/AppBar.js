/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AppBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AppBar/costumes/costume1.svg", {
        x: 313.202435,
        y: 23.668350000000004
      }),
      new Costume("costume2", "./AppBar/costumes/costume2.svg", {
        x: 179,
        y: 21
      }),
      new Costume("costume3", "./AppBar/costumes/costume3.svg", {
        x: 179,
        y: 20.599999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./AppBar/sounds/pop.wav")];

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
    this.goto(0, -147);
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
  }
}

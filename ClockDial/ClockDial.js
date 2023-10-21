/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ClockDial extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ClockDial/costumes/costume1.svg", {
        x: 130.5235849056602,
        y: 133.58119811320753
      })
    ];

    this.sounds = [new Sound("pop", "./ClockDial/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.moveAhead(100);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

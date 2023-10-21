/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerRightGoal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("line", "./PlayerRightGoal/costumes/line.svg", {
        x: 239,
        y: 7
      })
    ];

    this.sounds = [new Sound("pop", "./PlayerRightGoal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 7 || this.stage.costumeNumber === 8) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}

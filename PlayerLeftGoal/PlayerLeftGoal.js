/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerLeftGoal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("line", "./PlayerLeftGoal/costumes/line.svg", {
        x: 239,
        y: 7
      })
    ];

    this.sounds = [new Sound("pop", "./PlayerLeftGoal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 7 || this.stage.costumeNumber === 8) {
        this.stage.watchers.leftScore.visible = true;
        this.stage.watchers.rightScore.visible = true;
        this.visible = true;
      } else {
        this.stage.watchers.rightScore.visible = false;
        this.stage.watchers.leftScore.visible = false;
        this.visible = false;
      }
      yield;
    }
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ClearButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ClearButton/costumes/costume1.svg", {
        x: 36.5,
        y: 18.25
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "draw open animation finished" },
        this.whenIReceiveDrawOpenAnimationFinished
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(202, -111);
  }

  *whenIReceiveDrawOpenAnimationFinished() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("clear drawings");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.costumeNumber === 12 || this.stage.costumeNumber === 13) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScreenShot20200702At13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-07-02 at 13",
        "./ScreenShot20200702At13/costumes/Screen Shot 2020-07-02 at 13.png",
        { x: 480, y: 230 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "translate open animation finished" },
        this.whenIReceiveTranslateOpenAnimationFinished
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 10) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveTranslateOpenAnimationFinished() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }
}

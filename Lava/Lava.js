/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lava extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("line2", "./Lava/costumes/line2.svg", {
        x: 255.863875,
        y: 49.01859496648396
      }),
      new Costume("line", "./Lava/costumes/line.svg", {
        x: 254.87980227399234,
        y: 4.269810000000007
      })
    ];

    this.sounds = [new Sound("pop", "./Lava/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong" },
        this.whenIReceiveLaunchPong
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pong game over" },
        this.whenIReceivePongGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenIReceiveLaunchPong() {
    this.visible = true;
    this.moveAhead(455456465546546);
  }

  *whenIReceivePongGameOver() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.costumeNumber === 9) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.moveBehind();
      yield;
    }
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./Paddle/costumes/paddle.svg", { x: 44, y: 7 })
    ];

    this.sounds = [new Sound("boing", "./Paddle/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLaunchPong() {
    this.visible = true;
    this.stage.costume = "pong 1p";
    this.stage.watchers.pongScore.visible = true;
    while (true) {
      this.x = this.mouse.x;
      yield;
    }
  }

  *whenIReceivePongGameOver() {
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
}

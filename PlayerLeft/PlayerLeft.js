/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerLeft extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./PlayerLeft/costumes/paddle.svg", {
        x: 44.30706199876508,
        y: 6.730061998765052
      })
    ];

    this.sounds = [new Sound("boing", "./PlayerLeft/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft),
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong 2 player" },
        this.whenIReceiveLaunchPong2Player
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong 2 player" },
        this.whenIReceiveLaunchPong2Player2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveLeft() {
    if (
      (this.keyPressed("w") &&
        this.touching(this.sprites["Beachball"].andClones())) ||
      (this.touching(this.sprites["Beachball"].andClones()) &&
        this.keyPressed("s"))
    ) {
      this.stage.vars.ballSpeed += this.random(-5, 10);
      if (!(this.compare(0, this.stage.vars.ballSpeed) < 0)) {
        this.stage.vars.ballSpeed = 2;
      }
    }
  }

  *whenIReceiveLaunchPong2Player() {
    this.stage.vars.speedLeft = 0;
    while (true) {
      if (this.keyPressed("w")) {
        yield* this.glide(0.3, this.x, this.y + 40);
        this.broadcast("speed left");
      }
      if (this.keyPressed("s")) {
        yield* this.glide(0.3, this.x, this.y - 40);
        this.broadcast("speed left");
      }
      yield;
    }
  }

  *whenIReceiveLaunchPong2Player2() {
    this.goto(-200, 0);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
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

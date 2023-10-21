/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerRight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./PlayerRight/costumes/paddle.svg", {
        x: 44.30706199876505,
        y: 6.730061998765052
      })
    ];

    this.sounds = [new Sound("boing", "./PlayerRight/sounds/boing.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "speed right" },
        this.whenIReceiveSpeedRight
      ),
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

  *whenIReceiveSpeedRight() {
    if (
      (this.keyPressed("up arrow") &&
        this.touching(this.sprites["Beachball"].andClones())) ||
      (this.touching(this.sprites["Beachball"].andClones()) &&
        this.keyPressed("down arrow"))
    ) {
      this.stage.vars.ballSpeed += 0.3;
    }
  }

  *whenIReceiveLaunchPong2Player() {
    this.stage.vars.speedRight = 0;
    while (true) {
      if (this.keyPressed("up arrow")) {
        yield* this.glide(0.3, this.x, this.y + 40);
        this.broadcast("speed right");
      }
      if (this.keyPressed("down arrow")) {
        yield* this.glide(0.3, this.x, this.y - 40);
        this.broadcast("speed right");
      }
      yield;
    }
  }

  *whenIReceiveLaunchPong2Player2() {
    this.goto(200, 0);
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

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SoccerBall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("soccer ball", "./SoccerBall/costumes/soccer ball.svg", {
        x: 23,
        y: 22
      })
    ];

    this.sounds = [
      new Sound(
        "basketball bounce",
        "./SoccerBall/sounds/basketball bounce.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong" },
        this.whenIReceiveLaunchPong
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pong game over" },
        this.whenIReceivePongGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenIReceiveLaunchPong() {
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Paddle"].y - this.y,
        this.sprites["Paddle"].x - this.x
      )
    );
    this.stage.vars.pongScore = 0;
    this.stage.vars.pong1timechangeOk = "true";
    while (true) {
      this.stage.vars.pongSteps = 10;
      this.move(this.toNumber(this.stage.vars.pongSteps));
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (
        this.touching(this.sprites["Paddle"].andClones()) ||
        this.touching(this.sprites["InfoBar"].andClones())
      ) {
        this.direction = 180 - this.direction;
      }
      if (this.touching(this.sprites["Lava"].andClones())) {
        this.broadcast("pong game over");
        this.stage.costume = "home";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.pong1timechangeOk = "false";
    this.stage.watchers.pongScore.visible = false;
    this.visible = false;
  }

  *whenIReceivePongGameOver() {
    this.stage.vars.pong1timechangeOk = "false";
    yield* this.wait(2);
    this.stage.watchers.pongScore.visible = false;
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
      if (this.toString(this.stage.vars.pong1timechangeOk) === "true") {
        yield* this.wait(1);
        this.stage.vars.pongScore++;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.moveAhead(94456645);
      yield;
    }
  }
}

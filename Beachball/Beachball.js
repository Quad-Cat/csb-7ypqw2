/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beachball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Ball-a", "./Beachball/costumes/Ball-a.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound(
        "Basketball Bounce",
        "./Beachball/sounds/Basketball Bounce.wav"
      ),
      new Sound("pop", "./Beachball/sounds/pop.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong 2 player" },
        this.whenIReceiveLaunchPong2Player
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pong game over" },
        this.whenIReceivePongGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "launch pong" },
        this.whenIReceiveLaunchPong
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *chooseDirection() {
    if (this.random(1, 2) === 1) {
      this.direction = this.random(-50, -140);
    } else {
      this.direction = this.random(50, 140);
    }
  }

  *ifTouchingSomethingBounce() {
    /* TODO: Implement motion_ifonedgebounce */ null;
    if (this.touching(this.sprites["PlayerLeft"].andClones())) {
      this.direction = 360 - this.direction;
    }
    if (this.touching(this.sprites["PlayerRight"].andClones())) {
      this.direction = 360 - this.direction;
    }
    if (
      this.touching(this.sprites["InfoBar"].andClones()) ||
      this.touching(this.sprites["AppBar"].andClones())
    ) {
      this.direction = 180 - this.direction;
    }
  }

  *whenIReceiveLaunchPong2Player() {
    this.stage.costume = "pong2.1";
    this.stage.vars.ballSpeed = 7;
    this.stage.vars.leftScore = 0;
    this.stage.vars.rightScore = 0;
    this.goto(0, 0);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (
      !(
        (this.stage.costumeNumber === 7 || this.stage.costumeNumber === 8) &&
        this.keyPressed("any")
      )
    ) {
      yield;
    }
    this.stage.costume = "pong 2.2";
    yield* this.chooseDirection();
    while (true) {
      while (
        !(
          this.touching(this.sprites["PlayerLeftGoal"].andClones()) ||
          this.touching(this.sprites["PlayerRightGoal"].andClones())
        )
      ) {
        this.move(this.toNumber(this.stage.vars.ballSpeed));
        yield* this.ifTouchingSomethingBounce();
        yield;
      }
      if (this.touching(this.sprites["PlayerRightGoal"].andClones())) {
        this.stage.vars.leftScore++;
      }
      if (this.touching(this.sprites["PlayerLeftGoal"].andClones())) {
        this.stage.vars.rightScore++;
      }
      this.goto(0, 0);
      this.stage.vars.ballSpeed = 10;
      yield* this.wait(2);
      yield* this.chooseDirection();
      yield;
    }
  }

  *whenIReceivePongGameOver() {
    this.visible = false;
  }

  *whenIReceiveLaunchPong() {
    this.visible = true;
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

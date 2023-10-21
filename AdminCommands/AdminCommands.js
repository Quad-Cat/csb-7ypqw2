/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AdminCommands extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AdminCommands/costumes/costume1.svg", {
        x: 44.970405,
        y: 35.84970999999999
      }),
      new Costume("costume2", "./AdminCommands/costumes/costume2.svg", {
        x: 57.90733462121045,
        y: 97.79789958932109
      })
    ];

    this.sounds = [new Sound("pop", "./AdminCommands/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide admin" },
        this.whenIReceiveHideAdmin
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.admin2 = 0;
    this.stage.watchers.admin.visible = false;
    this.goto(90, -155);
    this.visible = false;
    yield* this.wait(0.1);
    while (true) {
      this.moveAhead(15516);
      yield;
    }
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("admin exit button");
    this.stage.watchers.admin.visible = true;
  }

  *whenIReceiveHideAdmin() {
    this.stage.watchers.admin.visible = false;
  }

  *whenthisspriteclicked2() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

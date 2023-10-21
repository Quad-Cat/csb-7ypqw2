/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ExitAppButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ExitAppButton/costumes/costume1.svg", {
        x: 50.78582499999999,
        y: 47.080600000000004
      })
    ];

    this.sounds = [new Sound("pop", "./ExitAppButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "admin open animation finished" },
        this.whenIReceiveAdminOpenAnimationFinished
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "restart" },
        this.whenIReceiveRestart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLoginComplete() {
    this.goto(-222, 139);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.admin2) === 1 ||
        !(
          this.stage.costumeNumber === 1 ||
          this.stage.costumeNumber === 2 ||
            this.stage.costumeNumber === 3 ||
            this.stage.costumeNumber === 11
        )
      ) {
        this.visible = true;
        this.moveAhead(50065605156);
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.stage.costume = "home";
    this.broadcast("Hide admin");
    this.stage.vars.admin2 = 0;
  }

  *whenIReceiveAdminOpenAnimationFinished() {
    this.stage.vars.admin2 = 1;
    this.visible = true;
  }

  *whenIReceiveRestart() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.stage.costume = "home";
    this.broadcast("Hide admin");
    this.stage.vars.admin2 = 0;
  }
}

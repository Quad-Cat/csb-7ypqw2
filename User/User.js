/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class User extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./User/costumes/costume1.svg", {
        x: 23.900000000000006,
        y: 33.590909090909776
      })
    ];

    this.sounds = [new Sound("pop", "./User/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.user.visible = false;
    this.stage.vars.usernameCount = 1;
    this.stage.vars.user = "";
    if (!(this.toNumber(/* no username */ "") === 0)) {
      if (this.compare(7, /* no username */ "".length) < 0) {
        for (let i = 0; i < 5; i++) {
          this.stage.vars.user =
            this.toString(this.stage.vars.user) +
            this.letterOf(
              /* no username */ "",
              this.stage.vars.usernameCount - 1
            );
          this.stage.vars.usernameCount++;
          yield;
        }
        this.stage.vars.user = this.toString(this.stage.vars.user) + "...";
      } else {
        this.stage.vars.user = /* no username */ "";
      }
    } else {
      this.stage.vars.user = "Guest";
    }
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.goto(94, 160);
    this.stage.watchers.user.visible = true;
  }
}

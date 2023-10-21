/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NotifinationsMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./NotifinationsMenu/costumes/costume1.svg", {
        x: 11.700304999999986,
        y: 12
      }),
      new Costume("costume2", "./NotifinationsMenu/costumes/costume2.svg", {
        x: 11.700305810397651,
        y: 12.000000000000028
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.goto(223, 165);
    this.stage.watchers.user.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.activeNotifications = [];
    while (true) {
      if (this.arrayIncludes(this.stage.vars.activeNotifications, "active")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.toString(this.itemOf(this.stage.vars.activeNotifications, 1)) ===
      "active"
    ) {
      this.broadcast("toggle notifications");
    }
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

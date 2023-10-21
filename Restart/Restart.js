/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Restart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Restart/costumes/costume1.svg", {
        x: 21.499999999999943,
        y: 21.5
      }),
      new Costume("costume2", "./Restart/costumes/costume2.svg", {
        x: 79.75,
        y: 77.16780113503614
      })
    ];

    this.sounds = [new Sound("pop", "./Restart/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(212, -167);
    this.visible = false;
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("restarting", 1);
    this.stage.costume = "home";
    yield* this.broadcastAndWait("clear drawings");
    yield* this.broadcastAndWait("finder");
    yield* this.broadcastAndWait("Hide admin");
    this.stage.vars.activeNotifications = [];
    yield* this.broadcastAndWait("restart");
    this.broadcast("login complete");
    yield* this.sayAndWait("Done! :)", 1);
  }
}

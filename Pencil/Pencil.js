/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pencil extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pencil/costumes/costume1.svg", {
        x: 51.305283533260365,
        y: 51.305283533260365
      }),
      new Costume("costume2", "./Pencil/costumes/costume2.svg", {
        x: 64.13613000000001,
        y: 109.25093500000007
      })
    ];

    this.sounds = [new Sound("pop", "./Pencil/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(40, -152);
    this.visible = false;
    yield* this.wait(0.1);
    while (true) {
      this.moveAhead(3212);
      this.moveBehind(1);
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
    this.broadcast("draw");
    this.stage.costume = "drawback1";
  }

  *whenthisspriteclicked2() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

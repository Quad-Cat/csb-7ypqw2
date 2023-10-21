/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MiniGames extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Laptop", "./MiniGames/costumes/Laptop.svg", {
        x: 67.082785,
        y: 32.65471500000001
      }),
      new Costume("Laptop2", "./MiniGames/costumes/Laptop2.svg", {
        x: 83.68124580171613,
        y: 96.18414861043102
      })
    ];

    this.sounds = [new Sound("pop", "./MiniGames/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.goto(-70, -150);
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "Laptop2";
      } else {
        this.costume = "Laptop";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-70, -150);
    yield* this.wait(0.1);
    while (true) {
      this.moveAhead(10000);
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("minig");
  }

  *whenthisspriteclicked2() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

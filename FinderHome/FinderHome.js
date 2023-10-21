/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FinderHome extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./FinderHome/costumes/costume1.svg", {
        x: 288.5,
        y: 71
      }),
      new Costume("costume2", "./FinderHome/costumes/costume2.svg", {
        x: 288.5,
        y: 133.583335
      }),
      new Costume("costume3", "./FinderHome/costumes/costume3.svg", {
        x: 64.58963499999999,
        y: 57.20137662895927
      }),
      new Costume("costume5", "./FinderHome/costumes/costume5.svg", {
        x: 64.58962499999998,
        y: 55.757711470588106
      }),
      new Costume("costume4", "./FinderHome/costumes/costume4.svg", {
        x: 65.99999999999997,
        y: 56
      })
    ];

    this.sounds = [new Sound("pop", "./FinderHome/sounds/pop.wav")];

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
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.size = 35;
    this.visible = false;
    while (true) {
      this.moveAhead(10000);
      if (this.stage.costumeNumber === 3) {
        yield* this.wait(1);
        this.stage.watchers.pongScore.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.costume = "home";
    this.broadcast("Hide admin");
  }

  *whenthisspriteclicked2() {
    this.size -= 7;
    yield* this.wait(0.1);
    this.size += 7;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CornerLogo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CornerLogo/costumes/costume1.svg", {
        x: 20.154405301769543,
        y: 19.877695196331615
      }),
      new Costume("costume3", "./CornerLogo/costumes/costume3.svg", {
        x: 24.5,
        y: 19.87769499999999
      }),
      new Costume("costume2", "./CornerLogo/costumes/costume2.svg", {
        x: 20.154404999999997,
        y: 18.149197568218824
      })
    ];

    this.sounds = [new Sound("pop", "./CornerLogo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.costume = "about";
    this.stage.vars.infoViewed = "yes";
  }

  *whenGreenFlagClicked() {
    this.stage.vars.infoViewed = "no";
    this.visible = false;
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    this.goto(-220, 168);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.toString(this.stage.vars.infoViewed) === "no") {
          this.costume = "costume3";
        }
      } else {
        if (this.toString(this.stage.vars.infoViewed) === "no") {
          this.costume = "costume1";
        } else {
          this.costume = "costume2";
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked2() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
  }
}

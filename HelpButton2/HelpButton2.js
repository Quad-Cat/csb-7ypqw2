/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HelpButton2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("finder", "./HelpButton2/costumes/finder.svg", {
        x: 32.10839843750003,
        y: 11.25
      }),
      new Costume("minig", "./HelpButton2/costumes/minig.svg", {
        x: 32.16991999999999,
        y: 11.25
      }),
      new Costume("translate", "./HelpButton2/costumes/translate.svg", {
        x: 31.9375,
        y: 10.5
      }),
      new Costume("fundraw", "./HelpButton2/costumes/fundraw.svg", {
        x: 32.28511305771096,
        y: 10.688864999999993
      })
    ];

    this.sounds = [new Sound("pop", "./HelpButton2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "minig open animation finished" },
        this.whenIReceiveMinigOpenAnimationFinished
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finder" },
        this.whenIReceiveFinder
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-168, 168);
  }

  *whenIReceiveLoginComplete() {
    this.visible = true;
    yield* this.wait(0.001);
    this.moveAhead(56465489);
  }

  *whenIReceiveMinigOpenAnimationFinished() {
    this.costume = "minig";
  }

  *whenIReceiveLoginComplete2() {
    this.costume = "finder";
  }

  *whenIReceiveFinder() {
    this.costume = "finder";
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.stage.costumeNumber === 6 ||
        this.stage.costumeNumber === 7 ||
          this.stage.costumeNumber === 8 || this.stage.costumeNumber === 9
      ) {
        this.costume = "minig";
      } else {
        if (this.stage.costume.name === "translate") {
          this.costume = "translate";
        } else {
          if (
            this.stage.costumeNumber === 12 ||
            this.stage.costumeNumber === 13
          ) {
            this.costume = "fundraw";
          } else {
            this.costume = "finder";
          }
        }
      }
      yield;
    }
  }
}

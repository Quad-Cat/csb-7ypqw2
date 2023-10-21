/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Intro extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Intro/costumes/costume3.svg", {
        x: 401.9560438888888,
        y: 270.715948836085
      }),
      new Costume("costume2", "./Intro/costumes/costume2.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume4", "./Intro/costumes/costume4.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume5", "./Intro/costumes/costume5.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume6", "./Intro/costumes/costume6.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume7", "./Intro/costumes/costume7.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume8", "./Intro/costumes/costume8.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume9", "./Intro/costumes/costume9.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume10", "./Intro/costumes/costume10.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume11", "./Intro/costumes/costume11.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume12", "./Intro/costumes/costume12.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume13", "./Intro/costumes/costume13.svg", {
        x: 375.78977,
        y: 274.24893
      }),
      new Costume("costume14", "./Intro/costumes/costume14.svg", {
        x: 375.78977,
        y: 274.24893
      })
    ];

    this.sounds = [new Sound("pop", "./Intro/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro)
    ];
  }

  *whenIReceiveSetup() {
    this.visible = false;
    this.costume = "costume3";
    this.goto(0, 0);
    this.visible = true;
    this.effects.clear();
  }

  *whenIReceiveIntro() {
    for (let i = 0; i < 12; i++) {
      yield* this.wait(this.random(0.005, 0.01));
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
    this.broadcast("intro done - log in");
  }
}

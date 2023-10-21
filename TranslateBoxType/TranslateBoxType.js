/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TranslateBoxType extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./TranslateBoxType/costumes/costume1.svg", {
        x: 168.296875,
        y: 92
      })
    ];

    this.sounds = [new Sound("pop", "./TranslateBoxType/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "translate open animation finished" },
        this.whenIReceiveTranslateOpenAnimationFinished
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 10) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("Translate to...");
    this.stage.vars.language = this.answer;
    yield* this.askAndWait("Translate...");
    this.stage.vars.translation = this.answer;
    yield* this.broadcastAndWait("start_translate");
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveTranslateOpenAnimationFinished() {
    this.visible = true;
    yield* this.wait(0.1);
    this.moveAhead(104);
  }
}

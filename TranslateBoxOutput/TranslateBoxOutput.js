/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TranslateBoxOutput extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./TranslateBoxOutput/costumes/costume1.svg", {
        x: 75.86946910788387,
        y: 92
      })
    ];

    this.sounds = [new Sound("pop", "./TranslateBoxOutput/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "translate open animation finished" },
        this.whenIReceiveTranslateOpenAnimationFinished
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "translate open animation finished" },
        this.whenIReceiveTranslateOpenAnimationFinished2
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

  *whenIReceiveTranslateOpenAnimationFinished() {
    this.visible = true;
    yield* this.wait(0.1);
    this.moveAhead(102);
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveTranslateOpenAnimationFinished2() {
    yield* this.sayAndWait(
      /* TODO: Implement translate_getTranslate */ null,
      5
    );
  }
}

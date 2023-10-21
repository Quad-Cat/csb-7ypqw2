/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DrawAppPen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DrawAppPen/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "draw open animation finished" },
        this.whenIReceiveDrawOpenAnimationFinished
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clear drawings" },
        this.whenIReceiveClearDrawings
      )
    ];
  }

  *whenIReceiveDrawOpenAnimationFinished() {
    this.stage.watchers.penColor.visible = true;
    this.stage.watchers.penSize.visible = true;
    while (
      !!(this.stage.costumeNumber === 12 || this.stage.costumeNumber === 13)
    ) {
      if (this.mouse.down) {
        this.penDown = true;
        this.penColor.h = this.toNumber(this.stage.vars.penColor);
        this.penSize = this.toNumber(this.stage.vars.penSize);
        this.goto(this.mouse.x, this.mouse.y);
      } else {
        this.penDown = false;
        this.goto(this.mouse.x, this.mouse.y);
      }
      yield;
    }
    this.penDown = false;
    this.clearPen();
    this.stage.watchers.penColor.visible = false;
    this.stage.watchers.penSize.visible = false;
  }

  *whenGreenFlagClicked() {
    this.goto(this.sprites["Pencil"].x, this.sprites["Pencil"].y);
    this.stage.watchers.penColor.visible = false;
    this.stage.watchers.penSize.visible = false;
    this.clearPen();
  }

  *whenIReceiveClearDrawings() {
    this.clearPen();
  }
}

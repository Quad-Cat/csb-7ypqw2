/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WindowOpenAnimation extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./WindowOpenAnimation/costumes/costume1.svg", {
        x: 241.5,
        y: 156.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "admin exit button" },
        this.whenIReceiveAdminExitButton
      ),
      new Trigger(Trigger.BROADCAST, { name: "draw" }, this.whenIReceiveDraw),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start_translate" },
        this.whenIReceiveStartTranslate
      ),
      new Trigger(Trigger.BROADCAST, { name: "minig" }, this.whenIReceiveMinig),
      new Trigger(Trigger.BROADCAST, { name: "glide" }, this.whenIReceiveGlide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveAdminExitButton() {
    this.visible = true;
    this.size = 2;
    this.goto(this.sprites["AdminCommands"].x, this.sprites["AdminCommands"].y);
    this.broadcast("glide");
    while (!(this.size === 100 || this.compare(this.size, 100) > 0)) {
      this.size += 15;
      yield;
    }
    this.broadcast("admin open animation finished");
    this.visible = false;
  }

  *whenIReceiveDraw() {
    this.visible = true;
    this.size = 2;
    this.goto(this.sprites["DrawAppPen"].x, this.sprites["DrawAppPen"].y);
    this.broadcast("glide");
    while (!(this.size === 100 || this.compare(this.size, 100) > 0)) {
      this.size += 15;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.broadcast("draw open animation finished");
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveStartTranslate() {
    this.visible = true;
    this.size = 2;
    this.goto(
      this.sprites["TranslateButton"].x,
      this.sprites["TranslateButton"].y
    );
    this.broadcast("glide");
    while (!(this.size === 100 || this.compare(this.size, 100) > 0)) {
      this.size += 15;
      yield;
    }
    this.broadcast("translate open animation finished");
    this.visible = false;
  }

  *whenIReceiveMinig() {
    this.visible = true;
    this.size = 2;
    this.goto(this.sprites["MiniGames"].x, this.sprites["MiniGames"].y);
    this.broadcast("glide");
    while (!(this.size === 100 || this.compare(this.size, 100) > 0)) {
      this.size += 15;
      yield;
    }
    this.broadcast("minig open animation finished");
    this.visible = false;
  }

  *whenIReceiveGlide() {
    yield* this.glide(0.2, 0, 0);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

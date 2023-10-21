/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Notifications extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Notifications/costumes/1.svg", {
        x: 62.75,
        y: 21.81836500000003
      }),
      new Costume("2", "./Notifications/costumes/2.svg", {
        x: 62.75000000000003,
        y: 19.982663061224486
      }),
      new Costume("6", "./Notifications/costumes/6.svg", {
        x: 62.75,
        y: 21.818370000000016
      }),
      new Costume("4", "./Notifications/costumes/4.svg", {
        x: 62.75000000000003,
        y: 19.982653061224482
      }),
      new Costume("3", "./Notifications/costumes/3.svg", {
        x: 62.75000000000003,
        y: 19.982653061224482
      }),
      new Costume("5", "./Notifications/costumes/5.svg", {
        x: 62.75,
        y: 21.818375000000003
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "toggle notifications" },
        this.whenIReceiveToggleNotifications
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "login complete" },
        this.whenIReceiveLoginComplete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "notification triggers" },
        this.whenIReceiveNotificationTriggers
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "notification triggers" },
        this.whenIReceiveNotificationTriggers2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveToggleNotifications() {
    if (this.toString(this.stage.vars.showNotifications) === "true") {
      this.stage.vars.showNotifications = "false";
      yield* this.hideAnimation();
    } else {
      this.stage.vars.showNotifications = "true";
      this.stage.vars.notificationCount = 1;
      for (let i = 0; i < this.stage.vars.activeNotifications.length; i++) {
        if (
          this.toString(
            this.itemOf(
              this.stage.vars.activeNotifications,
              this.stage.vars.notificationCount - 1
            )
          ) === "active"
        ) {
          this.createClone();
          yield* this.wait(0.06);
        } else {
          this.stage.vars.notificationCount++;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.showNotifications = "false";
    this.stage.vars.NotificationsTotal = 2;
    this.goto(170, 130);
  }

  *hideAnimation() {
    this.x = 170;
    yield* this.glide(0.1, 280, this.y);
    this.visible = false;
    this.deleteThisClone();
  }

  *showAnimation() {
    this.x = 280;
    this.visible = true;
    yield* this.glide(0.1, 170, this.y);
  }

  *startAsClone() {
    this.costume = this.stage.vars.notificationCount;
    this.y = 130;
    if (this.toString(this.stage.vars.showNotifications) === "true") {
      this.stage.vars.showNotifications = "false";
    } else {
      this.stage.vars.showNotifications = "true";
    }
    if (this.toString(this.stage.vars.showNotifications) === "true") {
      yield* this.hideAnimation();
    } else {
      yield* this.resetStatusList();
      yield* this.showAnimation();
    }
  }

  *launchNotifications() {
    yield* this.resetStatusList();
    this.broadcast("notification triggers");
  }

  *whenIReceiveLoginComplete() {
    yield* this.launchNotifications();
  }

  *quickTipClickShowNotification() {
    yield* this.resetStatusList();
    this.stage.vars.activeNotifications.splice(0, 1);
    this.costume = 1;
    this.stage.vars.activeNotifications.splice(0, 0, "active");
    this.broadcast("toggle notifications");
  }

  *whenIReceiveRestart() {
    yield* this.hideAnimation();
  }

  *idleNotificationShow() {
    yield* this.hideAnimation();
    yield* this.resetStatusList();
    this.stage.vars.activeNotifications.splice(1, 1);
    this.costume = 2;
    this.stage.vars.activeNotifications.splice(1, 0, "active");
    yield* this.broadcastAndWait("toggle notifications");
  }

  *whenIReceiveNotificationTriggers() {
    yield* this.wait(5);
    yield* this.quickTipClickShowNotification();
  }

  *whenIReceiveNotificationTriggers2() {
    while (true) {
      this.stage.vars.mousepos =
        this.toString(this.mouse.x) + this.toString(this.mouse.y);
      yield* this.wait(3);
      if (
        this.compare(
          this.stage.vars.mousepos,
          this.toString(this.mouse.x) + this.toString(this.mouse.y)
        ) === 0
      ) {
        yield* this.wait(1);
        if (
          this.compare(
            this.stage.vars.mousepos,
            this.toString(this.mouse.x) + this.toString(this.mouse.y)
          ) === 0
        ) {
          yield* this.idleNotificationShow();
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.resetStatusList();
    yield* this.broadcastAndWait("toggle notifications");
    yield* this.hideAnimation();
  }

  *resetStatusList() {
    this.stage.vars.activeNotifications = [];
    for (
      let i = 0;
      i < this.toNumber(this.stage.vars.NotificationsTotal);
      i++
    ) {
      this.stage.vars.activeNotifications.push("inactive");
      yield;
    }
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 247.92452830188682,
        y: 181.08213096559365
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 247.92453,
        y: 181.08213
      }),
      new Costume("home", "./Stage/costumes/home.svg", {
        x: 249.19811320754715,
        y: 189.3396226415095
      }),
      new Costume("help", "./Stage/costumes/help.svg", {
        x: 234.89843750000003,
        y: 75.03633900000014
      }),
      new Costume("about", "./Stage/costumes/about.svg", {
        x: 230.0146877895928,
        y: 138.79851896153858
      }),
      new Costume("minig", "./Stage/costumes/minig.svg", {
        x: 249.198115,
        y: 189.339625
      }),
      new Costume("pong2.1", "./Stage/costumes/pong2.1.svg", {
        x: 255,
        y: 196
      }),
      new Costume("pong 2.2", "./Stage/costumes/pong 2.2.svg", {
        x: 255,
        y: 196
      }),
      new Costume("pong 1p", "./Stage/costumes/pong 1p.svg", {
        x: 372.4587259158805,
        y: -28.561321525157183
      }),
      new Costume("translate", "./Stage/costumes/translate.svg", {
        x: 259.1011056688597,
        y: 204.6710600586357
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 247.92452830188682,
        y: 181.08213096559365
      }),
      new Costume("drawback1", "./Stage/costumes/drawback1.svg", {
        x: 261.82969307017544,
        y: 201.75800716008771
      }),
      new Costume("drawback2", "./Stage/costumes/drawback2.svg", {
        x: 261.82969307017544,
        y: 201.7579971600877
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "intro done - log in" },
        this.whenIReceiveIntroDoneLogIn
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
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
        { name: "pong game over" },
        this.whenIReceivePongGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "translate open animation finished" },
        this.whenIReceiveTranslateOpenAnimationFinished
      )
    ];

    this.audioEffects.volume = 0;

    this.vars.pongSteps = 10;
    this.vars.pongScore = 5;
    this.vars.speedRight = 0;
    this.vars.ballSpeed = 10;
    this.vars.speedLeft = 0;
    this.vars.leftScore = 1;
    this.vars.rightScore = 0;
    this.vars.pong1timechangeOk = "false";
    this.vars.second = 9;
    this.vars.minute = 7;
    this.vars.hour = 19;
    this.vars.translation = 0;
    this.vars.language = 0;
    this.vars.user = "quadcat";
    this.vars.penColor = 89;
    this.vars.penSize = 46;
    this.vars.admin2 = 0;
    this.vars.infoViewed = "no";
    this.vars.usernameCount = 1;
    this.vars.showNotifications = "false";
    this.vars.notificationCount = 3;
    this.vars.mousepos = 116128;
    this.vars.NotificationsTotal = 2;
    this.vars.admin = [];
    this.vars.activeNotifications = ["inactive", "inactive"];

    this.watchers.pongScore = new Watcher({
      label: "Pong Score",
      style: "normal",
      visible: false,
      value: () => this.vars.pongScore,
      x: 245,
      y: 175
    });
    this.watchers.leftScore = new Watcher({
      label: "left score",
      style: "large",
      visible: false,
      value: () => this.vars.leftScore,
      x: 240,
      y: -156
    });
    this.watchers.rightScore = new Watcher({
      label: "right score",
      style: "large",
      visible: false,
      value: () => this.vars.rightScore,
      x: 670,
      y: -156
    });
    this.watchers.user = new Watcher({
      label: "User:",
      style: "normal",
      visible: true,
      value: () => this.vars.user,
      x: 585,
      y: 178
    });
    this.watchers.penColor = new Watcher({
      label: "Pen color",
      style: "slider",
      visible: false,
      value: () => this.vars.penColor,
      setValue: value => {
        this.vars.penColor = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 582,
      y: 145
    });
    this.watchers.penSize = new Watcher({
      label: "Pen size",
      style: "slider",
      visible: false,
      value: () => this.vars.penSize,
      setValue: value => {
        this.vars.penSize = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 583,
      y: 96
    });
    this.watchers.admin = new Watcher({
      label: "Admin",
      style: "normal",
      visible: false,
      value: () => this.vars.admin,
      x: 418,
      y: 127,
      width: null,
      height: null
    });
  }

  *whenIReceiveIntroDoneLogIn() {
    if (this.toString(this.vars.user) === "GuestUser") {
      this.broadcast("login complete");
      return;
    }
    this.costume = "backdrop2";
    for (let i = 0; i < 5; i++) {
      yield* this.askAndWait("");
      if (this.compare(/* no username */ "", this.answer) === 0) {
        this.broadcast("login complete");
        return;
      }
      yield;
    }
    if (!(this.compare(/* no username */ "", this.answer) === 0)) {
      this.costume = "backdrop3";
      /* TODO: Implement stop all */ null;
    }
  }

  *whenIReceiveSetup() {
    this.costume = "backdrop1";
  }

  *whenIReceiveLoginComplete() {
    this.costume = "home";
  }

  *whenIReceiveMinigOpenAnimationFinished() {
    this.costume = "minig";
  }

  *whenIReceivePongGameOver() {
    yield* this.wait(0.5);
    this.broadcast("finder");
  }

  *whenIReceiveTranslateOpenAnimationFinished() {
    this.costume = "translate";
  }
}

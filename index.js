import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Script from "./Script/Script.js";
import Intro from "./Intro/Intro.js";
import InfoBar from "./InfoBar/InfoBar.js";
import HelpButton from "./HelpButton/HelpButton.js";
import CornerLogo from "./CornerLogo/CornerLogo.js";
import HelpButton2 from "./HelpButton2/HelpButton2.js";
import MiniGames from "./MiniGames/MiniGames.js";
import AppBar from "./AppBar/AppBar.js";
import FinderHome from "./FinderHome/FinderHome.js";
import PongMinig from "./PongMinig/PongMinig.js";
import Paddle from "./Paddle/Paddle.js";
import Lava from "./Lava/Lava.js";
import SoccerBall from "./SoccerBall/SoccerBall.js";
import PongMinig2 from "./PongMinig2/PongMinig2.js";
import PlayerRight from "./PlayerRight/PlayerRight.js";
import PlayerLeft from "./PlayerLeft/PlayerLeft.js";
import PlayerRightGoal from "./PlayerRightGoal/PlayerRightGoal.js";
import PlayerLeftGoal from "./PlayerLeftGoal/PlayerLeftGoal.js";
import Beachball from "./Beachball/Beachball.js";
import ClockDial from "./ClockDial/ClockDial.js";
import Second from "./Second/Second.js";
import Minute from "./Minute/Minute.js";
import Hour from "./Hour/Hour.js";
import TranslateBoxOutput from "./TranslateBoxOutput/TranslateBoxOutput.js";
import TranslateBoxType from "./TranslateBoxType/TranslateBoxType.js";
import ScreenShot20200702At13 from "./ScreenShot20200702At13/ScreenShot20200702At13.js";
import TranslateButton from "./TranslateButton/TranslateButton.js";
import User from "./User/User.js";
import ExitAppButton from "./ExitAppButton/ExitAppButton.js";
import Pencil from "./Pencil/Pencil.js";
import DrawAppPen from "./DrawAppPen/DrawAppPen.js";
import ClearButton from "./ClearButton/ClearButton.js";
import AdminCommands from "./AdminCommands/AdminCommands.js";
import PowerOff from "./PowerOff/PowerOff.js";
import WindowOpenAnimation from "./WindowOpenAnimation/WindowOpenAnimation.js";
import Restart from "./Restart/Restart.js";
import NotifinationsMenu from "./NotifinationsMenu/NotifinationsMenu.js";
import Notifications from "./Notifications/Notifications.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Script: new Script({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Intro: new Intro({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 13,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  InfoBar: new InfoBar({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  HelpButton: new HelpButton({
    x: 36,
    y: 167,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  CornerLogo: new CornerLogo({
    x: -220,
    y: 168,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 19
  }),
  HelpButton2: new HelpButton2({
    x: -168,
    y: 168,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 120,
    visible: true,
    layerOrder: 27
  }),
  MiniGames: new MiniGames({
    x: -70,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 33
  }),
  AppBar: new AppBar({
    x: 0,
    y: -147,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  FinderHome: new FinderHome({
    x: -145,
    y: -152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 30
  }),
  PongMinig: new PongMinig({
    x: -124,
    y: 17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Paddle: new Paddle({
    x: -210,
    y: -65,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Lava: new Lava({
    x: 0,
    y: -124,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  SoccerBall: new SoccerBall({
    x: 87.8177047013144,
    y: 47.244670600176505,
    direction: -120.57922687248899,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 34
  }),
  PongMinig2: new PongMinig2({
    x: 121.37595666768905,
    y: 19.076274577981945,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  PlayerRight: new PlayerRight({
    x: 200,
    y: 160,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  PlayerLeft: new PlayerLeft({
    x: -200,
    y: -40,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  PlayerRightGoal: new PlayerRightGoal({
    x: 235.81847735679122,
    y: 0,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  PlayerLeftGoal: new PlayerLeftGoal({
    x: -236,
    y: 0,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Beachball: new Beachball({
    x: -172.4764851877923,
    y: 59.99889452337316,
    direction: -78.46304096718453,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 12
  }),
  ClockDial: new ClockDial({
    x: 147,
    y: -153,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 26
  }),
  Second: new Second({
    x: 147,
    y: -153,
    direction: 54,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 38
  }),
  Minute: new Minute({
    x: 147,
    y: -153,
    direction: 42,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 37
  }),
  Hour: new Hour({
    x: 147,
    y: -153,
    direction: -146.5,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 36
  }),
  TranslateBoxOutput: new TranslateBoxOutput({
    x: 119.00000000000001,
    y: 2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 25
  }),
  TranslateBoxType: new TranslateBoxType({
    x: -62,
    y: -32,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  }),
  ScreenShot20200702At13: new ScreenShot20200702At13({
    x: 3,
    y: 18.000000000000007,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  TranslateButton: new TranslateButton({
    x: -19,
    y: -152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 35
  }),
  User: new User({
    x: 94,
    y: 160,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 21
  }),
  ExitAppButton: new ExitAppButton({
    x: -222,
    y: 139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 29
  }),
  Pencil: new Pencil({
    x: 40,
    y: -152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: true,
    layerOrder: 32
  }),
  DrawAppPen: new DrawAppPen({
    x: 40,
    y: -152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  ClearButton: new ClearButton({
    x: 202,
    y: -111,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  AdminCommands: new AdminCommands({
    x: 90,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 31
  }),
  PowerOff: new PowerOff({
    x: -215,
    y: -167,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 17
  }),
  WindowOpenAnimation: new WindowOpenAnimation({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 107,
    visible: false,
    layerOrder: 18
  }),
  Restart: new Restart({
    x: 212,
    y: -167,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 20
  }),
  NotifinationsMenu: new NotifinationsMenu({
    x: 223,
    y: 165,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 22
  }),
  Notifications: new Notifications({
    x: 280,
    y: 130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 23
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

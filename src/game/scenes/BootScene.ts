import { Scene } from 'phaser'
import WebFont from '../../assets/WebFont'


export class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene', active: true });
  }

  preload () {
    this.load.spritesheet('player-walk-default', './assets/images/sprites/steam engineer/walk-default.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-hurt-default', './assets/images/sprites/steam engineer/hurt-default.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-spell-default', './assets/images/sprites/steam engineer/spell-default.png', { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('player-walk-glowsword', './assets/images/sprites/steam engineer/walk-glowsword.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-slash-oversize-glowsword', './assets/images/sprites/steam engineer/slash-oversize-glowsword.png', { frameWidth: 192, frameHeight: 192 });

    this.load.spritesheet('player-walk-mace', './assets/images/sprites/steam engineer/walk-mace.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-slash-oversize-mace', './assets/images/sprites/steam engineer/slash-oversize-mace.png', { frameWidth: 192, frameHeight: 192 });

    this.load.spritesheet('player-hurt-rapier', './assets/images/sprites/steam engineer/hurt-rapier.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-walk-rapier', './assets/images/sprites/steam engineer/walk-rapier.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player-slash-oversize-rapier', './assets/images/sprites/steam engineer/slash-oversize-rapier.png', { frameWidth: 192, frameHeight: 192 });

    this.load.spritesheet('player-slash-128-hammer', './assets/images/sprites/steam engineer/slash-128-hammer.png', { frameWidth: 128, frameHeight: 128 });
    this.load.image('book', './assets/images/book.png');
    this.load.image('star', './assets/images/star_gold.png');
    this.load.image('gun', "./assets/images/gun.png");
    this.load.image('bullet', "./assets/images/star_gold.png");
    this.load.image('healthBar', "./assets/images/health_bar.png");
    this.load.image('reward', './assets/images/various-32-greyout_69.png');
   // this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/masterassets/images/arrow-down-left.png');
   // this.load.addFile(new WebFont(this.load, ['Roboto', 'Neutron Demo']))
    this.load.image('cursor', './assets/images/cursors/blank.cur');
    this.load.image('cursor2', './assets/images/cursors/attack.cur');
    this.load.image('cursor3', './assets/images/cursors/speak.cur');
    this.load.image('cursor4', './assets/images/cursors/blank.cur');
    this.load.image('cursor4', './assets/images/cursors/point.cur');

    this.load.audio('spooky', './assets/soundtracks/spooky.mp3');
  }

  create () {
    this.scene.start("selector",'HudScene');
  }
}

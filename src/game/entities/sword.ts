/**
 * ------- Sword ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';


export default class Sword extends Phaser.Physics.Arcade.Sprite {
  jigs: any;
  angle: any;
  entity: string;
  x: integer;
  mainScene: any;
  player: any;

  constructor(mainScene, entity: string, x: integer, y: integer, sprite,player) {
    super(mainScene, x, y, sprite);
    this.x = x;
    this.y = y;
    this.mainScene = mainScene;

   // console.log('hhhhhhhhhhhhhhh' + this.mainScene.phaserPlayer);

    this.player = player;
    this.entity = entity;
    this.jigs = useJigsStore();
  }

  strike() {

    console.log('STRIKE' + this.jigs.weapon);

    this.player.setVelocityY(0);
    this.player.setVelocityX(0);

    if (this.player.dir == 'left') {
      this.play(this.entity + '-slashLeft-' + this.jigs.weapon);

      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkLeft-' + this.jigs.weapon);
      }
    }
    else if (this.player.dir == 'right') {
      this.anims.play(this.entity + '-slashRight-' + this.jigs.weapon);
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkRight-' + this.jigs.weapon);
      }
    }
    else if (this.player.dir == 'up') {
      this.anims.play(this.entity + '-slashUp-' + this.jigs.weapon);
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkUp-' + this.jigs.weapon);
      }
    }
    else if (this.player.dir == 'down') {
      this.anims.play(this.entity + '-slashDown-' + this.jigs.weapon);
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkDown-' + this.jigs.weapon);
      }
    }
    else {
      this.player.anims.play(this.entity + '-slashDown-' + this.jigs.weapon);
    }
  }

  getAngle(event) {
    this.angle = Math.atan2(parseInt(event.worldY) - this.y, parseInt(event.worldX) - this.x) * 180 / Math.PI;
  }

  loadGun(sprite) {
    console.log('gun added' + sprite);
  }

}

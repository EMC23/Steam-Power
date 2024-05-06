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

  constructor(mainScene, entity: string, x: integer, y: integer, sprite, player) {
    super(mainScene, x, y, sprite);
    this.x = x;
    this.y = y;
    this.mainScene = mainScene;

    console.log('hhhhhhhhhhhhhhh' + this.mainScene.phaserPlayer);

    this.player = this.mainScene.phaserPlayer;
    this.entity = entity;
    this.jigs = useJigsStore();
  }

  strike() {


    console.log('STRIKE' + this.jigs.weapon + ' ' + this.player.dir);
    this.mainScene.whipSound.play();
    this.player.setVelocityY(0);
    this.player.setVelocityX(0);

    if (this.player.dir == 'left') {
      this.player.anims.play(this.entity + '-slashLeft-' + this.jigs.weapon);
      console.log(this.entity + '-slashLeft-' + this.jigs.weapon)
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkLeft-' + this.jigs.weapon);
      }
    }

    else if (this.player.dir == 'right') {
      this.player.anims.play(this.entity + '-slashRight-' + this.jigs.weapon);
      console.log(this.entity + '-slashRight-' + this.jigs.weapon)
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkRight-' + this.jigs.weapon);
      }
    }
    else if (this.player.dir == 'up') {
      this.player.anims.play(this.entity + '-slashUp-' + this.jigs.weapon);
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkUp-' + this.jigs.weapon);
      }
    }
    else if (this.player.dir == 'down') {
      this.player.anims.play(this.entity + '-slashDown-' + this.jigs.weapon);
      if (this.player.speed == 'go') {
        this.player.playAfterRepeat(this.entity + '-walkDown-' + this.jigs.weapon);
      }
    }
    else {
      this.player.anims.play(this.entity + '-slashDown-' + this.jigs.weapon);
    }
    this.check_distance();
  }

  check_distance() {
    let i = 0;


    this.mainScene.mobGroup.getChildren().forEach(mob => {
      //find distance
      console.log('dead:' + this.mainScene.Mobs.SceneMobArray[i].dead);

      if (this.mainScene.Mobs.SceneMobArray[i].dead == false) {

        var mobPlayerDist = Math.hypot(this.player.x - parseInt(mob.x), this.player.y - parseInt(mob.y));
        if (mobPlayerDist < 100) {
          this.jigs.mobArray[i][7] = this.jigs.mobArray[i][7] - 30;
          this.jigs.playerStats.credits = this.jigs.playerStats.credits + 100;
          if (this.jigs.mobArray[i][7] <= 0) {
            this.mainScene.zombieSound.play();
            console.log('play ' + this.jigs.mobArray[i][5] + '-hurt-' + this.jigs.mobArray[i][6])
            this.jigs.mobArray[i][7] = 0;
            this.mainScene.Mobs.SceneMobArray[i].play(this.jigs.mobArray[i][5] + '-hurt-' + this.jigs.mobArray[i][6]);
            this.mainScene.Mobs.SceneMobArray[i].dead = true;
            const victim = this.mainScene.Mobs.SceneMobArray[i];
            this.mainScene.time.delayedCall(1000, () => {
              victim.setVisible(false);
              //victim.setActive(false);
              mob.x=0
              mob.y=0
              //mob.setActive(false);
              });
            //  this.mainScene.Mobs.SceneMobArray[i].setActive(false);
            // mob.play(this.jigs.mobArray[i][5] + '-hurt-flail');
          }
          //  mob.health = parseInt(mob.health) - 10;
          console.log('mobhealth' + this.jigs.mobArray[i][7]);
        }
      }
      i++;
    })
    i=0;
    this.mainScene.slimeGroup.getChildren().forEach(slime => {
      //find distance

      if (this.mainScene.Slimes.SceneSlimeArray[i].dead == false) {

        var mobPlayerDist = Math.hypot(this.player.x - parseInt(slime.x), this.player.y - parseInt(slime.y));
        if (mobPlayerDist < 100) {
          this.jigs.slimeArray[i][4] = this.jigs.slimeArray[i][4] - 30;
          this.jigs.playerStats.credits = this.jigs.playerStats.credits + 100;
          if (this.jigs.slimeArray[i][4] <= 0) {

            this.mainScene.zombieSound.play();
            //console.log('play ' + this.jigs.slimeArray[i][5] + '-hurt-' + this.jigs.slimeArray[i][6])
            this.jigs.slimeArray[i][4] = 0;
            //this.mainScene.Mobs.SceneslimeArray[i].play(this.jigs.mobArray[i][5] + '-hurt-' + this.jigs.mobArray[i][6]);
            this.mainScene.Slimes.SceneSlimeArray[i].dead = true;
            const victim = this.mainScene.Slimes.SceneSlimeArray[i];
            this.mainScene.time.delayedCall(1000, () => {
              victim.setVisible(false);
              //victim.setActive(false);
              slime.x = 0
              slime.y = 0
              //mob.setActive(false);
            });
            //  this.mainScene.Mobs.SceneMobArray[i].setActive(false);
            // mob.play(this.jigs.mobArray[i][5] + '-hurt-flail');
          }
          //  mob.health = parseInt(mob.health) - 10;
          console.log('mobhealth' + this.jigs.mobArray[i][7]);
        }
      }
      i++;
    })

























  }

  getAngle(event) {
    this.angle = Math.atan2(parseInt(event.worldY) - this.y, parseInt(event.worldX) - this.x) * 180 / Math.PI;
  }

  loadGun(sprite) {
    console.log('gun added' + sprite);
  }

}

/**
 * -------Player Movement---------
 */

import { Game } from 'phaser';
import { useJigsStore } from '../../stores/jigs';

export default class PlayerMovement {

  jigs: any;
  mainScene: any;
  player: any;
  velocity: number;

  constructor(mainScene, player) {
    this.velocity = 80
    this.jigs = useJigsStore();
    this.mainScene = mainScene;
    this.player = player;
    this.mainScene.physics.add.collider(this.player, this.mainScene.colliderMap);
  }

  bounce() {
    console.log('bounce ' + this.player.dir);

    if (this.jigs.playerStats.health <= 0) {
      this.mainScene.phaserPlayer.setVelocityX(0);
      this.mainScene.phaserPlayer.setVelocityY(0);
      return;
    }

    if (this.player.dir == 'left' && this.jigs.playerStats.health > 0) {
      this.player.setVelocityX(this.velocity * 3);
      this.player.dir = 'right';
    }

    else if
      (this.player.dir == 'right' && this.jigs.playerStats.health > 0) {
      this.player.setVelocityX(-this.velocity * 3);
      this.player.dir = 'left';
    }

    else if (this.player.dir == 'up' && this.jigs.playerStats.health > 0) {
      this.player.setVelocityY(this.velocity * 3);
      this.player.dir = 'down';
    }

    else if
      (this.player.dir == 'down' && this.jigs.playerStats.health > 0) {
      this.player.setVelocityY(+this.velocity * 3);
      this.player.dir = 'up';
    }

    if (this.jigs.playerStats.health <= 0) {
      this.mainScene.phaserPlayer.setVelocityX(0);
      this.mainScene.phaserPlayer.setVelocityY(0);
      return;
    }



  }

  move() {

    if (this.jigs.playerStats.health <= 0) {

      return;
    }

    if (!this.mainScene.inputPayload.left && !this.mainScene.inputPayload.right &&
      !this.mainScene.inputPayload.up && !this.mainScene.inputPayload.down &&
      this.player.speed != 'stopped') {
      this.player.anims.play('player-stop-' + this.jigs.weapon);
      this.player.speed = 'stopped';
      //   this.player.dir = 'stopped';
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
    // this.old_movement(velocity);

    this.new_movement();
  }

  new_movement() {



    if (this.mainScene.inputPayload.left) {
      this.player.setVelocityX(-this.velocity);
      this.player.setVelocityY(0);

      if (this.player.dir != 'left') {
        this.player.anims.play('player-walkLeft-' + this.jigs.weapon);
        this.player.dir = 'left';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.right) {

      this.player.setVelocityX(this.velocity);
      this.player.setVelocityY(0);

      if (this.player.dir != 'right') {
        this.player.anims.play('player-walkRight-' + this.jigs.weapon);
        this.player.dir = 'right';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.up) {

      this.player.setVelocityY(-this.velocity);
      this.player.setVelocityX(0);

      if (this.player.dir != 'up') {
        this.player.anims.play('player-walkUp-' + this.jigs.weapon);
        this.player.dir = 'up';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.down) {

      this.player.setVelocityY(this.velocity);
      this.player.setVelocityX(0);

      if (this.player.dir != 'down') {
        this.player.anims.play('player-walkDown-' + this.jigs.weapon);
        this.player.dir = 'down';
        this.player.speed = 'go';
      }
    }

    if (this.player.speed == 'go') {
      if (!this.mainScene.walkSound.isPlaying) {
        this.mainScene.walkSound.play();
      }
    }
  }

  old_movement(velocity) {

    if (this.mainScene.inputPayload.left) {
      const tile = this.mainScene.colliderMap.getTileAtWorldXY(this.player.x - 16, this.player.y, true);
      if (tile.index < 0) {
        this.player.setVelocityX(-velocity);
        this.player.setVelocityY(0);
      }
      else {
        this.player.setVelocityX(0);
      }
      if (this.player.dir != 'left') {
        this.player.anims.play('player-walkLeft-' + this.jigs.weapon);
        this.player.dir = 'left';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.right) {
      const tile = this.mainScene.colliderMap.getTileAtWorldXY(this.player.x + 16, this.player.y, true);
      //console.log(tile);
      if (tile.index < 0) {
        this.player.setVelocityX(velocity);
        this.player.setVelocityY(0);
      }
      else {
        this.player.setVelocityX(0);
      }
      if (this.player.dir != 'right') {
        this.player.anims.play('player-walkRight-' + this.jigs.weapon);
        this.player.dir = 'right';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.up) {
      const tile = this.mainScene.colliderMap.getTileAtWorldXY(this.player.x, this.player.y - 16, true);
      //console.log(tile);
      if (tile.index < 0) {
        this.player.setVelocityY(-velocity);
        this.player.setVelocityX(0);
      }
      else {
        this.player.setVelocityY(0);
      }
      if (this.player.dir != 'up') {
        this.player.anims.play('player-walkUp-' + this.jigs.weapon);
        this.player.dir = 'up';
        this.player.speed = 'go';
      }
    }
    else if (this.mainScene.inputPayload.down) {
      const tile = this.mainScene.colliderMap.getTileAtWorldXY(this.player.x, this.player.y + 16, true);
      //console.log(tile);
      if (tile.index < 0) {
        this.player.setVelocityY(velocity);
        this.player.setVelocityX(0);
      }
      else {
        this.player.setVelocityY(0);
      }
      if (this.player.dir != 'down') {
        this.player.anims.play('player-walkDown-' + this.jigs.weapon);
        this.player.dir = 'down';
        this.player.speed = 'go';
      }
    }
    if (this.player.speed == 'go') {
      if (!this.mainScene.walkSound.isPlaying) {
        this.mainScene.walkSound.play();
      }
    }




  }

}

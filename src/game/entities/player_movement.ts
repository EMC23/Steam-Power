/**
 * -------Player Movement---------
 */

import { Game } from 'phaser';
import { useJigsStore } from '../../stores/jigs';

export default class PlayerMovement {

  jigs: any;
  mainScene: any;
  player: any;
  constructor(mainScene,player) {
    this.jigs = useJigsStore();
    this.mainScene = mainScene;
    this.player = player;
  }
  move(velocity) {

    if (!this.mainScene.inputPayload.left && !this.mainScene.inputPayload.right &&
      !this.mainScene.inputPayload.up && !this.mainScene.inputPayload.down &&
      this.player.speed != 'stopped') {
      this.player.anims.play('player-stop-' + this.jigs.weapon);
      this.player.speed = 'stopped';
      this.player.dir = 'stopped';
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }

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

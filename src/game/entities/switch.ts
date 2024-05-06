/**
 * -------Switch ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';
import axios from "axios";
export default class Switch extends Phaser.Physics.Arcade.Sprite {
  jigs: any;

  constructor(scene, x: number, y: number, id, switchState, startFrame) {
    super(scene, x, y, null);
    console.log('x' + x);
    console.log('y' + y);
    this.setDepth(7);
    scene.add.sprite(0, 0);
    this.setTexture('switch_' + id);
    console.log('switchState: ' + switchState);
    if (switchState == false) {

      console.log('switchAnim_' + id + 'Off')
      this.play('switchAnim_' + id + 'Off');
      this.setInteractive({ cursor: 'url(/assets/images/cursors/speak.cur), pointer' });
    } else {
      this.play('switchAnim_' + id + 'On');
      console.log('switchAnim_' + id + 'On');
      scene.leverSound.play();
    }
    this.on('pointerdown', this.onSwitchDown.bind(this, id, scene));
    console.log("id:" + id);
  }

  onSwitchDown(id, scene) {
    console.log('switchAnim_' + id);
    this.play('switchAnim_' + id + 'On');
/*     if (id != 1) {
      axios
        .get('/flickswitch?_wrapper_format=drupal_ajax&id=' + id)
        .then((response) => {
          console.log("why");
          scene.hydrateSwitches(id, response);
          scene.events.emit('Switch', id);
        })
    } */
    console.log('switch ' + id + ' flicked');
    this.disableInteractive();
  }
}

/**
 * ------- Mobs ---------
 */
import Mob from "./mob";
import { useJigsStore } from '../../stores/jigs';

export default class Mobs {
  jigs: any;
  walls: any;
  mobArray: any;
  SceneMobHealthBarArray: Array<any>;
  MobContainerArray: Array<any>;
  mobGroup: any;
  SceneMobArray: any;
  mainScene: any;

  constructor(scene) {
    this.jigs = useJigsStore();
    this.mainScene= scene;
    this.SceneMobHealthBarArray = new Array;
    this.MobContainerArray = new Array;
    this.SceneMobArray = new Array;
  }

  add() {
    this.mainScene.mobGroup = this.mainScene.physics.add.group({ allowGravity: false });
    if (typeof this.jigs.mobArray !== 'undefined') {
      let i = 0;
      while (i < this.jigs.mobArray.length) {
        this.MobContainerArray[i] = this.mainScene.add.container(parseInt(this.jigs.mobArray[i][2]), parseInt(this.jigs.mobArray[i][3]));
        this.SceneMobArray[i] = new Mob(this.mainScene, this.jigs.mobArray[i]);
        this.mainScene.add.existing(this.SceneMobArray[i]);
        this.SceneMobHealthBarArray[i] = this.mainScene.add.image(0, -30, 'healthBar');
        this.SceneMobHealthBarArray[i].displayWidth = 25;
        this.MobContainerArray[i].add(this.SceneMobArray[i]);
        this.MobContainerArray[i].add(this.SceneMobHealthBarArray[i]);
        this.MobContainerArray[i].setDepth(6);
        this.mainScene.mobGroup.add(this.MobContainerArray[i], true);
        i++;
      }
    }
  }

  updateMobs(scene) {
    let i = 0;
    while (i < this.MobContainerArray.length) {
      if (this.jigs.mobArray[i] != undefined) {
        this.MobContainerArray[i].x = this.jigs.mobArray[i][2];
        this.MobContainerArray[i].y = this.jigs.mobArray[i][3];
        this.SceneMobHealthBarArray[i].displayWidth = this.jigs.mobArray[i][6] / 4;
      }
      i++;
    };
  }

  onMobDown(mob, img) {
    this.jigs.mobClick = mob[1];
    this.jigs.mobShoot = mob[1];
    this.jigs.playerStats.credits++;
    if (this.jigs.debug) {
      console.log('mob clicked: ' + mob[1]);
    }
  }
}

/**
 * ------- Mobs ---------
 */
import Slime from "./slime";
import { useJigsStore } from '../../stores/jigs';

export default class Mobs {
  jigs: any;
  walls: any;
  slimeArray: any;
  SceneSlimeHealthBarArray: Array<any>;
  SlimeContainerArray: Array<any>;
  slimeGroup: any;
  SceneSlimeArray: any;

  constructor() {
    this.jigs = useJigsStore();
    this.SceneSlimeHealthBarArray = new Array;
    this.SlimeContainerArray = new Array;
    this.SceneSlimeArray = new Array;
  }

  add(self) {
    this.slimeGroup = self.physics.add.group({ allowGravity: false });
    if (typeof this.jigs.slimeArray !== 'undefined') {
      let i = 0;
      while (i < this.jigs.slimeArray.length) {
        this.SlimeContainerArray[i] = self.add.container(parseInt(this.jigs.slimeArray[i][2]), parseInt(this.jigs.slimeArray[i][3]));
        this.SceneSlimeArray[i] = new Slime(self, this.jigs.slimeArray[i], this.jigs.slimeArray[i][2], this.jigs.slimeArray[i][3], this.jigs.slimeArray[i][4], this.jigs.slimeArray[i][1]);
        self.add.existing(this.SceneSlimeArray[i]);
        this.SceneSlimeHealthBarArray[i] = self.add.image(0, -30, 'healthBar');
        this.SceneSlimeHealthBarArray[i].displayWidth = 25;
        this.SlimeContainerArray[i].add(this.SceneSlimeArray[i]);
        this.SlimeContainerArray[i].add(this.SceneSlimeHealthBarArray[i]);
        this.SlimeContainerArray[i].setDepth(6);
        this.slimeGroup.add(this.SlimeContainerArray[i], true);
        i++;
      }
    }
  }

  updateSlimes(scene) {
    let i = 0;
    while (i < this.SlimeContainerArray.length) {
      if (this.jigs.slimeArray[i] != undefined) {
        this.SlimeContainerArray[i].x = this.jigs.slimeArray[i][2];
        this.SlimeContainerArray[i].y = this.jigs.slimeArray[i][3];
        this.SceneSlimeHealthBarArray[i].displayWidth = this.jigs.slimeArray[i][6] / 4;
      }
      i++;
    };
  }


}

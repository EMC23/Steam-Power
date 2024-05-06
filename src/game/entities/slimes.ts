/**
 * ------- Slimes ---------
 */
import Slime from "./slime";
import { useJigsStore } from '../../stores/jigs';

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

const randomDirection = (exclude: Direction) => {
  let newDirection = Phaser.Math.Between(0, 3)
  while (newDirection === exclude) {
    newDirection = Phaser.Math.Between(0, 3)
  }
  return newDirection
}

export default class Slimes {
  private direction = Direction.RIGHT
  jigs: any;
  walls: any;
  slimeArray: any;
  SceneSlimeHealthBarArray: Array<any>;
  SlimeContainerArray: Array<any>;
  slimeGroup: any;
  SceneSlimeArray: any;
  mainScene: any;
  moveEvent: Phaser.Time.TimerEvent;

  constructor(mainScene) {
    this.jigs = useJigsStore();
    this.SceneSlimeHealthBarArray = new Array;
    this.SlimeContainerArray = new Array;
    this.SceneSlimeArray = new Array;
    this.mainScene = mainScene;
  }

  handleTileCollision() {
    this.direction = randomDirection(this.direction);
  }

  add() {
    this.moveEvent = this.mainScene.time.addEvent({
      delay: 4000,
      callback: () => {
        this.direction = randomDirection(this.direction)
      },
      loop: true
    });
    // setTimeout(function () { randomDirection(this.direction); }, 2000);
    // this.mainScene.physics.add.collider(this.slimeGroup, this.mainScene.colliderMap, this.handleTileCollision);
    this.mainScene.slimeGroup = this.mainScene.physics.add.group({ allowGravity: false });

    if (typeof this.jigs.slimeArray !== 'undefined') {
      let i = 0;
      while (i < this.jigs.slimeArray.length) {
        this.SlimeContainerArray[i] = this.mainScene.add.container(parseInt(this.jigs.slimeArray[i][2]), parseInt(this.jigs.slimeArray[i][3])).setSize(64, 64, true);
        this.SceneSlimeArray[i] = new Slime(this.mainScene, this.jigs.slimeArray[i], this.jigs.slimeArray[i][2], this.jigs.slimeArray[i][3], this.jigs.slimeArray[i][4], this.jigs.slimeArray[i][1]);
        this.mainScene.add.existing(this.SceneSlimeArray[i]);
        this.SceneSlimeHealthBarArray[i] = this.mainScene.add.image(0, -30, 'healthBar');
        this.SceneSlimeHealthBarArray[i].displayWidth = 25;
        this.SlimeContainerArray[i].add(this.SceneSlimeArray[i]);
        this.SlimeContainerArray[i].add(this.SceneSlimeHealthBarArray[i]);
        this.SlimeContainerArray[i].setDepth(6);
        this.mainScene.slimeGroup.add(this.SlimeContainerArray[i], true);
        i++;
      }
    }
  }

  updateSlimes(scene) {
    let i = 0;

    while (i < this.SlimeContainerArray.length) {
      if (this.jigs.slimeArray[i] != undefined) {
        // this.SlimeContainerArray[i].x = this.jigs.slimeArray[i][2];
        //   this.SlimeContainerArray[i].y = this.jigs.slimeArray[i][3];
        this.SceneSlimeHealthBarArray[i].displayWidth = this.jigs.slimeArray[i][4] / 4;
      }
      i++;
    };
    this.mainScene.slimeGroup.getChildren().forEach(slime => {
      setTimeout(this.dir, Math.floor((Math.random() * 5000) + 2000), slime, this.direction);
    })
  }

  dir(slime, direction) {
    if (typeof slime.body === 'undefined') {
      return;
    }
    const speed = 50;
    switch (direction) {
      case Direction.UP:
        slime.body.setVelocity(0, -speed)
        break
      case Direction.DOWN:
        slime.body.setVelocity(0, speed)
        break
      case Direction.LEFT:
        slime.body.setVelocity(-speed, 0)
        break
      case Direction.RIGHT:
        slime.body.setVelocity(speed, 0)
        break
    }
  };
}

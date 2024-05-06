/**
 * ------- Bosses ---------
 */
import Boss from "./boss";
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

export default class Bosses {

  private direction = Direction.RIGHT
  jigs: any;
  walls: any;
  bossArray: any;
  SceneBossHealthBarArray: Array<any>;
  BossContainerArray: Array<any>;
  bossGroup: any;
  SceneBossArray: any;
  mainScene: any;
  moveEvent: Phaser.Time.TimerEvent;

  constructor(mainScene) {
    this.jigs = useJigsStore();
    this.SceneBossHealthBarArray = new Array;
    this.BossContainerArray = new Array;
    this.SceneBossArray = new Array;
    this.mainScene = mainScene;
  }

  handleTileCollision() {
    this.direction = randomDirection(this.direction);
  }

  add() {
    this.moveEvent = this.mainScene.time.addEvent({
      delay: 2000,
      callback: () => {
        this.direction = randomDirection(this.direction)
      },
      loop: true
    });

    this.mainScene.bossGroup = this.mainScene.physics.add.group({ allowGravity: false });

    if (typeof this.jigs.bossArray !== 'undefined') {
      let i = 0;
      while (i < this.jigs.bossArray.length) {
        this.BossContainerArray[i] = this.mainScene.add.container(parseInt(this.jigs.bossArray[i][2]), parseInt(this.jigs.bossArray[i][3])).setSize(64, 64, true);
        this.SceneBossArray[i] = new Boss(this.mainScene, this.jigs.bossArray[i], this.jigs.bossArray[i][2], this.jigs.bossArray[i][3], this.jigs.bossArray[i][4], this.jigs.bossArray[i][1]);
        this.mainScene.add.existing(this.SceneBossArray[i]);
        this.SceneBossHealthBarArray[i] = this.mainScene.add.image(0, -30, 'healthBar');
        this.SceneBossHealthBarArray[i].displayWidth = 25;
        this.BossContainerArray[i].add(this.SceneBossArray[i]);
        this.BossContainerArray[i].add(this.SceneBossHealthBarArray[i]);
        this.BossContainerArray[i].setDepth(6);
        this.mainScene.bossGroup.add(this.BossContainerArray[i], true);
        i++;
      }

    }
  }

  updateBosses(scene) {
    let i = 0;

    while (i < this.BossContainerArray.length) {
      if (this.jigs.bossArray[i] != undefined) {
         this.SceneBossHealthBarArray[i].displayWidth = this.jigs.bossArray[i][4] / 4;
      }
      i++;
    };
    this.mainScene.bossGroup.getChildren().forEach(boss => {
      setTimeout(this.dir, Math.floor((Math.random() * 5000) + 2000), boss, this.direction);
    })
  }

  dir(boss, direction) {
    if (typeof boss.body === 'undefined') {
      return;
    }

    const speed = 50;
    switch (direction) {
      case Direction.UP:
        boss.body.setVelocity(0, -speed)
        break

      case Direction.DOWN:
        boss.body.setVelocity(0, speed)
        break

      case Direction.LEFT:
        boss.body.setVelocity(-speed, 0)
        break

      case Direction.RIGHT:
        boss.body.setVelocity(speed, 0)
        break
    }
  };
}

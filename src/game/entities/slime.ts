/**
 * ------- Slime ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';


export default class Slime extends Phaser.Physics.Arcade.Sprite {
    jigs: any;
    dead: boolean;
    moveEvent: any;

    constructor(scene,slime, x, y, sprite, name) {

       super(scene, 0, 0, null);
        scene.physics.add.sprite(x, y)
        scene.physics.add.existing(this);
        //this.setBodySize(64, 64, true);
        this.jigs = useJigsStore();
        this.setTexture('slime-' + slime[1] + '-walk-default');
        this.play('slime-' + slime[1] + '-walkDown-default');
        this.dead = false;

        this.setInteractive({ cursor: 'url(/assets/images/cursors/attack.cur), pointer' });
        this.setScale(1);
        this.on('pointerdown', this.onSlimeDown.bind(this, name));
        this.loadSlime(x);
        this.setDepth(9);
      
     }

    onSlimeDown(name) {
        this.jigs.mobClick = name;
        this.jigs.mobShoot = name;
        this.jigs.playerStats.credits++;
        if (this.jigs.debug) {
            console.log('mob clicked: ' + name);
        }
    }

    loadSlime(sprite) {
        console.log('slime added' + sprite);
    }

    preUpdate(t: number, dt: number) {
        super.preUpdate(t, dt)

        const speed = 50

/*         switch (this.direction) {
            case Direction.UP:
                this.setVelocity(0, -speed)
                break

            case Direction.DOWN:
                this.setVelocity(0, speed)
                break

            case Direction.LEFT:
                this.setVelocity(-speed, 0)
                break

            case Direction.RIGHT:
                this.setVelocity(speed, 0)
                break
        } */
    }



}

/**
 * ------- Boss ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';


export default class Boss extends Phaser.Physics.Arcade.Sprite {
    jigs: any;
    dead: boolean;
    moveEvent: any;

    constructor(scene,boss, x, y, sprite, name) {
       super(scene, 0, 0, null);
        scene.physics.add.sprite(x, y)
        scene.physics.add.existing(this);
        //this.setBodySize(64, 64, true);
        this.jigs = useJigsStore();
        this.setTexture('boss-' + boss[1] + '-walk-default');
        this.play('boss-' + boss[1] + '-walkDown-default');
        this.dead = false;
        this.setInteractive({ cursor: 'url(/assets/images/cursors/attack.cur), pointer' });
        this.setScale(1);
        this.on('pointerdown', this.onBossDown.bind(this, name));
        this.loadBoss(x);
        this.setDepth(9);
     }

    onBossDown(name) {
        this.jigs.mobClick = name;
        this.jigs.mobShoot = name;
        this.jigs.playerStats.credits++;
        if (this.jigs.debug) {
            console.log('mob clicked: ' + name);
        }
    }

    loadBoss(sprite) {
        console.log('boss added' + sprite);
    }

    preUpdate(t: number, dt: number) {
        super.preUpdate(t, dt)
        const speed = 50
    }
}

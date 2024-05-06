/**
 * -------NPC ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';
import { createCharacterAnims } from "../entities/anim";
import axios from "axios";

export default class Npc extends Phaser.Physics.Arcade.Sprite {
    jigs: any;

    constructor(scene, data) {
        super(scene, 0, 0, null);
        scene.add.sprite(0, 0);
        this.setTexture('npc' + data[3] + '-walk-default');
        this.setInteractive({ cursor: 'url(/assets/images/cursors/speak.cur), pointer' })
       // this.play('npc'+ data[3] + '-stop-default');
        this.setScale(.85);
        this.on('pointerdown', this.onNPCDown.bind(scene, data, scene));
        this.setDepth(5)
        this.loadNPC();
    }

    onNPCDown(npc, scene) {

        if (npc[5] == 1) {
            axios
                .get("/mymission?_wrapper_format=drupal_ajax&npc=" + npc[6])
                .then((response) => {

                    scene.hydrateMission(response);
                    scene.events.emit('Mission', npc);
                })
        }
        else {
            console.log("what" + npc[5]);
            this.jigs.npc = 1;
            this.jigs.content = npc[4];
            scene.events.emit('content');
        }
    }

    loadNPC() {
        console.log('NPC added');
    }
}

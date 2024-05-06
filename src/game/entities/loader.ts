/**
 * -------Loader ---------
 */

import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';
import Layers from "../entities/layers";
import { createCharacterAnims } from "../entities/anim";
import { createSwitchesAnims } from "../entities/anim";
import { createSlimeAnims } from "../entities/anim";
import { createBossAnims } from "../entities/anim";

export default class Load {

    jigs: any;
    npcs: any;
    sprite: any;
    mobMap: Map<any, any>;
    mainScene: Phaser.Scene;

    constructor(mainScene: Phaser.Scene) {
        this.mainScene = mainScene;
        this.jigs = useJigsStore();
    }

    padding(n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    }

    load() {
        const textureManager = this.mainScene.textures;

        this.mainScene.load.audio(this.jigs.soundtrack, './assets/soundtracks/' + this.jigs.soundtrack + '.mp3');

        this.mainScene.load.audio('a-whip', './assets/audio/a-whip.mp3');
        this.mainScene.load.audio('c-sword', './assets/audio/c-sword.mp3');
        this.mainScene.load.audio('e-lever', './assets/audio/e-lever.mp3');
        this.mainScene.load.audio('f-zombie', './assets/audio/f-zombie.mp3');
        this.mainScene.load.audio('g-lizard', './assets/audio/g-lizard.mp3');

        this.mainScene.load.audio('steam_1', './assets/audio/steam_1.mp3');
        this.mainScene.load.audio('guitar_game2', './assets/audio/guitar_game2.mp3');




        this.mainScene.load.image('black', './assets/images/black.png');
        this.mainScene.load.image('pink', './assets/images/pink.png');
        this.mainScene.load.tilemapTiledJSON('level001', './assets/json/level001.json?' + Math.random());

        this.jigs.tilesetArray_1.forEach((image) => {
            if (!textureManager.exists(image)) {
                this.mainScene.load.image(image, './assets/images/System/' + image + '.png');
            }
        });

        this.jigs.tilesetArray_2.forEach((image) => {
            if (!textureManager.exists(image)) {
                this.mainScene.load.image(image, './assets/images/System/' + image + '.png');
            }
        });

        this.jigs.tilesetArray_3.forEach((image) => {
            if (!textureManager.exists(image)) {
                this.mainScene.load.image(image, './assets/images/System/' + image + '.png');
            }
        });

        if (this.jigs.tilesetArray_4 !== undefined) {
            this.jigs.tilesetArray_4.forEach((image) => {
                if (!textureManager.exists(image)) {
                    this.mainScene.load.image(image, './assets/images/System/' + image + '.png');
                }
            });
        }

        if (this.jigs.tilesetArray_5 !== undefined) {
            this.jigs.tilesetArray_5.forEach((image) => {
                if (!textureManager.exists(image)) {
                    this.mainScene.load.image(image, './assets/images/System/' + image + '.png');
                }
            });
        }

        if (this.jigs.npcArray) {
            this.jigs.npcArray.forEach((Npc) => {
                this.mainScene.load.spritesheet('npc' + Npc[3] + '-walk-default', './assets/images/sprites/npc/' + Npc[3] + '.png', { frameWidth: 64, frameHeight: 64 });
            });
        }
        if (this.jigs.slimeArray) {
            this.jigs.slimeArray.forEach((slime) => {
                this.mainScene.load.spritesheet('slime-' + slime[1] + '-walk-default', './assets/images/sprites/slime/Slime ' + slime[1] + '.png', { frameWidth: slime[6], frameHeight: slime[7] });
            }
            )
        };

        if (this.jigs.bossArray) {
            this.jigs.bossArray.forEach((boss) => {
                this.mainScene.load.spritesheet('boss-' + boss[1] + '-walk-default', './assets/images/sprites/boss/' + boss[1] + '.png', { frameWidth: boss[6], frameHeight: boss[7] });
            }
            )
        };

        this.mobMap = new Map();
        this.mobMap.set('Lizard-Green', { sheets: [{ 'hurt-saber': 64 }, { 'walk-saber': 64 }, { 'spell-default': 64 }, { 'slash-oversize-saber': 192 }] });
        this.mobMap.set('Zombie-Green', { sheets: [{ 'hurt-default': 64 }, { 'walk-default': 64 }] });
        this.mobMap.set('Lizard-Bright-Green', { sheets: [{ 'hurt-default': 64 }, { 'walk-128-scimitar': 128 }, { 'spell-default': 64 }, { 'slash-128-scimitar': 128 }] });
        this.mobMap.set('Lizard-Topaz', { sheets: [{ 'walk-flail': 64 }, { 'hurt-flail': 64 }] });

        this.jigs.mobArray.forEach(entity => {
            const monster = this.mobMap.get(entity[5]);
            console.log('-----------------------------------------');
            console.log(monster);
            for (const [name, value] of Object.entries(monster.sheets)) {
                for (const [newname, newValue] of Object.entries(value)) {
                    this.mainScene.load.spritesheet(entity[5] + '-' + newname, './assets/images/sprites/' + entity[5] + '/' + newname + '.png', { frameWidth: newValue, frameHeight: newValue });
                    console.log('key:' + newname);
                }

            };
        });

        this.jigs.switchesArray.forEach(switchItem => {
            this.mainScene.load.spritesheet('switch_' + switchItem[0], './assets/images/animations/' + switchItem[3] + '.png',
                { frameWidth: parseInt(switchItem[4]), frameHeight: parseInt(switchItem[5]) });
        });

        this.jigs.firesArray.forEach(fireItem => {
            this.mainScene.load.spritesheet('fire_' + fireItem.id, './assets/images/fire/' + fireItem.file + '.png',
                { frameWidth: fireItem.frameWidth, frameHeight: fireItem.frameheight });
        });

        this.jigs.fireBarrelsArray.forEach(fireBarrelsItem => {
            this.mainScene.load.spritesheet('firebarrel_' + fireBarrelsItem.id, './assets/images/firebarrel/' + fireBarrelsItem.file + '.png',
                { frameWidth: fireBarrelsItem.frameWidth, frameHeight: fireBarrelsItem.frameHeight });
        });

        this.jigs.questsArray.forEach(questsItem => {
            this.mainScene.load.spritesheet('quest_' + questsItem.id, './assets/images/quest/' + questsItem.file + '.png',
                { frameWidth: questsItem.frameWidth, frameHeight: questsItem.frameHeight });
        });

        this.jigs.leversArray.forEach(leversItem => {
            this.mainScene.load.spritesheet('lever_' + leversItem.id, './assets/images/lever/' + leversItem.file + '.png',
                { frameWidth: leversItem.frameWidth, frameHeight: leversItem.frameHeight });
        });

        this.jigs.machineArray.forEach(machineItem => {
            this.mainScene.load.spritesheet('machine_' + machineItem.id, './assets/images/machine/' + machineItem.file + '.png',
                { frameWidth: machineItem.frameWidth, frameHeight: machineItem.frameHeight });
        });

        this.mainScene.load.once(Phaser.Loader.Events.COMPLETE, () => {

console.log('loading complete');

            // texture loaded so use instead of the placeholder
            const Layer = new Layers(this.mainScene);
            Layer.loadLayers();

            createCharacterAnims(this.mainScene.anims, 'player', null);

             if (this.jigs.npcArray) {
                this.jigs.npcArray.forEach(Npc => {
                    createCharacterAnims(this.mainScene.anims, 'npc', Npc[3]);
                });
            }
             if (this.jigs.mobArray) {
                this.jigs.mobArray.forEach(mob => {
                    createCharacterAnims(this.mainScene.anims, mob[5],null);
                });
            }
            if (this.jigs.slimeArray) {
                this.jigs.slimeArray.forEach(slime => {
                    createSlimeAnims(this.mainScene.anims, slime);
                });
            }

            if (this.jigs.bossArray) {
                this.jigs.bossArray.forEach(boss => {
                    createBossAnims(this.mainScene.anims, boss);
                });
            }

            if (this.jigs.switchesArray) {
                this.jigs.switchesArray.forEach(switches => {
                    createSwitchesAnims(this.mainScene.anims,
                        'switch_' + switches[0],
                        'switchAnim_' + switches[0],
                        switches[7],
                        switches[8]
                    );
                });
            }
        });
        this.mainScene.load.start();
    }
}

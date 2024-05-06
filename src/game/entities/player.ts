/**
 * -------Player ---------
 */
import Phaser from "phaser";
import Drones from "../entities/drones";
import Gun from "../entities/gun";
import Sword from "../entities/sword";
import Light from "../entities/light";

import PlayerMovement from "../entities/player_movement";
import { useJigsStore } from '../../stores/jigs';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    //export default class Player  {
    light: any;
    drones: any;
    jigs: any;
    room: any;
    staticNum: number;
    walls: any;
    entity: any;
    gun: Gun;
    sword: Sword;
    playerMovement: PlayerMovement;
    mainScene: any;

    constructor(scene, x, y, frame) {

        super(scene, x, y, 'player-walk-default');
        this.mainScene = scene;
        //this.room = room;
        this.jigs = useJigsStore();
        scene.physics.add.sprite(this.jigs.playerX, this.jigs.playerY, 'player-walk-default');

        this.mainScene.phaserPlayer = this.mainScene.physics.add.sprite(this.jigs.playerX, this.jigs.playerY, this.jigs.playerStats.sprite_sheet, frame).setSize(16, 16, true);
        this.mainScene.phaserPlayer.x = this.jigs.playerX;
        this.mainScene.phaserPlayer.y = this.jigs.playerY;
        this.mainScene.phaserPlayer.setTexture('player-walk-default');
        this.mainScene.phaserPlayer.play('player-stop-mace');
        this.mainScene.phaserPlayer.setDepth(7)
            .setInteractive({ cursor: 'url(/assets/images/cursors/speak.cur), pointer' })
            .on('pointerdown', (event) => {
                this.onPlayerDown(event);
            })
            .setScale(1);

        /*       this.setTexture('player-walk-default');
              this.play('player-stop-mace');
              this.setDepth(7)
                  .setInteractive({ cursor: 'url(/assets/images/cursors/speak.cur), pointer' })
                  .on('pointerdown', this.onPlayerDown.bind(this.mainScene))
                  .setScale(1); */

        //    this.mainScene.physics.add.existing(this);
        //     this.mainScene.physics.world.enable([this]);

        this.playerMovement = new PlayerMovement(this.mainScene, this.mainScene.phaserPlayer);

        this.staticNum = 0;

        this.light = new Light(this.mainScene, this.jigs.playerX, this.jigs.playerY, null);
        this.gun = new Gun(this.mainScene, this.jigs.playerX, this.jigs.playerY, 'gun');
        this.sword = new Sword(this.mainScene, 'player', this.jigs.playerX, this.jigs.playerY, null, this);
        //this.drones = new Drones(this.mainScene, this.jigs.playerX, this.jigs.playerY);
        const spaceKey = this.mainScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //  Phase 1: Key event.
        //  Emits only when the SPACE BAR is pressed down, and dispatches from the local Key object.
        //  You can call stopPropagation at this level, which will stop it reaching both listeners below.
        spaceKey.on('down', (key, event) => {
            // event.stopPropagation();
            if (this.jigs.weapon == 'glowsword') {
                this.jigs.weapon = 'mace';
            }
            else if (this.jigs.weapon == 'mace') {
                this.jigs.weapon = 'hammer';
            }
            else if (this.jigs.weapon == 'hammer') {
                this.jigs.weapon = 'rapier';
            }
            else if (this.jigs.weapon == 'rapier') {
                this.jigs.weapon = 'glowsword';
            }

        });

        this.mainScene.lights.enable().setAmbientColor(0x555555);


        this.mainScene.cameras.main.startFollow(this.mainScene.phaserPlayer);
        var cam = this.mainScene.cameras.main;
        cam.setBounds(0, 0, this.jigs.mapWidth * 16, this.jigs.mapHeight * 16).setZoom(1);

        if (this.jigs.debug) {
            this.mainScene.localRef = this.mainScene.add.rectangle(0, 0, 32, 40).setDepth(7);
            this.mainScene.localRef.setStrokeStyle(1, 0x00ff00);
            this.mainScene.remoteRef = this.mainScene.add.rectangle(0, 0, 32, 40).setDepth(8);
            this.mainScene.remoteRef.setStrokeStyle(1, 0xff0000);
            // this.lerp(self);

        };

/*         this.mainScene.key_left = this.mainScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.mainScene.key_right = this.mainScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.mainScene.key_up = this.mainScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.mainScene.key_down = this.mainScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN); */

        this.mainScene.input.on("pointerdown", (event) => {

            if (this.jigs.playerStats.health <= 0) {
                this.mainScene.phaserPlayer.setVelocityX(0);
                this.mainScene.phaserPlayer.setVelocityY(0);
                return;
            }
            this.sword.strike();
            //this.gun.shoot(event);

            //Send Mouse Co-ordinates from World point of view
            this.mainScene.inputPayload.inputX = parseInt(event.worldX);
            this.mainScene.inputPayload.inputY = parseInt(event.worldY);
        });
    }


    attacked(enemy) {

        console.log("attacked")
        if (enemy == 'mob') {
            this.jigs.playerStats.health = this.jigs.playerStats.health - 20

        }

        if (enemy == 'slime') {
            this.jigs.playerStats.health = this.jigs.playerStats.health - 10

        }

        if (this.jigs.playerStats.health <= 0) {
            this.jigs.playerStats.health = 0;
            this.mainScene.phaserPlayer.play('player-hurt-mace');

            this.jigs.content="Oh No! You Died. Try Again. Maybe you'll get further this time.";
            this.mainScene.events.emit('content');

            this.mainScene.time.delayedCall(1000, () => {
                this.mainScene.scene.start("main");
            });
        }
    }



    onPlayerDown(event) {

console.log('dead');

         if(this.jigs.playerStats.health<=0){
          //  this.scene.switch("DeadScene");
         }
    }

    updatePlayer() {
        if (this.jigs.leave == 1) {
            this.jigs.leave = 0;
            //     this.room.leave(); // Backend
        }
        const velocity = 80;
        this.mainScene.inputPayload.left = this.mainScene.cursorKeys.left.isDown;
        this.mainScene.inputPayload.right = this.mainScene.cursorKeys.right.isDown;
        this.mainScene.inputPayload.up = this.mainScene.cursorKeys.up.isDown;
        this.mainScene.inputPayload.down = this.mainScene.cursorKeys.down.isDown;
        this.mainScene.inputPayload.tick = this.mainScene.currentTick;
        this.mainScene.inputPayload.mobClick = this.jigs.mobClick;


        ////////////////////////// SEND /////////////////////////////////
        /*        if (self.room.send && self.room.send !== undefined) {
                   if (this.jigs.playerState == "alive") {
                       self.room.send(0, self.inputPayload);
                   }
               } */
        if (!this.anims || this.jigs.playerState != "alive") {
            return;
        }
        //    self.physics.world.collide(self.localPlayer.entity, self.Walls.walls);
        this.playerMovement.move();
        this.jigs.mobClick = 0;

        /*         if (this.jigs.debug) {
                    this.mainScene.localRef.x = this.mainScene.phaserPlayer.x;
                    this.mainScene.localRef.y = this.mainScene.phaserPlayer.y;
                } */

        ///////////////////////////////////////////////////////////////////////
        //  Dispatch a Scene event
        this.mainScene.events.emit('position', this.mainScene.phaserPlayer.x, this.mainScene.phaserPlayer.y);
    }

    async lerp(self) {
        /*         if (this.staticNum == 0) {
                    this.staticNum = 1;
                    console.log('lerping');
                    if (self.currentPlayer.y > self.remoteRef.y) {
                        self.currentPlayer.setVelocityY((self.currentPlayer.y - self.remoteRef.y) * -1.9);
                    }
                    if (self.currentPlayer.y < self.remoteRef.y) {
                        self.currentPlayer.setVelocityY((self.currentPlayer.y - self.remoteRef.y) * -1.9);
                    }
                    if (self.currentPlayer.x > self.remoteRef.x) {
                        self.currentPlayer.setVelocityX((self.currentPlayer.x - self.remoteRef.x) * -1.9);
                    }
                    if (self.currentPlayer.x < self.remoteRef.x) {
                        self.currentPlayer.setVelocityX((self.currentPlayer.x - self.remoteRef.x) * -1.9);
                    }
                    await this.skip(500);
                    this.staticNum = 0;
                } */
    }

    skip(val) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolved');
            }, val);
        });
    }
}

/**
 * ------- Anim ---------
 */

import Phaser from 'phaser'

const createBossAnims = (anims: Phaser.Animations.AnimationManager, entity) => {
    walkAnim('default', 'default');
    ////////////////////////////////////// Walk Anim 4 Directions //////////////////////////////
    function walkAnim(weapon, type) {
        anims.create({
            key: 'boss-' + entity[1] + '-walkUp-' + weapon,
            frames: anims.generateFrameNumbers('boss-' + entity[1] + '-walk-' + type, { frames: [0, 1, 2] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkLeft-' + weapon,
            frames: anims.generateFrameNumbers('boss-' + entity[1] + '-walk-' + type, { frames: [3, 4, 5] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkDown-' + weapon,
            frames: anims.generateFrameNumbers('boss-' + entity[1] + '-walk-' + type, { frames: [6, 7, 8] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkRight-' + weapon,
            frames: anims.generateFrameNumbers('boss-' + entity[1] + '-walk-' + type, { frames: [9, 10, 11] }),
            frameRate: 12,
            repeat: -1
        });
    }
}


const createSlimeAnims = (anims: Phaser.Animations.AnimationManager, entity) => {
    walkAnim('default', 'default');
    ////////////////////////////////////// Walk Anim 4 Directions //////////////////////////////
    function walkAnim(weapon, type) {
        anims.create({
            key: 'slime-' + entity[1] + '-walkUp-' + weapon,
            frames: anims.generateFrameNumbers('slime-' + entity[1] + '-walk-' + type, { frames: [0, 1, 2] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkLeft-' + weapon,
            frames: anims.generateFrameNumbers('slime-' + entity[1] + '-walk-' + type, { frames: [3, 4, 5] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkDown-' + weapon,
            frames: anims.generateFrameNumbers('slime-' + entity[1] + '-walk-' + type, { frames: [6, 7, 8] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slime-' + entity[1] + '-walkRight-' + weapon,
            frames: anims.generateFrameNumbers('slime-' + entity[1] + '-walk-' + type, { frames: [9, 10, 11] }),
            frameRate: 12,
            repeat: -1
        });
    }

}

const createCharacterAnims = (anims: Phaser.Animations.AnimationManager, entityType, sheet) => {
    console.log('entity:' + entityType);

    if (entityType == 'npc') {

        entityType = 'npc' + sheet;
        console.log('define npc: ' + entityType);


        stopAnim('default', 'default');
    }

    if (entityType == 'Zombie-Green') {
        console.log('define zombie: ' + entityType);

        walkAnim('default', 'default');
        stopAnim('default', 'default');
    }
    const mobtypeA = ['Lizard-Green'];
    const mobtypeB = ['Lizard-Bright-Green'];
    const mobtypeC = ['Lizard-Topaz'];

    if (mobtypeA.includes(entityType)) {
        walkAnim('saber', 'saber');
        hurtAnim('saber', 'saber');
        stopAnim('saber', 'saber');
        spellAnim('default');
        slashAnim('saber', 'slash-oversize');
    }

    if (mobtypeB.includes(entityType)) {
        walkAnim('scimitar', '128-scimitar');
        hurtAnim('scimitar', 'default');
        spellAnim('default');
        slashAnim('scimitar', 'slash-128');
        stopAnim('scimitar', '128-scimitar');
    }

    if (mobtypeC.includes(entityType)) {
        walkAnim('flail', 'flail');
        stopAnim('flail', 'flail');
        hurtAnim('flail', 'flail');


    }
    if (entityType == 'player') {
        console.log('load player anims');
        walkAnim('default', 'default');
        walkAnim('mace', 'mace');
        walkAnim('rapier', 'rapier');
        walkAnim('glowsword', 'glowsword');
        walkAnim('hammer', 'default');

        hurtAnim('default', 'default');
        hurtAnim('mace', 'default');
        hurtAnim('rapier', 'rapier');
        hurtAnim('glowsword', 'default')
        hurtAnim('hammer', 'default')

        spellAnim('default');
        slashAnim('hammer', 'slash-128');
        slashAnim('mace', 'slash-oversize');
        slashAnim('rapier', 'slash-oversize');
        slashAnim('glowsword', 'slash-oversize');

        stopAnim('default', 'default');
        stopAnim('glowsword', 'glowsword');
        stopAnim('hammer', 'default');
        stopAnim('mace', 'mace');
        stopAnim('rapier', 'rapier');
    }

    ////////////////////////////////////// Walk Anim 4 Directions //////////////////////////////
    function walkAnim(weapon, type) {

        console.log(entityType + '-walk-' + type)

        anims.create({
            key: entityType + '-walkUp-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-walk-' + type, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-walkLeft-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-walk-' + type, { frames: [9, 10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-walkDown-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-walk-' + type, { frames: [18, 19, 20, 21, 22, 23, 24, 25, 26] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-walkRight-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-walk-' + type, { frames: [27, 28, 29, 30, 31, 32, 33, 34, 35] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Stop Anim 1 Direction //////////////////////////////
    function stopAnim(weapon, type) {
        anims.create({
            key: entityType + '-stop-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-walk-' + type, { frames: [18, 18, 18, 18] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Spell Anim 4 Directions //////////////////////////////
    function spellAnim(weapon) {
        anims.create({
            key: entityType + '-spellUp-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-spell-' + weapon, { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-spellLeft-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-spell-' + weapon, { frames: [7, 8, 9, 10, 11, 12, 13] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-spellDown-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-spell-' + weapon, { frames: [14, 15, 16, 17, 18, 19, 20] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-spellRight-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-spell-' + weapon, { frames: [21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Thrust Anim 4 Directions //////////////////////////////
    function thrustAnim(weapon, type) {
        anims.create({
            key: entityType + '-thrustUp-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-thrustLeft-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-thrustDown-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-thrustRight-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Hurt Anim 1 Direction //////////////////////////////
    function hurtAnim(weapon, type) {
        anims.create({
            key: entityType + '-hurt-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-hurt-' + type, { frames: [0, 1, 2, 3, 4, 5] }),
            frameRate: 12,
            repeat: 0
        });
    }
    ////////////////////////////////////// Shoot Anim 4 Directions //////////////////////////////
    function shootAnim(weapon) {
        anims.create({
            key: entityType + '-shootUp-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-shootLeft-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-shootDown-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-shootRight-' + entityType,
            frames: anims.generateFrameNumbers(entityType + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    function slashAnim(weapon, type) {
        console.log(entityType + '-slash-' + weapon)
        anims.create({
            key: entityType + '-slashUp-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-' + type + '-' + weapon, { frames: [0, 1, 2, 3, 4, 5, 0] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entityType + '-slashLeft-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-' + type + '-' + weapon, { frames: [6, 7, 8, 9, 10, 11, 6] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entityType + '-slashDown-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-' + type + '-' + weapon, { frames: [12, 13, 14, 15, 16, 17, 12] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entityType + '-slashRight-' + weapon,
            frames: anims.generateFrameNumbers(entityType + '-' + type + '-' + weapon, { frames: [18, 19, 20, 21, 22, 23, 18] }),
            frameRate: 12,
            repeat: 0
        });
    }

    function toolWhipAnim(weapon) {
        anims.create({
            key: entityType + '-toolWhipUp_' + weapon,
            frames: anims.generateFrameNumbers(entityType, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-toolWhipLeft_' + weapon,
            frames: anims.generateFrameNumbers(entityType, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-toolWhipDown_' + weapon,
            frames: anims.generateFrameNumbers(entityType, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entityType + '-toolWhipRight_' + weapon,
            frames: anims.generateFrameNumbers(entityType, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });
    }
}

const createSwitchesAnims = (anims: Phaser.Animations.AnimationManager,
    entity,
    texture,
    switchType,
    repeat) => {

    let OnArr = [];
    let OffArr = [];

    if (switchType == 1) {
        OnArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        OffArr = [11];
    }

    if (switchType == 2) {
        OnArr = [1];
        OffArr = [1, 4, 7, 10];
    }

    if (switchType == 3) {
        OnArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        OffArr = [11];
    }

    if (switchType == 4) {
        OffArr = [0];
        OnArr = [0, 3, 6, 9];
    }

    if (switchType == 5) {
        OnArr = [0, 3, 6, 10];
        OffArr = [3];
    }

    if (switchType == 6) {
        OnArr = [0, 1, 2, 3, 4, 5];
        OffArr = [4];
    }

    if (switchType == 7) {
        OnArr = [0, 3, 6]
        OffArr = [6]
    }

    if (switchType == 8) {
        OffArr = [0, 1, 2, 3]
        OnArr = [4]
    }

    if (switchType == 9) {
        OffArr = [0]
        OnArr = [1]
    }

    anims.create({
        key: texture + 'On',
        frames: anims.generateFrameNumbers(entity, { frames: OnArr }),
        frameRate: 12,
        repeat: repeat
    });

    anims.create({
        key: texture + 'Off',
        frames: anims.generateFrameNumbers(entity, { frames: OffArr }),
        frameRate: 12,
        repeat: repeat
    });
}

export {
    createCharacterAnims,
    createSlimeAnims,
    createBossAnims,
    createSwitchesAnims
}

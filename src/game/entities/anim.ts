/**
 * ------- Anim ---------
 */

import Phaser from 'phaser'

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


const createCharacterAnims = (anims: Phaser.Animations.AnimationManager, entity) => {

    console.log('entity:' + entity);

    if (entity == 'Zombie-Green') {
        console.log('define zombie: ' + entity);

        walkAnim('default', 'default');
        stopAnim('default', 'default');
    }
    const mobtypeA = ['Lizard-Green'];
    const mobtypeB = ['Lizard-Bright-Green'];
    const mobtypeC = ['Lizard-Topaz'];





    if (mobtypeA.includes(entity)) {
        walkAnim('saber', 'saber');
        hurtAnim('saber', 'saber');
        stopAnim('saber', 'saber');
        spellAnim('default');
        slashAnim('saber', 'slash-oversize');
    }

    if (mobtypeB.includes(entity)) {
        walkAnim('scimitar', '128-scimitar');
        hurtAnim('scimitar', 'default');
        spellAnim('default');
        slashAnim('scimitar', 'slash-128');
        stopAnim('scimitar', '128-scimitar');
    }

    if (mobtypeC.includes(entity)) {
        walkAnim('flail', 'flail');
        stopAnim('flail', 'flail');
    }
    if (entity == 'player') {
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

        console.log(entity + '-walk-' + type)

        anims.create({
            key: entity + '-walkUp-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-walk-' + type, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-walkLeft-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-walk-' + type, { frames: [9, 10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-walkDown-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-walk-' + type, { frames: [18, 19, 20, 21, 22, 23, 24, 25, 26] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-walkRight-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-walk-' + type, { frames: [27, 28, 29, 30, 31, 32, 33, 34, 35] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Stop Anim 1 Direction //////////////////////////////
    function stopAnim(weapon, type) {
        anims.create({
            key: entity + '-stop-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-walk-' + type, { frames: [18, 18, 18, 18] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Spell Anim 4 Directions //////////////////////////////
    function spellAnim(weapon) {
        anims.create({
            key: entity + '-spellUp-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-spell-' + weapon, { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-spellLeft-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-spell-' + weapon, { frames: [7, 8, 9, 10, 11, 12, 13] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-spellDown-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-spell-' + weapon, { frames: [14, 15, 16, 17, 18, 19, 20] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-spellRight-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-spell-' + weapon, { frames: [21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Thrust Anim 4 Directions //////////////////////////////
    function thrustAnim(weapon, type) {
        anims.create({
            key: entity + '-thrustUp-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-thrustLeft-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-thrustDown-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-thrustRight-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-thrust-' + type, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });
    }


    ////////////////////////////////////// Hurt Anim 1 Direction //////////////////////////////
    function hurtAnim(weapon, type) {
        anims.create({
            key: entity + '-hurt-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-hurt-' + type, { frames: [0, 1, 2, 3, 4, 5] }),
            frameRate: 12,
            repeat: 0
        });
    }



    ////////////////////////////////////// Shoot Anim 4 Directions //////////////////////////////
    function shootAnim(weapon) {
        anims.create({
            key: entity + '-shootUp-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-shootLeft-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-shootDown-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-shootRight-' + entity,
            frames: anims.generateFrameNumbers(entity + '-shoot-' + weapon, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////
    function slashAnim(weapon, type) {
        anims.create({
            key: entity + '-slashUp-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-' + type + '-' + weapon, { frames: [0, 1, 2, 3, 4, 5, 0] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entity + '-slashLeft-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-' + type + '-' + weapon, { frames: [6, 7, 8, 9, 10, 11, 6] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entity + '-slashDown-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-' + type + '-' + weapon, { frames: [12, 13, 14, 15, 16, 17, 12] }),
            frameRate: 12,
            repeat: 0
        });

        anims.create({
            key: entity + '-slashRight-' + weapon,
            frames: anims.generateFrameNumbers(entity + '-' + type + '-' + weapon, { frames: [18, 19, 20, 21, 22, 23, 18] }),
            frameRate: 12,
            repeat: 0
        });
    }

    function toolWhipAnim(weapon) {
        anims.create({
            key: entity + '-toolWhipUp_' + weapon,
            frames: anims.generateFrameNumbers(entity, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-toolWhipLeft_' + weapon,
            frames: anims.generateFrameNumbers(entity, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-toolWhipDown_' + weapon,
            frames: anims.generateFrameNumbers(entity, { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: entity + '-toolWhipRight_' + weapon,
            frames: anims.generateFrameNumbers(entity, { frames: [0] }),
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
        OnArr = [0];
        OffArr = [0, 3, 6, 9];
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
    console.log('create ' + entity);
    OnArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    OffArr = [11];
    anims.create({
        key: texture + 'On',
        frames: anims.generateFrameNumbers(entity, { frames: OnArr }),
        frameRate: 12,
        repeat: -1
    });

    anims.create({
        key: texture + 'Off',
        frames: anims.generateFrameNumbers(entity, { frames: OffArr }),
        frameRate: 12,
        repeat: -1
    });

}

export {
    createCharacterAnims,
    createSlimeAnims,
    createSwitchesAnims
}

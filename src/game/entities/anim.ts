/**
 * ------- Anim ---------
 */

import Phaser from 'phaser'

const createCharacterAnims = (anims: Phaser.Animations.AnimationManager, entity, tag) => {

    if (tag == 'default') {
        walkAnim();
        spellAnim();
        thrustAnim();
        slashAnim();
        hurtAnim();
        stopAnim();
    }

    if (tag == 'slash_oversize') {
        walkAnim();
        spellAnim();
        slashOversizeAnim();
        hurtAnim();
        stopAnim();
    }

    if (tag == 'slash_128') {
        walk128Anim();
        spellAnim();
        slash128Anim();
        hurtAnim();
        stopAnim();
    }

    if (tag == 'walk_128') {
        walk128Anim();
        spellAnim();
        shootAnim();
        hurtAnim();
        stopAnim();
    }

    if (tag == 'tool_whip') {
        walk128Anim();
        spellAnim();
        toolWhipAnim();
        hurtAnim();
        stopAnim();
    }


    ////////////////////////////////////// Spell Anim 4 Directions //////////////////////////////
    function spellAnim() {
        anims.create({
            key: 'spellUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'spellLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'spellDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'spellRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Thrust Anim 4 Directions //////////////////////////////
    function thrustAnim() {
        anims.create({
            key: 'thrustUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'thrustLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'thrustDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'thrustRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Walk Anim 4 Directions //////////////////////////////
    function walkAnim() {
        anims.create({
            key: 'walkUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [104, 105, 106, 107, 108, 109, 110, 110, 112] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walkLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [117, 118, 119, 120, 121, 122, 123, 124, 125] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walkDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [130, 131, 132, 133, 134, 135, 136, 137, 138] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walkRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [143, 144, 145, 146, 147, 148, 149, 150, 151] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Slash Anim 4 Directions //////////////////////////////
    function slashAnim() {
        anims.create({
            key: 'slashUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Hurt Anim 1 Direction //////////////////////////////
    function hurtAnim() {
        anims.create({
            key: 'hurt_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [260, 261, 262, 263, 264, 265] }),
            frameRate: 12,
            repeat: 0
        });
    }

    ////////////////////////////////////// Stop Anim 1 Direction //////////////////////////////
    function stopAnim() {
        anims.create({
            key: 'stop_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [130, 130, 130, 130, 130, 130, 130, 130, 138] }),
            frameRate: 12,
            repeat: -1
        });
    }

    ////////////////////////////////////// Shoot Anim 4 Directions //////////////////////////////
    function shootAnim() {
        anims.create({
            key: 'shootUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'shootLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'shootDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'shootRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259] }),
            frameRate: 12,
            repeat: -1
        });
    }
    ////////////////////////////////////// Walk128 Anim 4 Directions //////////////////////////////
    function walk128Anim() {
        anims.create({
            key: 'walk128Up_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [273, 274, 275, 276, 277, 278, 279, 280] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walk128Left_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [281, 282, 283, 284, 285, 286, 287, 288, 289] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walk128Down_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [290, 291, 292, 293, 294, 295, 296, 297, 298] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'walk128Right_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [299, 300, 301, 302, 303, 304, 305, 306, 307] }),
            frameRate: 12,
            repeat: -1
        });
    }

    function slashOversizeAnim() {
        anims.create({
            key: 'slashOversizeUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [273, 274, 275, 276, 277, 278] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashOversizeLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [279, 280, 281, 282, 283, 284] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashOversizeDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [285, 286, 287, 288, 289, 290] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slashOversizeRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [291, 292, 293, 294, 295, 296] }),
            frameRate: 12,
            repeat: -1
        });
    }

    function slash128Anim() {
        anims.create({
            key: 'slash128Up_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [308, 309, 310, 311, 312, 313, 314, 315, 316] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slash128Left_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [317, 318, 319, 320, 321, 322, 323, 324, 325] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slash128Down_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [326, 327, 328, 329, 330, 331, 332, 333, 334] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'slash128Right_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [335, 336, 337, 338, 339, 340, 341, 342, 343] }),
            frameRate: 12,
            repeat: -1
        });
    }

    function toolWhipAnim() {
        anims.create({
            key: 'toolWhipUp_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [273, 274, 275, 276, 277, 278, 279, 280] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'toolWhipLeft_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [281, 282, 283, 284, 285, 286, 287, 288] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'toolWhipDown_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [289, 290, 291, 292, 293, 294, 295, 296] }),
            frameRate: 12,
            repeat: -1
        });

        anims.create({
            key: 'toolWhipRight_' + entity,
            frames: anims.generateFrameNumbers(entity, { frames: [297, 298, 299, 300, 301, 302, 303, 304] }),
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
    createSwitchesAnims
}

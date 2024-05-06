/**
 * ------- Layers ---------
 */
import { useJigsStore } from '../../stores/jigs';

export default class Layers {
    jigs: any;
    mainScene: any;

    constructor(mainScene) {
        this.mainScene = mainScene
        this.jigs = useJigsStore();
    }

    loadLayers() {

         console.log('loading layers');

        var map = this.mainScene.make.tilemap({ key: 'level001', tileWidth: 32, tileHeight: 32 });

        this.jigs.tilesetArray_1.forEach(function loader(image: any) {
            map.addTilesetImage(image);
        }, this);

        this.jigs.tilesetArray_2.forEach(function loader(image: any) {
            map.addTilesetImage(image);
        }, this);

        this.jigs.tilesetArray_3.forEach(function loader(image: any) {
            map.addTilesetImage(image);
        }, this);

        this.jigs.tilesetArray_4.forEach(function loader(image: any) {
            map.addTilesetImage(image);
        }, this);

        this.mainScene.colliderMap = map.createLayer('Tile Layer 1', this.jigs.tilesetArray_1).setDepth(1);
        this.mainScene.colliderMap.setCollisionByProperty({ collides: true })

        map.createLayer('Tile Layer 2', this.jigs.tilesetArray_2).setDepth(2).setPipeline('Light2D');
        map.createLayer('Tile Layer 3', this.jigs.tilesetArray_3).setDepth(3).setPipeline('Light2D');
        map.createLayer('Tile Layer 4', this.jigs.tilesetArray_4).setDepth(5).setPipeline('Light2D');
        map.createLayer('Tile Layer 5', this.jigs.tilesetArray_5).setDepth(8).setPipeline('Light2D');
        this.mainScene.animatedTiles.init(map);

    }
}

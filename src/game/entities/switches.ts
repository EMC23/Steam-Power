/**
 * -------Switches ---------
 */
import Switch from "./switch";
export default class Switches {
    switchesGroup: any;
    add(self) {

        const switchesArray = self.jigs.switchesArray;
        const switches = self.physics.add.group({ allowGravity: false });

        for (var index = 0; index < switchesArray.length; index++) {
            switches.add(new Switch(self,
                parseInt(switchesArray[index][1]),
                parseInt(switchesArray[index][2]),
                switchesArray[index][0],
                switchesArray[index][11],
                switchesArray[index][8]
                ), true);
        }
    }
}

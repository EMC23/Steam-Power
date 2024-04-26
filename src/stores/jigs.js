// stores/counter.js
import { defineStore } from "pinia";
import axios from "axios";

export const useJigsStore = defineStore("jigs", {
  state: () => ({
    playerName: "Blank",
    playerId: 0,
    profileId: 0,
    debug: 0,
    leave: 0,
    playerX: 2365,
    playerY: 3465,

    /** @type {{ level: number, health: number, strength: number, stamina: number, losses: number, wins: number, xp: number, credits: number, skill: array, inventory : array ,mission: array}[]} */
    playerStats: {
      id: "1",
      name: "The Engineer",
      userState: "GamePhaser",
      profileId: "1",
      userMG: "18",
      credits: "313770",
      health: "50",
      energy: "6",
      sprite_sheet: "player-walk-default",
      level: "1",
      intelligence: "10",
      strength: "10",
      dexterity: "10",
      endurance: "10",
      charisma: "1",
      psi: "10",
      losses: "1",
      wins: "1",
      xp: "16"
    },

    playerSwitches: [],

    missionTitle: "Bob",

    missionHandlerDialog: `The Evil Wizard has stolen the Balls of Loveliness. \n
Without the Balls there can be no loveliness across the land. \n
Will you find my Balls?`,

    missionChoice:
      [
        { text: 'Yes I will find your balls.', value: 433 }, // { text: 'A', value: 10 },
        { text: 'No I am not ready.', value: 0 }, // { text: 'B', value: 20 },
      ],
    missionValue: 0,


    playerStorage: [],

    playerInventory: [],

    listBackpack: [],

    listStorage: [],

    playerQuests: [],

    backpackItem: 0,

    item: 0,

    /** @type {{ text: string, x: number, y: number, sprite: number, isHandler: boolean}[]} */
    npcArray: [],

    /** @type {{ target:number, name: string, x: number, y: number, sprite: number, type: string, health: number, following: number}[]} */
    mobArray: [
      ["29", "Mr jones", "2655", "3430", "25292", "Zombie-Green","default"],
      ["29", "Alex", "2065", "3430", "25293", "Zombie-Green","default"],
      ["29", "ding", "2266", "3027", "25293", "Lizard-Green","saber"],
      ["29", "ding", "2430", "2869", "25293", "Lizard-Green","saber"],
      ["29", "ding", "2630", "2869", "25293", "Lizard-Bright-Green", "scimitar"],
      ["29", "ding", "2270", "3193", "25293", "Lizard-Topaz", "flail"],
    ],
    /** @type {{ target:number, name: string, x: number, y: number, health: number, level: number, width: number, height: number}[]} */
    slimeArray: [
      [30, 'Algae', 2055, 3210, 100, 12, 35, 31],
      [30, 'Coral', 2665, 3200, 100, 12, 48, 48],
      [30, 'Dream', 2365, 3200, 100, 12, 34, 28]],

    /** @type {{ text: string, x: number, y: number, sprite: number}[]} */
    rewardsArray: [],

    /** @type {{ text: string }[]} */
    city: "Blank",

    /** @type {{ text: string }[]} */
    gameState: "GamePhaser",

    /** @type {{ text: string }[]} */
    playerGameState: "GamePhaser",

    /** @type {{ text: string }[]} */
    playerState: "dormant",

    nodeID: 0,

    nodeTitle: "Blank",

    // type will be automatically inferred to number
    userMapGrid: 10,

    mapWidth: 200,

    mapHeight: 220,

    tiled: 10,

    soundtrack: 'blank',

    weapon: "hammer",

    /** @type {{ text: string }[]} */
    content: "Press C to Change Weapon",

    npc: 0,

    /** @type {{ text: string }[]} */
    mobClick: '0',

    /** @type {{ text: string }[]} */
    mobShoot: '0',

    tilesetArray_1: ['TileA5'],
    tilesetArray_2: ['background',
     'Hospital_A2',
     'Hospital_A4',
     'TileA2', 'Modern_Int_A4', '006',
      'Modern_Outside_A4-32', 'chimera_A2', 'chimera_A4', 'chimera_A5', 'Volcano_A1', 'Volcano_A2', 'Volcano_A4',
      'Steampunk_Interior_A2', 'Steampunk_Interior_A4', 'steampunk_ext_A4', 'TileA4'],
    tilesetArray_3: ['004', 'doors1',
      '1de1d0b3-3300-4b5c-8f94-c738c7a11b0b',
      '01b87ab8-4832-4727-b263-0d5e2641e2d8',
      'cbc34058-c3bb-4126-a4d2-be2cfceb4a7a',
      'Mad_Scientists_Lab_B-32', 'Sewer_B',
      'Steampunk_Interior_D', 'steampunk_ext_D', 'Refinery_B',
      'Modern_Int_A2',
      'Modern_Int_B_Sheet',
      'Modern_Int_D_Sheet',
      'Refinery_B',
      'Hospital_A2',
      'Hospital_B',
      'Hospital_C',
      'Hospital_D',
      'Sewer_B',
       'Mad_Scientists_Lab_C-32', 'TileC'],
    tilesetArray_4: ['TileC', 'Modern_Int_B_Sheet', 'Hospital_B', 'steampunk_ext_D', 'steampunk_ext_D', 'chimera_B', '006', '01b87ab8-4832-4727-b263-0d5e2641e2d8'],
    tilesetArray_5: ['BBPA_Outside_A-32', 'Modern_Int_A4', , '1de1d0b3-3300-4b5c-8f94-c738c7a11b0b', 'chimera_B'],
    portalsArray: [],
    switchesArray: [],
    firesArray: [],
    fireBarrelsArray: [],
    leversArray: [],
    machineArray: [],
    crystalArray: [],
    questsArray: [],
    foliosArray: [],
    folioClicked: 0,
    wallsArray: [
      //    { x: 260, y: 440, width: 360, height:  10 },
      //    { x: 440, y: 190, width:  10, height: 480 },
      //   { x: 180, y: 540, width:  10, height: 180 },
      //   { x: 140, y: 680, width:  10, height: 160 },
      //    { x: 100, y: 600, width: 120, height:  10 },
    ],
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === "finished") {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
    hydrateState(state) {
      return (incMob) => this.hydrate(incMob);
    }
  },
  actions: {
    // any amount of arguments, return a promise or not
    myInventory() {
      axios
        .get("/myinventory?_wrapper_format=drupal_ajax")
        .then((response) => {
          this.divideInventory(response);
        });
    },
    divideInventory(response) {
      this.playerInventory = response.data[0].value["playerInventory"].items;
      this.listBackpack = [];
      this.listStorage = [];

      let i = 0;
      while (i < this.playerInventory.length) {
        if (this.playerInventory[i].location == 'Backpack') {
          this.listBackpack.push(this.playerInventory[i]);
        }
        if (this.playerInventory[i].location == 'Storage') {
          this.listStorage.push(this.playerInventory[i]);
        }
        i++;
      }
    },
    hydrate(incMob) {
      /*   axios
          .get("/mystate?_wrapper_format=drupal_ajax")
          .then((response) => {

            this.playerStats = response.data[0].value["player"];
            this.playerId = parseInt(response.data[0].value["player"]["id"]);
            this.profileId = parseInt(response.data[0].value["player"]["profileId"]);
            this.playerName = response.data[0].value["player"]["name"];
            this.playerSwitches = response.data[0].value["player"]["flickedSwitches"];
            this.userMapGrid = parseInt(response.data[0].value["player"]["userMG"]);
            this.tiled = parseInt(response.data[0].value["MapGrid"]["tiled"]);
            this.soundtrack = response.data[0].value["MapGrid"]["soundtrack"];
            this.mapWidth = parseInt(response.data[0].value["MapGrid"]["mapWidth"]);
            this.mapHeight = parseInt(response.data[0].value["MapGrid"]["mapHeight"]);
            this.portalsArray = response.data[0].value["MapGrid"]["portalsArray"];
            this.switchesArray = response.data[0].value["MapGrid"]["switchesArray"];
            this.fireArray = response.data[0].value["MapGrid"]["fireArray"];
            this.fireBarrelsArray = response.data[0].value["MapGrid"]["fireBarrelsArray"];
            this.leverArray = response.data[0].value["MapGrid"]["leverArray"];
            this.machineArray = response.data[0].value["MapGrid"]["machineArray"];
            this.crystalArray = response.data[0].value["MapGrid"]["crystalArray"];
            this.foliosArray = response.data[0].value["MapGrid"]["foliosArray"];
            this.wallsArray = response.data[0].value["MapGrid"]["wallsArray"];
            this.npcArray = response.data[0].value["MapGrid"]["npcArray"];
            if (incMob) {
              this.mobArray = response.data[0].value["MapGrid"]["mobArray"];
            }
            this.rewardsArray = response.data[0].value["MapGrid"]["rewardsArray"];
            this.nodeTitle = response.data[0].value["MapGrid"]["name"];

            this.tilesetArray_1 = response.data[0].value["MapGrid"]["tileset"]["tilesetArray_1"];
            this.tilesetArray_2 = response.data[0].value["MapGrid"]["tileset"]["tilesetArray_2"];
            this.tilesetArray_3 = response.data[0].value["MapGrid"]["tileset"]["tilesetArray_3"];
            this.tilesetArray_4 = response.data[0].value["MapGrid"]["tileset"]["tilesetArray_4"];

            this.city = response.data[0].value["City"];

            // Regex replaces close/open p with \n new line
            // And replaces all other html tags with null.
            this.debug = parseInt(response.data[0].value["gameConfig"]["Debug"]);
            this.content = response.data[0].value["gameConfig"]["Body"].replaceAll('</p><p>', '\n').replaceAll(/(<([^>]+)>)/ig, '');
          }) */
    },
  },
});

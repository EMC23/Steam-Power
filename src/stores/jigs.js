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
      credits: 0,
      health: 100,
      energy: 6,
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

    /** @type {{ text: string, x: number, y: number, sprite: number, bark: string}[]} */
    npcArray: [

      ["Mr Blue", "2363", "3330", "1078", "Take the white pill and get rid of your indigestion. You seem like a good kid. But you got no reputation and I can't afford to work with no kid with no reputation. Come back to me when you got yourself some street smarts.", null, "187"],
      ["Pope Turlock", "2743", "3380", "88350", "Yo Dawg, Firs you get de money, den you get de power.", null, "141"],
      ["Loren Richmond", "2793", "3470", "68549", "The City Council is inept. We need power or we have no defences.", null, "361"],
      ["Sherman Waldron", "2793", "3400", "68549", "I HAVE THE POWER!!", null, "362"],

      ["Hannah Arendt", "2298", "3325", "66690", "The extreme form of power is All against One, the extreme form of violence is One against All.", null, "363"],
      ["James Baldwin", "2657", "1127", "30171", "It is certain, in any case, that ignorance, allied with power, is the most ferocious enemy justice can have.", null, "156"],
      ["Michel Foucault", "1863", "3430", "19920", "Where there is power, there is resistance.", null, "155"],
      ["George Orwell", "1783", "3370", "31679", "The object of power is power.", null, "364"],
      ["bell hooks", "2447", "3344", "20176", "Sometimes people try to destroy you, precisely because they recognize your power - not because they don't see it, but because they see it and they don't want it to exist. ", null, "363"],
      ["Milan Kundera", "2003", "3470", "19920", "The struggle of man against power is the struggle of memory against forgetting. ", null, "156"],
      ["Octavia Butler", "1803", "3470", "33403", "All struggles are essentially power struggles. Who will rule? Who will lead? Who will define, refine, confine, design? Who will dominate? All struggles are essentially power struggles,and most are no more intellectual than two rams knocking their heads together.", null, "155"],
      ["Noam Chomsky", "1846", "3190", "41123", "People are dangerous. If they're able to involve themselves in issues that matter, they may change the distribution of power, to the detriment of those who are rich and privileged.", null, "364"],

      ["Ursula K. Le Guin", "2393", "3400", "12032", "We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.", null, "363"],
      ["Howard Zinn", "2584", "2095", "47054", "But remember, this power of the people on top depends on the obedience of the people below. When people stop obeying, they have no power. ", null, "156"],
      ["Angela Y. Davis", "1903", "3400", "36466", "Movements are most powerful when they begin to affect the vision and perspective of those who do not necessarily associate themselves with those movements.", null, "155"],
      ["James Connolly", "2014", "3400", "57952", "No individual can develop all his powers if he is even partially under the control of another, even if that other sincerely wishes him well.", null, "364"],

      ["Oscar Wilde", "2114", "3300", "69400", "Everything in the world is about sex except sex. Sex is about power.", null, "365"],
      ["Mahatma Gandhi", "1914", "3450", "33861", "The day the power of love overrules the love of power, the world will know peace.", "0", "366"],

      ["Francis Bacon", "2014", "3180", "22063", "Knowledge is power.", null, "367"],



      ["end3r", "461", "120", "74405", "Congrats!", null, "369"],
      ["Hjönk We Goos", "250", "300", "goose", "Well Done!", null, "369"],
      ["derBenniBanni", "600", "400", "derbennibanni", "You're a Hero!", null, "369"],
      ["Rizky2706", "300", "200", "78927", "Tops!", null, "369"],
      ["Marcel", "353", "120", "21813", "Yahoo!", null, "369"],


      ["Khan the Road Warrior", "900", "600", "5088", "Feck Off!", null, "369"]
    ],

    /** @type {{ target:number, name: string, x: number, y: number, sprite: number, type: string, health: number, following: number,weapon: string}[]} */
    mobArray: [
      ["29", "Mr jones", "2605", "3400", "25292", "Zombie-Green", "default", 100, 0],
      ["29", "Alex", "2165", "3400", "25293", "Zombie-Green", "default", 100, 0],
      ["29", "ding", "2266", "3027", "25293", "Lizard-Green", "saber", 100, 0],
      ["29", "ding", "2430", "2869", "25293", "Lizard-Green", "saber", 100, 0,],
      ["29", "ding", "2630", "2869", "25293", "Lizard-Bright-Green", "scimitar", 100, 0],
      ["29", "ding", "2270", "3193", "25293", "Lizard-Topaz", "flail", 100, 0],
    ],
    /** @type {{ target:number, name: string, x: number, y: number, health: number, level: number, width: number, height: number}[]} */
    slimeArray: [
      [30, 'Algae', 2055, 3210, 100, 12, 35, 31],
      [30, 'Algae', 2665, 3200, 100, 12, 35, 31],
      [30, 'Algae', 2365, 3200, 100, 12, 35, 31],

      [30, 'Coral', 2849, 2043, 100, 12, 48, 48],
      [30, 'Coral', 2849, 1911, 100, 12, 48, 48],
      [30, 'Coral', 2825, 1764, 100, 12, 48, 48],


      [30, 'Dream', 2758, 1438, 100, 12, 34, 28],
      [30, 'Dream', 2841, 1068, 100, 12, 34, 28],
      [30, 'Dream', 2819, 689, 100, 12, 34, 28]

    ],

    /** @type {{ target:number, name: string, x: number, y: number, health: number, level: number, width: number, height: number}[]} */

    bossArray: [
      [30, 'Clockwork Heavy Combat Spider', 2847, 576, 100, 12, 143, 118],
      [30, 'Clockwork Heavy Combat Spider', 1855, 976, 100, 12, 143, 118],
      [30, 'Clockwork Worker', 1855, 1450, 100, 12, 45, 34],

    ],

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

    weapon: "glowsword",

    /** @type {{ text: string }[]} */
    content: "Power To The People",

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
      'Steampunk_Interior_A2', 'Steampunk_Interior_A4', 'steampunk_ext_A4', 'TileA1','TileA4'],
    tilesetArray_3: ['004', 'doors1',
      '1de1d0b3-3300-4b5c-8f94-c738c7a11b0b',
      '01b87ab8-4832-4727-b263-0d5e2641e2d8',
      'cbc34058-c3bb-4126-a4d2-be2cfceb4a7a',
      'Mad_Scientists_Lab_B-32', 'Sewer_B',
      'Steampunk_Interior_D', 'steampunk_ext_D', 'Refinery_B',
      'Modern_Int_A2',
      'Modern_Int_B_Sheet',
      'Modern_Int_D_Sheet',
      'Refinery_B', 'Refinery_C',
      'Hospital_A2',
      'Hospital_B',
      'Hospital_C',
      'Hospital_D',
      'Sewer_B',
      'Mad_Scientists_Lab_C-32', 'TileC'],
    tilesetArray_4: ['Sewer_B', 'Modern_Outside_E_Sheet-urban decay','TileC', 'Modern_Int_B_Sheet', 'Hospital_B', 'steampunk_ext_D', 'steampunk_ext_D', 'chimera_B', '006', '01b87ab8-4832-4727-b263-0d5e2641e2d8'],
    tilesetArray_5: ['Sewer_B','BBPA_Outside_A-32', 'Modern_Int_A4', , '1de1d0b3-3300-4b5c-8f94-c738c7a11b0b', 'chimera_B'],
    portalsArray: [],
    /** @type {{
     * entity_id: string, field_x_value:number, field_y_value:number, field_file_value: string, field_frameheight_value:number,
     * field_framewidth_value:number,
     * field_number_of_frames_value:number,
     * field_switch_type_value:number,
     * field_repeatable_value:number,
     * field_starting_frame_value:number,
     * field_end_frame_value:number,
     * switchState:boolean
     *
     *  }[]} */
    switchesArray: [
      ["1", 200, 200, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["2", 1880, 3200, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["3", 2272, 3114, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["4", 2637, 3099, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["5", 2694, 2743, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["6", 3026, 2178, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["7", 3026, 1846, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["8", 2683, 1441, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["9", 2978, 872, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["10", 2307, 173, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["11", 2104, 900, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["12", 2098, 1401, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["13", 2152, 1878, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["14", 133, 3208, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["15", 349, 2185, 'lever', 32, 32, 12, 4, 0, 0, 10, false],
      ["16", 1960, 2944, 'steam-001', 48, 48, 4, 8, -1, 0, 3, false],
      ["17", 1960, 3134, 'steam-002', 48, 48, 4, 8, -1, 0, 3, false],
      ["18", 1960, 3034, 'steam-003', 48, 48, 4, 8, -1, 0, 3, false],
      ["19", 2744, 3002, 'steam-004', 48, 48, 4, 8, -1, 0, 3, false],
      ["20", 2844, 3002, 'steam-005', 48, 48, 4, 8, -1, 0, 3, false],
      ["21", 400, 200, 'guy001', 97, 76, 2, 9, 0, 0, 3, false],


    ],
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

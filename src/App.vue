<script>
import axios from "axios";
import * as coreui from '@coreui/coreui'
import { CButton } from '@coreui/vue'
import { useJigsStore } from "./stores/jigs";
// import ViewTabs from "./components/ViewTabs";
import Character from './components/tabs/Character.vue';
import ViewMain from "./components/ViewMain";

export default {
  components: {
    // Room,
    Character,
    ViewMain,
    coreui,
    CButton
  },
  setup() {
    // this.room = new Room;
    const jigs = useJigsStore();
    return {
      jigs,
    };
  },
  data() {
    return {
      gameState: [],
    };
  },
  mounted() {

    this.jigs = useJigsStore();
    this.jigs.hydrateState(1);
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.jigs.hydrate(1);
    },
    toggleClass(e) {
      const nav = document.querySelectorAll('.tab-buttons .btn');
      nav.forEach(navItem => {
        navItem.classList.remove('active');
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active');
        }
      });
    },
    log(e) {
      e.preventDefault();
      this.toggleClass(e);
      this.jigs.gameState = "Logs";
      console.log(this.jigs.userMapGrid);
      console.log(this.jigs.gameState);
      console.log(this.jigs.tiled);
      console.log(this.jigs.portalsArray);
      //  this.room.leave();
    },
    char(e) {
      e.preventDefault();
      this.toggleClass(e);
      this.jigs.gameState = "Character";
      console.log(this.jigs.userMapGrid);
      console.log(this.jigs.tiled);
      console.log(this.jigs.gameState);
      //   this.room.leave();
    },
    inventory(e) {
      e.preventDefault();
      this.toggleClass(e);
      this.jigs.gameState = "Inventory";
      console.log(this.jigs.userMapGrid);
      console.log(this.jigs.tiled);
      console.log(this.jigs.gameState);
      //   this.room.leave();
    },

    skills(e) {
      e.preventDefault();
      this.toggleClass(e);
      this.jigs.gameState = "Skills";
      console.log(this.jigs.gameState);
      console.log(this.jigs.tiled);
      console.log(this.jigs.userMapGrid);
      //   this.room.leave();
    },
    quests(e) {
      e.preventDefault();
      this.toggleClass(e);
      this.jigs.gameState = "Quests";
      console.log(this.jigs.gameState);
      console.log(this.jigs.tiled);
      console.log(this.jigs.userMapGrid);
      //   this.room.leave();
    },
    game(e) {
      e.preventDefault();
      this.toggleClass(e);
      location.reload();
      //this.jigs.gameState = "GamePhaser";
      console.log(this.jigs.gameState);
      console.log(this.jigs.tiled);
      console.log(this.jigs.userMapGrid);
    },
  },
};
</script>
<template>
  <div class="layout-container">
    <form @submit="formSubmit" class="tabs">
      <div class="tab-buttons">
        <CButton @click="game" component="button" color="primary"
          shape="rounded-pill" size="lg" active>Game</CButton>
        <CButton @click="char" component="button" color="primary"
          shape="rounded-pill" size="sm">Char</CButton>
        <CButton @click="inventory" component="button" color="primary"
          shape="rounded-pill" size="sm">Inv</CButton>
        <!-- <CButton @click="skills" component="button" color="primary"
          shape="rounded-pill" size="sm">Skills</CButton> -->
        <!-- <CButton @click="quests" component="button" color="primary"
          shape="rounded-pill" size="sm">Quests</CButton> -->
        <CButton @click="log" component="button" color="primary"
          shape="rounded-pill" size="sm">Log</CButton>
      </div>
    </form>
    <ViewMain :msg="jigs.gameState" class="main" />
    <div class="sidebar-2">
      <div class="tab-panels">
        <Character />
      </div>
    </div>
  </div>
</template>

<style>
  :root {
    --emc-white: #FFFFFF;
    --emc-white-off: #F5EFED;
    --emc-white-grey: #E8F1F2;
    --emc-grey-bg: #E6E6EA;
    --emc-grey-light: #E2E2E2;
    --emc-grey-mid: #605F5E;
    --emc-grey-dark: #363F3F;
    --emc-grey-dark-alt: #33312E;
    --emc-black: #0A0908;
    --emc-black-rich: #04151F;
    --emc-dark: #230007;
    --emc-teal-light: #00F2F2;
    --emc-teal-light-alt: #00B9AE;
    --emc-teal: #009999;
    --emc-teal-alt: #19535F;
    --emc-teal-dark: #0B3C49;
    --emc-teal-dark-alt: #022B3A;
    --emc-teal-dark-rich: #042A2B;
    --emc-blue: #0A2463;
    --emc-green: #00CC66;
    --emc-yellow: #FFC43D;
    --emc-lime: #CEFF1A;
    --emc-red: #D00A01;
    --emc-pink: #EF476F;
    --emc-orange: #FB5012;
    --emc-purple: #3C1642;
  }

  body {
    background-color: #000000 !important;
    color: #eee;
    font-family: "Roboto", verdana, arial, helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  .client .layout-container {
    display: flex;
    flex: 1 0 1280px;
    max-width: 1280px;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 1280px;
  }

  .client .main {
    max-width: 960px;
    flex: 1 0 960px;
  }

  .client .sidebar-2 {
    padding-left: 2rem;
    flex: 0 1 280px;
  }

  .game__wrapper {
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }

  .tabs {
    flex: 0 1 auto;
    margin-bottom: 1rem;
    width: 100%;
  }

  .tabs .tab-buttons {
    display: flex;
    gap: 1rem;
  }

  .tabs .tab-buttons a,
  .tabs .tab-buttons button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    text-transform: uppercase;
    color: white;
    background-color: #333;
    font-family: 'Neutron Demo';
    font-size: 1.25rem;
    font-weight: bold;
    border: 0 none;
    height: 3rem;
    border-radius: 0 !important;
    box-shadow: inset 0px 12px 25px 5px rgba(0, 0, 0, 0.4);
    transition: background-color 0.5s ease, width 4s 4s;
  }

  .tabs .tab-buttons a:hover,
  .tabs .tab-buttons a:focus,
  .tabs .tab-buttons a.active,
  .tabs .tab-buttons button:hover,
  .tabs .tab-buttons button:focus,
  .tabs .tab-buttons button.active {
    color: white;
    background-color: var(--emc-teal);
    border: 0 none;
    box-shadow: inset -5px -5px 10px 0px rgba(12, 7, 7, 0.5), inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .tabs .tab-buttons a.active,
  .tabs .tab-buttons button.active {
    background-color: var(--emc-teal-dark);
    width: 300px;
  }

  .tabs .tab-buttons a.active:hover,
  .tabs .tab-buttons button.active:hover {
    color: white;
    background-color: var(--emc-teal-alt);
  }

  /* .grtv-wrapper.grtv-default-skin .grtvn[role="treeitem"]:focus >.grtvn-self {
  outline: black dotted 1px;
} */

  /* The node's content, excluding the list of child nodes */
  .grtv-wrapper.grtv-default-skin .grtvn-self {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    /* line-height: 2rem; */
    margin-bottom: 1rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-children .grtvn-children .grtvn-self {
    margin-bottom: 0;
  }

  /* Drag and Drop styles */
  .grtv-wrapper.grtv-default-skin .grtvn-dragging .grtvn-self {
    opacity: 0.5;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target {
    flex-wrap: wrap;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target.grtvn-self-child-drop-target {
    opacity: .5;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target .grtvn-self-sibling-drop-target {
    width: 100%;
    height: 7px;
    background-color: #dddddd;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target .grtvn-self-sibling-drop-target.grtvn-self-sibling-drop-target-hover {
    background-color: #bbbbbb;
  }

  /* The expander button and indicator content */
  .grtv-wrapper.grtv-default-skin .grtvn-self-expander {
    /* padding: 0; */
    /* background: none; */
    /* border: none; */
    /* height: var(--baseHeight); */
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander i.grtvn-self-expanded-indicator {
    font-style: normal;
    color: white;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander i.grtvn-self-expanded-indicator::before {
    content: '+';
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander.grtvn-self-expanded i.grtvn-self-expanded-indicator::before {
    content: '-';
  }

  /* The styling for when the node is selected */
  .grtv-wrapper.grtv-default-skin .grtvn-self-selected {
    background-color: #f0f0f8;
  }

  /* Spacing */
  .grtv-wrapper.grtv-default-skin .grtvn-self-expander,
  .grtv-wrapper.grtv-default-skin .grtvn-self-checkbox,
  .grtv-wrapper.grtv-default-skin .grtvn-self-radio,
  /* .grtv-wrapper.grtv-default-skin .grtvn-self-spacer, */
  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    min-width: 1rem;
    flex: 0 1 2rem;
    background-color: var(--emc-teal-alt);
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 4px solid transparent;
  }

  .grtvn-self-expander:hover,
  .grtvn-self-expander:focus {
    border: 4px solid var(--emc-teal-dark-alt);
  }

  .grtvn-self-expander:focus {
    border-color: var(--emc-teal-alt);
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander,
  .grtv-wrapper.grtv-default-skin .grtvn-self-spacer {
    margin: 0;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-checkbox,
  .grtv-wrapper.grtv-default-skin .grtvn-self-radio {
    /* margin: 0 0 0 calc(-1 * var(--itemSpacing)); */
    width: 1.5rem;
    height: 1.5rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-text,
  .grtv-wrapper.grtv-default-skin .grtvn-self-label {
    /* margin-left: var(--itemSpacing); */
  }

  .grtvn-self-label {
    font-family: "Neutron Demo";
    font-size: 1.75rem;
  }

  /* Action buttons section */
  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    /* padding: 0; */
    /* background: none; */
    /* border: none; */
    /* height: var(--baseHeight); */
  }

  /* Action buttons (add, delete, etc) */
  .grtv-wrapper.grtv-default-skin i.grtvn-self-add-child-icon {
    font-style: normal;
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-add-child-icon::before {
    content: '+';
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-delete-icon {
    font-style: normal;
    color: white;
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-delete-icon::before {
    content: 'x';
  }

  .grtv-wrapper.grtv-default-skin .grtvn-children-wrapper {
    margin: 0 0 0 calc(1rem + var(--itemSpacing));
  }

  /* The node's child list */
  .grtv-wrapper.grtv-default-skin .grtvn-children {
    padding: 0;
    list-style: none;
    margin-bottom: 2rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn.grtvn-hidden {
    display: none;
  }

  .grtvn-children-wrapper>ul>li>.grtvn-children-wrapper>.grtvn-children {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-areas: s
      "level1 level2 level3 level4"
  }

  .grtvn-children-wrapper>ul>li>.grtvn-children-wrapper>.grtvn-children>li {
    background-color: var(--emc-dark);
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    background-color: var(--emc-black);
  }

  .grtvn-self-action:hover,
  .grtvn-self-action:focus {
    border: 4px solid var(--emc-black-rich);
  }

  .grtvn-self-action:focus {
    border-color: var(--emc-teal-alt);
  }


  .tab-panels {
    height: 100%;
  }

  .character {
    background: #111;
    padding: 2rem;
  }

  .vue-simple-progress,
  .vue-simple-progress-bar {
    height: 1rem !important;
  }

  .character h3 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    text-transform: uppercase;
    color: white;
    background-color: #333;
    font-family: 'Neutron Demo';
    font-size: 1.25rem;
    font-weight: bold;
    height: 2rem;
    box-shadow: inset 0px 12px 25px 5px rgba(0, 0, 0, 0.4);
  }

  .character-gauge {
    margin-bottom: 0.5rem;
  }

  .character-gauge label {
    display: inline-block;
  }

  .weapon label,
  .character-gauge label {
    margin-inline-end: 0.5rem;
  }

  .weapon label::after,
  .character-gauge label::after {
    content: ': '
  }

  /* .character-gauge .gauge-value {
  margin-inline-end: 0.5rem;
} */

  /* .grtv-wrapper.grtv-default-skin .grtvn[role="treeitem"]:focus >.grtvn-self {
  outline: black dotted 1px;
} */

  /* The node's content, excluding the list of child nodes */
  .grtv-wrapper.grtv-default-skin .grtvn-self {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    /* line-height: 2rem; */
    margin-bottom: 1rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-children .grtvn-children .grtvn-self {
    margin-bottom: 0;
  }

  /* Drag and Drop styles */
  .grtv-wrapper.grtv-default-skin .grtvn-dragging .grtvn-self {
    opacity: 0.5;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target {
    flex-wrap: wrap;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target.grtvn-self-child-drop-target {
    opacity: .5;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target .grtvn-self-sibling-drop-target {
    width: 100%;
    height: 7px;
    background-color: #dddddd;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-drop-target .grtvn-self-sibling-drop-target.grtvn-self-sibling-drop-target-hover {
    background-color: #bbbbbb;
  }

  /* The expander button and indicator content */
  .grtv-wrapper.grtv-default-skin .grtvn-self-expander {
    /* padding: 0; */
    /* background: none; */
    /* border: none; */
    /* height: var(--baseHeight); */
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander i.grtvn-self-expanded-indicator {
    font-style: normal;
    color: white;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander i.grtvn-self-expanded-indicator::before {
    content: '+';
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander.grtvn-self-expanded i.grtvn-self-expanded-indicator::before {
    content: '-';
  }

  /* The styling for when the node is selected */
  .grtv-wrapper.grtv-default-skin .grtvn-self-selected {
    background-color: #f0f0f8;
  }

  /* Spacing */
  .grtv-wrapper.grtv-default-skin .grtvn-self-expander,
  .grtv-wrapper.grtv-default-skin .grtvn-self-checkbox,
  .grtv-wrapper.grtv-default-skin .grtvn-self-radio,
  /* .grtv-wrapper.grtv-default-skin .grtvn-self-spacer, */
  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    min-width: 1rem;
    flex: 0 1 2rem;
    background-color: var(--emc-teal-alt);
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 4px solid transparent;
  }

  .grtvn-self-expander:hover,
  .grtvn-self-expander:focus {
    border: 4px solid var(--emc-teal-dark-alt);
  }

  .grtvn-self-expander:focus {
    border-color: var(--emc-teal-alt);
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-expander,
  .grtv-wrapper.grtv-default-skin .grtvn-self-spacer {
    margin: 0;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-checkbox,
  .grtv-wrapper.grtv-default-skin .grtvn-self-radio {
    /* margin: 0 0 0 calc(-1 * var(--itemSpacing)); */
    width: 1.5rem;
    height: 1.5rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-text,
  .grtv-wrapper.grtv-default-skin .grtvn-self-label {
    /* margin-left: var(--itemSpacing); */
  }

  .grtvn-self-label {
    font-family: "Neutron Demo";
    font-size: 1.75rem;
  }

  /* Action buttons section */
  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    /* padding: 0; */
    /* background: none; */
    /* border: none; */
    /* height: var(--baseHeight); */
  }

  /* Action buttons (add, delete, etc) */
  .grtv-wrapper.grtv-default-skin i.grtvn-self-add-child-icon {
    font-style: normal;
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-add-child-icon::before {
    content: '+';
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-delete-icon {
    font-style: normal;
    color: white;
  }

  .grtv-wrapper.grtv-default-skin i.grtvn-self-delete-icon::before {
    content: 'x';
  }

  .grtv-wrapper.grtv-default-skin .grtvn-children-wrapper {
    margin: 0 0 0 calc(1rem + var(--itemSpacing));
  }

  /* The node's child list */
  .grtv-wrapper.grtv-default-skin .grtvn-children {
    padding: 0;
    list-style: none;
    margin-bottom: 2rem;
  }

  .grtv-wrapper.grtv-default-skin .grtvn.grtvn-hidden {
    display: none;
  }

  .grtvn-children-wrapper>ul>li>.grtvn-children-wrapper>.grtvn-children {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-areas: s
      "level1 level2 level3 level4"
  }

  .grtvn-children-wrapper>ul>li>.grtvn-children-wrapper>.grtvn-children>li {
    background-color: var(--emc-dark);
  }

  .grtv-wrapper.grtv-default-skin .grtvn-self-action {
    background-color: var(--emc-black);
  }

  .grtvn-self-action:hover,
  .grtvn-self-action:focus {
    border: 4px solid var(--emc-black-rich);
  }

  .grtvn-self-action:focus {
    border-color: var(--emc-teal-alt);
  }

  .tab-panels {
    height: 100%;
  }

  .character {
    background: #111;
    padding: 2rem;
  }

  .vue-simple-progress,
  .vue-simple-progress-bar {
    height: 1rem !important;
  }

  .character h3 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    text-transform: uppercase;
    color: white;
    background-color: #333;
    font-family: 'Neutron Demo';
    font-size: 1.25rem;
    font-weight: bold;
    height: 2rem;
    box-shadow: inset 0px 12px 25px 5px rgba(0, 0, 0, 0.4);
  }

  .character-gauge {
    margin-bottom: 0.5rem;
  }

  .character-gauge label {
    display: inline-block;
  }

  .weapon label,
  .character-gauge label {
    margin-inline-end: 0.5rem;
  }

  .weapon label::after,
  .character-gauge label::after {
    content: ': '
  }

</style>

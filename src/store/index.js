import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    selectedPlayers: [],
    allPlayers: [],
    selectedPositions: [],
    allPositions: [],
    chosenPlayer: undefined
  },
  mutations: { //sync
    setSelectedPlayers(state, payload) {
      state.selectedPlayers = payload;
    },
    setAllPlayers(state, payload) {
      state.allPlayers = payload;
    },
    setSelectedPositions(state, payload) {
      state.selectedPositions = payload;
    },
    setAllPositions(state, payload) {
      state.allPositions = payload;
    },
    setChosenPlayer(state, payload) {
      state.chosenPlayer = payload;
    }
  },
  getters: {
    getSelectedPlayers: state => {
      return state.selectedPlayers
    },
    getAllPlayers: state => {
      return state.allPlayers
    },
    getSelectedPositions: state => {
      return state.selectedPositions
    },
    getAllPositions: state => {
      return state.allPositions
    },
    getChosenPlayer: state => {
      return state.chosenPlayer
    }
  },
  actions: { //async
    async setAllPlayers(state){
      await fetch("https://raw.githubusercontent.com/vgshenoy/football-players/master/players.json")
        .then(response => response.json())
        .then(data => state.commit("setAllPlayers", data))
        .then(() => state.commit("setAllPositions", [...new Set(state.getters.getAllPlayers.map(p => p.position))]));
    }
  },
  modules: {},
});

<template>
  <div class="component-container">
    <h3>Search by name</h3>
    <input
      class="search-bar"
      v-model="search"
      type="text"
      @input="onChange"
      multiple
    />
    <div class="results" v-if="this.results.length > 0">
      <ul
        class="autocomplete-results"
      >
        <ul
          v-for="(player, id) in this.results"
          :key="id"
          class="player-el"
          @click = "onPlayerClick(player)"
        >
          <p> {{player.name}} </p>
        </ul>
      </ul>
    </div>
  </div>
  <div v-if="this.selected.length > 0" class="selected-players">
    <ul class="selected-results">
      <ul
        v-for="(player, i) in this.selected"
        :key="i"
        class="player-el-selected"
        @click = "onSelectedPlayerClick(i)"
        >
          <p> {{player.name}} | x</p>
      </ul>
    </ul>
  </div>
  <div class="footer">
    <router-control 
      path="positions" 
      buttonType="forward"
      buttonText="Proceed"
      :selectedData="selected"
    >
    </router-control>
  </div>
</template>

<script>

import RouterControl from "@/components/RouterControl.vue"

export default {
  name: 'PlayerSearch',
  props: {
    players: Array
  },
  data() {
    return {
      results: [],
      search: '',
    }
  },
  computed:{
    selected(){
      return this.$store.getters.getSelectedPlayers
    },
    all(){
      return this.$store.getters.getAllPlayers
    }
  },
  //the filtering should be done more in depth, not just on names
  mounted(){
    this.results = this.players.filter(player => {
      return !this.selected.map(x => x.name).includes(player.name);
    })
  },
  components: {
    "router-control": RouterControl
  },
  methods: {
    filterPlayers() {
      this.results = this.players.filter(player => {
        return (player.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 && !this.selected.map(x => x.name).includes(player.name));
      })
    },
    onChange() {
      this.filterPlayers(); 
    },
    onPlayerClick(player) {
      this.selected.push(player);
      this.$store.commit("setSelectedPlayers", this.selected)
      this.filterPlayers();
    },
    onSelectedPlayerClick(i) {
      this.selected.splice(i, 1);
      this.$store.commit("setSelectedPlayers", this.selected)
      this.filterPlayers();
    }
  },
};
</script>

<style>
  .search-bar {
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 30px;
    font-family: Sen, Helvetica, Arial, sans-serif;
    font-size: 16px;
    padding-left: 0.5em;
  }

  .autocomplete-results {
    border: 1px solid lightgray;
    width: 200px;
    min-height: 1em;
    max-height: 15em;    
    overflow: auto;
    border-radius: 10px;
  }

  .player-el{
    padding: 1px;
  }

  .player-el:hover {
    background-color: #4AAE9B;
    color: white;
  }

  .selected-players {
    display: grid;
    position: absolute;
    bottom: 40%;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    gap: 15px 10px;
  }

  .selected-results {
    display: inline-flex;
  }

  .player-el-selected {
    background-color: #b9eee4;
    border-radius: 10px;
    margin: 30px 5px 0px;
    padding: 0px 5px;
    font-size: 14px;
  }
</style>
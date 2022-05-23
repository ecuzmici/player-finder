<template>
  <div class="component-container">
    <div class="overflow-container">
      <table class="players-table">
        <tr>
          <th @click="sortByName">Name</th>
          <th @click="sortByAge">Age</th>
          <th @click="sortByPosition">Position</th>
          <th @click="sortByNation">Nationality</th>
        </tr>
        <tr 
          v-for="(player, i) in this.finalPlayers" 
          :key="i"
          @click="onPlayerClick(player)"
        >
          <td>{{player.name}}</td>
          <td>{{player.age}}</td>
          <td>{{player.position}}</td>
          <td>{{player.nationality}}</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="footer">
    <router-control
      v-if="!this.chosenPlayer" 
      path="positions" 
      buttonType="backward"
      buttonText="Go back"
      :selectedData="this.finalPlayers"
    >
    </router-control>
    <modal-box
      v-else
    >  
    </modal-box>
  </div>
</template>

<script>

import RouterControl from "@/components/RouterControl.vue"
import ModalBox from "@/components/ModalBox.vue"

export default {
  name: 'PlayerResults',
  components: {
    "router-control": RouterControl,
    "modal-box": ModalBox
  },
  props: {
    allPlayers: Array,
    selectedPositions: Array,
    selectedPlayers: Array
  },
  data() {
    return {
      finalPlayers: [],
      columns: [],
      sortable: {},
      sorting: {
        name: "asc",
        age: "asc",
        position: "asc",
        nation: "asc",
      }
    }
  },
  computed: {
    chosenPlayer(){
      return this.$store.getters.getChosenPlayer
    }
  },
  mounted(){
    const allPlayersBySelectedPositions = this.allPlayers.filter(player => {
      return this.selectedPositions.includes(player.position);
    });
    this.finalPlayers = [...new Set(allPlayersBySelectedPositions.concat(this.selectedPlayers))]
  },
  methods: {
    //TODO: make these into one method
    sortByName(){
      const temp = this.finalPlayers.sort((a, b) => a.name.localeCompare(b.name))
      this.finalPlayers = this.sorting.name === "asc" ? temp : temp.reverse()
      this.sorting.name = this.sorting.name === "asc" ? "desc" : "asc"
    },
    sortByAge(){
      const temp = this.finalPlayers.sort((a, b) => a.age - b.age)
      this.finalPlayers = this.sorting.age === "asc" ? temp : temp.reverse()
      this.sorting.age = this.sorting.age === "asc" ? "desc" : "asc"
    },
    sortByPosition(){
      const temp = this.finalPlayers.sort((a, b) => a.position.localeCompare(b.position))
      this.finalPlayers = this.sorting.position === "asc" ? temp : temp.reverse()
      this.sorting.position = this.sorting.position === "asc" ? "desc" : "asc"
    },
    sortByNation(){
      const temp = this.finalPlayers.sort((a, b) => a.nationality.localeCompare(b.nationality))
      this.finalPlayers = this.sorting.nation === "asc" ? temp : temp.reverse()
      this.sorting.nation = this.sorting.nation === "asc" ? "desc" : "asc"
    },
    onPlayerClick(player){
      this.$store.commit("setChosenPlayer", player)
    }
  }
};
</script>


<style scoped>

  .players-table {
    text-align: left;
    max-height: 200px;
  }

  .players-table tr:nth-child(even){
    background-color: #f2f2f2;
  }

  .players-table tr:hover {
    background-color: #ddd;
  }

  td {
    padding: 5px;
  }

  th {
    padding: 10px;
    background-color: #b9eee4;
    text-align: center;
  }

  .overflow-container {
    overflow: auto;
    max-height: 350px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }

</style>
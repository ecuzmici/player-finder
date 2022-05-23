<template>
  <div class="results">
    <player-results 
      :selectedPositions="selectedPositions"
      :selectedPlayers="selectedPlayers"
      :allPlayers="allPlayers"
    />
  </div>
</template>

<script>
import PlayerResults from '@/components/PlayerResults.vue'

export default {
  name: "ResultsView",
  components: {
    "player-results": PlayerResults,
  },
  computed: {
    selectedPositions(){
      return this.$store.getters.getSelectedPositions
    },
    selectedPlayers(){
      return this.$store.getters.getSelectedPlayers
    },
    allPlayers() {
      return this.$store.getters.getAllPlayers
    }
  }
}
</script>

<style scoped>
  .results {
    margin: 0%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
</style>
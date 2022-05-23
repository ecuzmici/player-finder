<template>
  <div class="component-container">
    <h3>Search by position</h3>
    <input
      class="search-bar"
      v-model="search"
      type="text"
      @input="onChange"
      multiple
    />
    <div class="results">
      <ul
        class="autocomplete-results"
      >
        <ul
          v-for="(position, i) in this.results"
          :key="i"
          class="player-el"
          @click = "onPositionClick(position)"
        >
          <p> {{position}} </p>
        </ul>
      </ul>
    </div>
  </div>
  <div class="selected-players">
    <ul class="selected-results">
      <ul
        v-for="(position, i) in this.selectedPositions"
        :key="i"
        class="player-el-selected"
        @click = "onSelectedPositionClick(i)"
        >
          <p> {{position}} | x</p>
      </ul>
    </ul>
  </div>
  <div class="footer">
    <router-control 
      path="" 
      buttonType="backward"
      buttonText="Go back"
      :selectedData="selectedPositions"
    >
    </router-control>
    <router-control 
      path="results" 
      buttonType="forward"
      buttonText="Proceed"
      :selectedData="selectedPositions"
    >
    </router-control>
  </div>
</template>

<script>

import RouterControl from "@/components/RouterControl.vue"

export default {
  name: 'PositionFilter',
  props: {
    players: Array
  },
  data() {
    return {
      search: '',
      results: []
    }
  },
  computed:{
    allPositions(){
      return this.$store.getters.getAllPositions
    },
    selectedPositions(){
      return this.$store.getters.getSelectedPositions
    }
  },
  mounted(){
    this.results = this.allPositions.filter(position => {
      return !this.selectedPositions.includes(position)
    })
  },
  components: {
    "router-control": RouterControl
  },
  methods: {
    filterPositions() {
      this.results = this.allPositions.filter(position => {
        return (position.toLowerCase().indexOf(this.search.toLowerCase()) > -1 && !this.selectedPositions.includes(position));
      })
    },
    onChange() {
      this.filterPositions();
    },
    onPositionClick(position) {
      this.selectedPositions.push(position)
      this.$store.commit("setSelectedPositions", this.selectedPositions)
      this.filterPositions();
    },
    onSelectedPositionClick(i) {
      this.selectedPositions.splice(i, 1);
      this.$store.commit("setSelectedPositions", this.selectedPositions)
      this.filterPositions();
    }
  },
};
</script>

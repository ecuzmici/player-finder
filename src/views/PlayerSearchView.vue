<template>
  <div class="home">
    <player-search 
      :players = "this.players"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerSearch from "@/components/PlayerSearch.vue";

export default {
  name: "PlayerSearchView",
  components: {
    "player-search": PlayerSearch,
  },
  mounted() {
    this.$store.dispatch("setAllPlayers");
  },
  computed: {
    players() {
      return this.$store.getters.getAllPlayers;
    }
  }
  // created() {
  //   // watch the params of the route to fetch the data again
  //   this.$watch(
  //     () => this.$route.params,
  //     () => {
  //       this.fetchData()
  //     },
  //     // fetch the data when the view is created and the data is
  //     // already being observed
  //     { immediate: true }
  //   )
  // },
  // methods: {
  //   fetchData() {
  //     this.error = null
  //     this.loading = true
  //     fetch("https://raw.githubusercontent.com/vgshenoy/football-players/master/players.json")
  //       .then(response => response.json())
  //       .then(data => this.players = data)
  //   },
  // },

};
</script>

<style scoped>
  .home {
    margin: 0%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
</style>

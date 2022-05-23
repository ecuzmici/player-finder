<template>
  <div class="filter">
    <position-filter
      :players="selectedPlayers"
    >
    </position-filter>
  </div>
</template>

<script>
import PositionFilter from '@/components/PositionFilter.vue'

export default {
  name: "PositionView",
  components: {
    "position-filter": PositionFilter,
  },
  computed: {
    selectedPlayers() {
      return this.$store.getters.getSelectedPlayers
    }
  }
}
</script>

<style scoped>
  .filter {
    margin: 0%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
</style>

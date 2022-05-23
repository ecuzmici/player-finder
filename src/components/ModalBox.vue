<template>
    <div class="modal-box" v-if="this.chosenPlayer">
      <h2>
        Are you sure you want to choose {{chosenPlayer.name}}?
      </h2>
      <router-control 
        path="results" 
        buttonType="backward"
        buttonText="Go back"
        :selectedData="this.chosenPlayer"
      >
      </router-control>
      <router-control 
        path="" 
        buttonType="confirm"
        buttonText="Confirm"
        :selectedData="this.chosenPlayer"
      >
      </router-control>
    </div>
</template>

<script>

import RouterControl from './RouterControl.vue'

export default {
  name: "ModalBox",
  components: {
    "router-control": RouterControl
  },
  computed: {
    chosenPlayer(){
      return this.$store.getters.getChosenPlayer
    }
  }
}

</script>


<style scoped>

  .modal-box {
    border: 1px solid lightgray;
    border-radius: 40px;
    padding: 10px 30px;
  }

  /* body > *:not(.modal-box-container) {
    filter: blur(1.5rem)
  } */
</style>
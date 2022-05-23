<template>
  <button 
    :class="'button button-' + buttonType"
    role="button"
    @click="redirect"
  >
    {{buttonText}}
  </button>
</template>

<script>


export default {
  name: 'RouterControl',
  props: {
    path: String,
    selectedData: [Array, Object],
    buttonType: String,
    buttonText: String
  },
  methods: {
    redirect() {
      switch (this.buttonType){
        case "backward":
          this.$store.commit("setChosenPlayer", undefined)
          this.$router.push({path: '/' + this.path})
          break;
        
        case "forward":
          if (this.selectedData.length < 1){
            alert("You need to choose at least 1 player.");
          } else {
            this.$router.push({path: '/' + this.path})
          }
          break;
        
        case "confirm":
          this.$store.commit("setAllPositions", [])
          this.$store.commit("setSelectedPositions", [])
          this.$store.commit("setAllPlayers", [])
          this.$store.commit("setSelectedPlayers", [])
          this.$store.commit("setChosenPlayer", undefined)
          this.$router.push({path: '/' + this.path})
          break;

        default:
      }
    }
  }
}

</script>

<style scoped>
  .button-backward {
    background: #FFFFFF;
    box-shadow: #FFFFFF 0 10px 20px -10px;
    color: #4AAE9B;
    outline: 1px solid #4AAE9B;
  }

  .button-forward, .button-confirm {
    background: #4AAE9B;
    box-shadow: #4AAE9B 0 10px 20px -10px;
    color: #FFFFFF;
    outline: 0px solid #FFFFFF;
  }

  .button {
    border-radius: 999px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
    flex-grow: 1;
    margin: 30px;
  }
</style>
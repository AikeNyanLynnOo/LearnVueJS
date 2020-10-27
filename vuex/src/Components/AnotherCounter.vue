<template>
  <div>
    <button @click="increaseCounter(1)">+1</button>
    <button @click="decreaseCounter(1)">-1</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  //   methods: {
  //     increase() {
  //       this.$store.commit("increaseCounter");
  //     },
  //     decrease() {
  //       this.$store.commit("decreaseCounter");
  //     }
  //   }

  methods: {
    ...mapMutations(['increaseCounter','decreaseCounter'])
  }
};
</script>
<style scoped>
</style>
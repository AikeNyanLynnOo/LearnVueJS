<template>
  <div class="result">
    <span>Result : {{counter}}</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters({ counter: types.DOUBLE_COUNTER })
  },
  created() {
    console.log("created");
  },
  updated() {
    console.log("updated");
  }
};
</script>
<style scoped>
</style>
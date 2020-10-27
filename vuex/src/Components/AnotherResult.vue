<template>
  <div class="result">
    <span>Result : {{doubleCounter}}</span>
    <span>Numbers of clicks - {{stringCounter}}</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as CounterTypes from "../store/types";
export default {
  computed: {
    ...mapGetters(
      {
        doubleCounter: CounterTypes.DOUBLE_COUNTER,
        stringCounter: CounterTypes.STRING_COUNTER
      }
    ),
    ownProperty() {
      return;
    }
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
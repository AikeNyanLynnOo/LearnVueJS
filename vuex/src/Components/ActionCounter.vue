<template>
  <div>
    <label>Step size</label>
    <input type="number" v-model.number="step"/>
    <button @click="increaseCounter(step)">Increase</button>
    <button @click="decreaseCounter(step)">Decrease</button>
    <button @click="asyncIncrease({step, duration : 1000})">Async Increase</button>
    <button @click="asyncDecrease({step, duration : 2000})">Async Decrease</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      step : 1
    };
  },
  methods: {
    ...mapActions([
      "increaseCounter",
      "decreaseCounter",
      "asyncIncrease",
      "asyncDecrease"
    ])
  }
};
</script>
<style scoped>
</style>
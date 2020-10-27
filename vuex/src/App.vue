<template>
  <div id="app">
    <app-result></app-result>
    <app-another-result></app-another-result>
    <app-counter></app-counter>
    <hr />
    <app-another-counter></app-another-counter>
    <hr />
    <app-action-counter></app-action-counter>
    <hr />
    <label>Global Value</label>
    <!-- <input type="number" v-model.number="value"/> -->
    <input type="number" :value="value" @input="updateValue" />
    {{value}}
  </div>
</template>

<script>
import Result from "./Components/Result";
import Counter from "./Components/Counter";
import AnotherResult from "./Components/AnotherResult";
import AnotherCounter from "./Components/AnotherCounter";
import ActionCounter from "./Components/ActionCounter";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  },
  components: {
    appResult: Result,
    appCounter: Counter,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter,
    appActionCounter: ActionCounter
  }
};
</script>

<style>
</style>

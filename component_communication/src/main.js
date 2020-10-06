import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    emitChangeAge: function(age) {
      this.$emit("ageWasUpdated", +age);
    }
  }
});

new Vue({
  el: "#app",
  render(h) {
    return h(App);
  }
});

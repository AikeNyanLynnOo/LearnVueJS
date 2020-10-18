import Vue from "vue";
import App from "./App.vue";
import AdvCmp from "./AdvCmp.vue";
import QuotePanel from './QuotePanel.vue';
import AnimationApp from './AnimationApp.vue';

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

new Vue({
  el: "#adv-cmp",
  render(h) {
    return h(AdvCmp);
  }
});

new Vue({
  el : '#main',
  render : h=>{
    return h(QuotePanel);
  }
});

new Vue({
  el : "#animation-app",
  render : h=>{
    return h(AnimationApp);
  }
})


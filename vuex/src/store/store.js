import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import { state, getters, mutations, actions } from "./modules/value";

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    counter: counter,
    value: {
      state,
      getters,
      mutations,
      actions
    }
  }
});

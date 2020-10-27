import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.STRING_COUNTER]: state => {
    return state.counter + "clicks";
  }
};

const mutations = {
  increaseCounter: (state, payload) => {
    state.counter += payload;
  },
  decreaseCounter: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increaseCounter: (context, payload) => {
    context.commit("increaseCounter", payload);
  },
  decreaseCounter: ({ commit }, payload) => {
    commit("decreaseCounter", payload);
  },
  asyncIncrease: ({ commit }, payload) => {
    setTimeout(() => {
      commit("increaseCounter", payload.step);
    }, payload.duration);
  },
  asyncDecrease: ({ commit }, payload) => {
    setTimeout(() => {
      commit("decreaseCounter", payload.step);
    }, payload.duration);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

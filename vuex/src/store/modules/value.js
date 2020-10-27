export const state = {
  value: 1
};
export const getters = {
  getValue: state => {
    return state.value;
  }
};
export const mutations = {
  setValue: (state, payload) => {
    state.value = payload;
  }
};
export const actions = {
  updateValue: ({ commit }, payload) => {
    commit("setValue", payload);
  }
};

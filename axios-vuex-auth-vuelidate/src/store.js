import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    idToken: null,
    user: null,
  },
  mutations: {
    authUser: (state, userData) => {
      state.userId = userData.userId;
      state.idToken = userData.idToken;
    },
    storeUser: (state, user) => {
      state.user = user;
    },
    clearAuthData: (state) => {
      state.userId = null;
      state.idToken = null;
    },
    clearLocalStorage: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("userId");
    },
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
        router.replace("/");
        router.replace("/signin");
      }, expirationTime);
    },
    signup: ({ commit, dispatch, state }, authData) => {
      axios
        .post("/accounts:signUp?key=AIzaSyBWVOmhqV_UsxPe6caQoJ8PbII4mptDPm8", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log("response", res);
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
          });
          // console.log("state", state);
          const now = new Date();
          const expiresIn = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expiresIn", expiresIn);
          dispatch("storeUserInDb", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signout: ({ commit }) => {
      commit("clearAuthData");
      commit("clearLocalStorage");
      // direct replace of route throws NavigateDuplication Error - but still works
      router.replace("/");
      router.push("/signin");
    },
    signin: ({ commit, dispatch }, authData) => {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyBWVOmhqV_UsxPe6caQoJ8PbII4mptDPm8",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
          });
          const now = new Date();
          const expiresIn = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expiresIn", expiresIn);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    storeUserInDb: ({ commit, state }, userData) => {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUser: ({ commit, state }) => {
      if (!state.idToken) {
        return;
      }
      const response = globalAxios.get(
        "/users.json" + "?auth=" + state.idToken
      );
      response
        .then((res) => {
          const users = [];
          for (let key in res.data) {
            const user = res.data[key];
            user.id = key;
            users.push(user);
          }
          commit("storeUser", users[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    tryAutoLogin: ({ commit, dispatch }) => {
      const idToken = localStorage.getItem("token");

      if (!idToken) {
        return;
      }
      const expiresIn = localStorage.getItem("expiresIn");
      const userId = localStorage.getItem("userId");
      const now = new Date();

      if (now >= expiresIn) {
        return;
      }
      commit("authUser", {
        idToken,
        userId,
      });
      router.push("/dashboard");
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    isAuthenticated: (state) => {
      return state.idToken ? true : false;
    },
  },
});

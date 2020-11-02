import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://vue-test-95330.firebaseio.com";
// axios.defaults.headers.common["Athorization"] = "asdkfj";
// axios.defaults.headers.get["Accepts"] = ["application/json", "text/html"];

const reqInterceptorId = axios.interceptors.request.use((config) => {
  console.log("request coming", config);
  return config;
});

const resInterceptorId = axios.interceptors.response.use((res) => {
  console.log("response coming", res);
  return res;
});

// removing the interceptors
axios.interceptors.request.eject(reqInterceptorId);
axios.interceptors.response.eject(resInterceptorId);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});

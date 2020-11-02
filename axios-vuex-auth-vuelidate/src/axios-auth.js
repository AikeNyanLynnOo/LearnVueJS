import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

// instance.defaults.headers.common["Creating-account"] = true;
export default instance;

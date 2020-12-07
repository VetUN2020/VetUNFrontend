import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import userMenuBar from "./modules/userMenuBar";

axios.defaults.baseURL = "http://localhost:9000/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    MenuBar: userMenuBar,
  },
});

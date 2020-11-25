import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import loginDuenoModule from "./modules/loginDueno";
import loginMedicoModule from "./modules/loginMedico";
import userMenuBar from "./modules/userMenuBar";
import perfilDuenoModule from "./modules/perfilDueno"

axios.defaults.baseURL = "http://localhost:9000/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Dueno: loginDuenoModule,
    Medico: loginMedicoModule,
    MenuBar: userMenuBar,
    PerfilDueno: perfilDuenoModule
  },
});

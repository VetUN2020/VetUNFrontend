import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:9000/api/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userD : null,
    authD : false,
    userNF : false,
  },
  mutations: {
    SET_USER(state, user){
      state.userD = user;
      state.authD = true;
      state.userNF = false;
    },
    OUT_USER(state){
      state.userD = null;
      state.authD = false;
      state.userNF = false;
    }
  },
  actions: {
    async signInDueno({dispatch}, credentials){
      await axios.post("duenos/login", credentials).then(res =>{
        dispatch('setUserDueno', res.data);
      }).catch(() => {
        dispatch('setUserDueno', null);
        this.state.userNF = true;
      })      
    },
    async setUserDueno({commit}, user){
      commit('SET_USER', user)
    },
    async signOutDueno({dispatch}){
      dispatch('outUserDueno');
    },
    async outUserDueno({commit}){
      commit('OUT_USER');
    }
  },
  modules: {
  }
})

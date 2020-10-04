import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:9000/api/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userD : null,
    authD : false,
  },
  mutations: {
    SET_USER(state, user){
      state.userD = user;
      state.authD = true;
    }
  },
  actions: {
    
    async signIn({dispatch}, credentials){
      await axios.post("duenos/login", credentials).then(res =>{
        dispatch('setUser', res.data);
      }).catch(() => {
        dispatch('setUser', null);
      })      
    },

    async setUser({commit}, user){
      commit('SET_USER', user)
    }

  },
  modules: {
  }
})

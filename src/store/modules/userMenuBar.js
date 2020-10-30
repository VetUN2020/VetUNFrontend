import axios from "axios";
export default {
  namespaced: true,
  state: {
    userAuth: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.userAuth = user;
    },
    OUT_USER(state) {
      state.userAuth = null;
    },
  },
  actions: {
    saveUserMenuBar({ commit }) {
      axios
        .get("usuario", {
          params: {
            access_token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit("SET_USER", res.data);
        })
        .catch(() => {
          commit("OUT_USER");
        });
    },

    outUserMenuBar({ commit }) {
      commit("OUT_USER");
    },
  },
};

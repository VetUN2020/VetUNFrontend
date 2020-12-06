import axios from "axios";
export default {
  namespaced: true,
  state: {
    userAuth: null,
    scroll: {
      scrollT: false,
      scrollM: false,
      scrollF: true,
      scrollL: false,
    },
    homePage: true,
  },
  mutations: {
    SET_USER(state, user) {
      state.userAuth = user;
    },
    OUT_USER(state) {
      state.userAuth = null;
    },
    NAV_INVISIBLE(state) {
      state.scroll.scrollT = false;
      state.scroll.scrollM = false;
      state.scroll.scrollF = true;
      state.scroll.scrollL = false;
      state.homePage = true;
    },
    NAV_MINI_SCROLL(state) {
      state.scroll.scrollT = false;
      state.scroll.scrollM = true;
      state.scroll.scrollF = false;
      state.scroll.scrollL = false;
    },
    NAV_FULL_SCROLL(state) {
      state.scroll.scrollT = true;
      state.scroll.scrollM = false;
      state.scroll.scrollF = false;
      state.scroll.scrollL = false;
    },
    NAV_DARK_SCROLL(state) {
      state.scroll.scrollT = false;
      state.scroll.scrollM = false;
      state.scroll.scrollF = false;
      state.scroll.scrollL = true;
      state.homePage = false;
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

    MenuBarInvisible({ commit }) {
      commit("NAV_INVISIBLE");
    },
    MenuBarMiniScroll({ commit }) {
      commit("NAV_MINI_SCROLL");
    },
    MenuBarFullScroll({ commit }) {
      commit("NAV_FULL_SCROLL");
    },
    MenuBarDark({ commit }) {
      commit("NAV_DARK_SCROLL");
    },
  },
};

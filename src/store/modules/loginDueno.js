import axios from 'axios'
export default {
    namespaced: true,
    state: {
        userD: null,
        authD: false,
        userNF: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.userD = user;
            state.authD = true;
            state.userNF = false;
        },
        OUT_USER(state) {
            state.userD = null;
            state.authD = false;
            state.userNF = false;
        },
        USER_NF(state) {
            state.userNF = true;
        }
    },
    actions: {
        async signInDueno({
            dispatch
        }, credentials) {
            await axios.post("duenos/login/", credentials).then(res => {
                dispatch('setUserDueno', res.data);
            }).catch(() => {
                dispatch('userFail');
            })
        },
        async setUserDueno({
            commit
        }, user) {
            commit('SET_USER', user)
        },
        async signOutDueno({
            dispatch
        }) {
            dispatch('outUserDueno');
        },
        async outUserDueno({
            commit
        }) {
            commit('OUT_USER');
        },
        async userFail({
            commit
        }) {
            commit('USER_NF');
        }
    }
}
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        userM: null,
        authM: false,
        userNF: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.userM = user;
            state.authM = true;
            state.userNF = false;
        },
        OUT_USER(state) {
            state.userM = null;
            state.authM = false;
            state.userNF = false;
        },
        USER_NF(state) {
            state.userNF = true;
        }
    },
    actions: {
        async signInMedico({
            dispatch
        }, credentials) {
            await axios.post("medicos/login", credentials).then(res => {
                dispatch('setUserMedico', res.data);
            }).catch(() => {
                dispatch('userFail');
            })
        },
        async setUserMedico({
            commit
        }, user) {
            commit('SET_USER', user)
        },
        async signOutMedico({
            dispatch
        }) {
            dispatch('outUserMedico');
        },
        async outUserMedico({
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
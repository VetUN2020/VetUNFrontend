import DuenoService from "@/service/DuenoService";

export default {
    namespaced: true,
    duenoService: null,
    state: {
        currentPerfil: {}
    },
    mutations: {
        setCurrentPerfil(state, user){
            state.currentPerfil = user
        }
    },
    getters:{
        currentPerfil: state => state.currentPerfil
    },
    actions: {        
       setPerfil(context){
          this.duenoService = new DuenoService();
          this.duenoService.obtenerPerfil().then((response) => {
            context.commit("setCurrentPerfil", response.data);
          });          
       }
    }
}
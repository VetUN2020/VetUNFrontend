import axios from 'axios';

export default class MedicoService {

    getAll() {
        return axios.get("medicos");
    }

    agregarMedico(medico) {
        return axios.post("medicos", medico);
    }

    login(medico) {
        return axios.post("medicos/login", medico);
    }

    verificarCorreo(medico) {
        return axios.post("medicos/registro", medico);
    }

}
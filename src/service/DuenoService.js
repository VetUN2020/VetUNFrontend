import axios from 'axios';

export default class DuenoService {

    getAll() {
        return axios.get("duenos");
    }

    agregarDueno(dueno) {
        return axios.post("duenos", dueno);
    }

    login(dueno){
        return axios.post("duenos/login", dueno);
    }
}
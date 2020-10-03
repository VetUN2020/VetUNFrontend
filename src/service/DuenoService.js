import axios from 'axios';

export default class DuenoService {

    url = "http://localhost:9000/api/";

    getAll() {
        return axios.get(this.url + "duenos");
    }

    agregarDueno(dueno) {
        return axios.post(this.url + "duenos", dueno);
    }
}
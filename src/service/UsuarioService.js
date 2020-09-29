import axios from 'axios';

export default class UsuarioService {

    url = "http://localhost:9000/api/";

    getAll() {
        return axios.get(this.url + "users");
    }
}
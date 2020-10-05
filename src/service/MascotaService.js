import axios from 'axios';

export default class MascotaService {

    getAll() {
        return axios.get("mascotas");
    }

    agregarMascota(mascota) {
        return axios.post("mascotas", mascota);
    }

}
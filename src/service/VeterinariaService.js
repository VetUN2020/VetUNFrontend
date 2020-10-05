import axios from 'axios';

export default class VeterinariaService {

    getAll() {
        return axios.get("veterinarias");
    }

    agregarVeterinaria(veterinaria) {
        return axios.post("veterinarias", veterinaria);
    }

}
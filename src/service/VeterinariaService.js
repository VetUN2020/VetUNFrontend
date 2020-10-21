import axios from 'axios';

export default class VeterinariaService {

    data(){
        return {
            veterinariasDisponibles: null
        }
    }

    getAll() {
        return axios.get("veterinarias");
    }

    agregarVeterinaria(veterinaria) {
        return axios.post("veterinarias", veterinaria);
    }

    getVeterinaryNames() {
        return axios.get("veterinarias/name");
    }

    getVeterinaria(idVeterinary) {
        return axios.get("veterinarias/" + idVeterinary);
    }

}
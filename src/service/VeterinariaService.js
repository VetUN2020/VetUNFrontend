import axios from "axios";

export default class VeterinariaService {
  data() {
    return {
      veterinariasDisponibles: null,
    };
  }

  getAll() {
    return axios.get("veterinarias");
  }

  agregarVeterinaria(veterinaria) {
    return axios.post("usuario/registro-veterinaria", veterinaria, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  getVeterinaryNames() {
    return axios.get("veterinarias/name");
  }

  getVeterinaria(idVeterinary) {
    return axios.get("veterinarias/" + idVeterinary);
  }

  obtenerPerfil() {
    return axios.get("medico/perfil-veterinaria", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  actualizarMedico(veterinaria) {
    return axios.put("medico/actualizar-medico", veterinaria, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  getCalificaciones(idVeterinaria) {
    return axios.get("calificaciones/veterinaria/" + idVeterinaria);
  }

  agregarComentario(comentario) {
    return axios.post("dueno/calificar/veterinaria", comentario, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }
}

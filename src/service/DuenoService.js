import axios from "axios";

export default class DuenoService {
  getAll() {
    return axios.get("duenos");
  }

  agregarDueno(duenoPOJO) {
    return axios.post("registro/nuevo-dueno/", duenoPOJO);
  }

  login(dueno) {
    return axios.post("duenos/login", dueno);
  }

  verificarCorreo(dueno) {
    return axios.post("duenos/registro", dueno);
  }

  obtenerPerfil() {
    return axios.get("dueno/perfil", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  agendarCitaMascota(cita) {
    return axios.post("usuario/agendarCita", cita, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    })
  }
}
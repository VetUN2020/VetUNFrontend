import axios from "axios";

export default class DuenoService {
  getAll() {
    return axios.get("duenos");
  }

  agregarDueno(duenoPOJO, response) {
    return axios.post("registro/nuevo-dueno/", duenoPOJO, {params: {response: response}});
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

  async obtenerMisCitas() {
    return await axios.get("dueno/misCitas", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    })
  }
}
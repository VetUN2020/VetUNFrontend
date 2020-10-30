import axios from "axios";

export default class MedicoService {
  getAll() {
    return axios.get("medicos");
  }

  agregarMedico(medico) {
    return axios.post("registro/nuevo-medico/", medico);
  }

  login(medico) {
    return axios.post("medicos/login", medico);
  }

  verificarCorreo(medico) {
    return axios.post("medicos/registro", medico);
  }

  obtenerPerfil() {
    return axios.get("medico/perfil", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  agregarHorario(listaHoras) {
    return axios.put("medico/agregarHora", listaHoras, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  obtenerHoras() {
    return axios.get("pruebas/horasDisponibles");
  }
}

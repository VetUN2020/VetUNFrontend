import axios from "axios";

export default class MedicoService {
  getAll() {
    return axios.get("medicos");
  }

  agregarMedico(medico, response) {
    return axios.post("registro/nuevo-medico/", medico, {params: {response: response}});
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

  getMedico(medico) {
    return axios.get("medicos/" + medico);
  }

  agregarHorario(listaHoras) {
    return axios.put("medico/agregarHora", listaHoras, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  medicosSegunVeterinaria(Idveterinaria) {
    return axios.get("medicoIdVet/" + Idveterinaria);
  }

  obtenerHorasDisponibles(fecha) {
    return axios.post("usuario/horasDisponibles", fecha, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  obtenerTiposAtencion(idMedico) {
    return axios.get("usuario/costos/" + idMedico, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  agregarPreciosCitas(listaCostos) {
    return axios.post("medico/agregarPrecios", listaCostos, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  async obtenerMisCitas() {
    return await axios.get("medico/misCitas", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  getCalificaciones(idMedico) {
    return axios.get("calificaciones/medico/" + idMedico);
  }

  agregarComentario(comentario) {
    return axios.post("dueno/calificar/medico", comentario, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }
}

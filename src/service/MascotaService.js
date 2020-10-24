import axios from "axios";

export default class MascotaService {
  getAll() {
    return axios.get("mascotas");
  }

  agregarMascota(mascota) {
    return axios.post("dueno/registro-mascota", mascota, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }

  getByIdDueno(idDueno) {
    return axios.get("mascotas/byIdDueno/" + idDueno);
  }

  getMascotaById(idMascota) {
    return axios.get("mascotas/" + idMascota);
  }
}

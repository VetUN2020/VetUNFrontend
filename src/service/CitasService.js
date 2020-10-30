import axios from "axios";

export default class CitasService {
  getAll() {
    return axios.get("citas");
  }

  agregarCita(cita) {
    return axios.post("citas", cita);
  }

  findById(id) {
    return axios.get("citas/byCitaId/", id);
  }

  findByFecha(fecha) {
    return axios.get("citas/byDate/", fecha);
  }

  findByIdMascota(idMascota) {
    return axios.get("citas/byIdMascota/", idMascota);
  }

  findByVeterinaryAndDate(idVeterinary, fecha) {
    return axios.get("citas/ByVeterinaryAndDate/", idVeterinary, "/", fecha);
  }

  findByVeterinary(idVeterinary) {
    return axios.get("citas/ByVeterinary/", idVeterinary);
  }

  checkAvailabilityByDateAndIdVeterinary(fecha, idVeterinary) {
    return axios.get("/citas/Availability/" + fecha + "/" + idVeterinary);
  }
}

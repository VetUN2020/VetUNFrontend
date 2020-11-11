<template>
  <div class="agendarCitaMascota">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Agendar cita </template>
      <template slot="content">
        <h6 style="text-align: center; margin-bottom: 15px">
          Elige la fecha de la consulta
        </h6>
        <Calendar
          v-on:date-select="obtenerHoras"
          v-model="fecha.fechaCita"
          dateFormat="dd.mm.yy"
          :disabledDays="[0]"
          style="
        margin: 0 auto;
        text-align: center;
        width: 18rem;
      "
        />
        <br /><br />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elige la hora
        </h6>
        <Dropdown
          v-model="cita.horaCita"
          :options="horasDisponibles"
          optionLabel="horaTexto"
          placeholder="Selecciona una hora"
        />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elige la mascota
        </h6>
        <Dropdown
          v-model="cita.idMascota"
          :options="misMascotas"
          optionLabel="nombreMascota"
          placeholder="Selecciona una de tus mascotas"
        />
        <br />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elegir tipo de atención
        </h6>
        <Dropdown
          v-model="cita.idAtencion"
          :options="tiposAtenciones"
          optionLabel="descripcionAtencion"
          placeholder="Selecciona tipo de atención"
        />
      </template>
      <template slot="footer">
        <Button
          label="Agendar cita"
          class="p-button-rounded p-button-success"
          @click="agendarCita"
        />
      </template>
    </Card>
    <Message severity="error" v-if="datosFaltantes">{{
      datosFaltantes
    }}</Message>
  </div>
</template>

<script>
import MascotaService from "@/service/MascotaService";
import MedicoService from "@/service/MedicoService";
import DuenoService from "@/service/DuenoService";

export default {
  name: "agendarCitaMascota",
  data() {
    return {
      displayBasic: false,
      misMascotas: null,
      mascotaSeleccionada: null,
      citaSeleccionada: null,
      datosFaltantes: null,
      tiposAtenciones: null,
      horasDisponibles: null,
      cita: {
        idMedico: {
          idMedico: null,
        },
        idMascota: null,
        idAtencion: null,
        fechaCita: null,
        horaCita: null,
        modalidadCita: "Presencial",
      },
      fecha: {
        fechaCita: null,
        idMedico: null,
      },
    };
  },
  mascotaService: null,
  medicoService: null,
  DuenoService: null,
  methods: {
    obtenerHoras() {
      this.cita.fechaCita = this.fecha.fechaCita;
      let dia = this.fecha.fechaCita.getDate();
      let mes = this.fecha.fechaCita.getMonth();
      let ano = this.fecha.fechaCita.getFullYear();
      if (dia <= 9) {
        this.fecha.fechaCita = ano + "-" + mes + "-0" + dia;
      } else {
        this.fecha.fechaCita = ano + "-" + mes + "-" + dia;
      }

      this.medicoService = new MedicoService();
      this.medicoService
        .obtenerHorasDisponibles(this.fecha)
        .then((response) => {
          if (response.status === 200) {
            this.horasDisponibles = response.data;
          }
        });
    },
    agendarCita() {
      this.cita.horaCita = this.cita.horaCita.horaTiempo;
      console.log(this.cita);
      this.DuenoService = new DuenoService();
      this.DuenoService.agendarCitaMascota(this.cita).then((response) => {
        if (response.status === 200) {
          (this.fecha = {
            fechaCita: null,
            idMedico: null,
          }),
            (this.cita = {
              idMedico: {
                idMedico: null,
              },
              idMascota: null,
              idAtencion: null,
              fechaCita: null,
              horaCita: null,
            });
        }
      });
    },
  },
  created() {
    this.mascotaService = new MascotaService();
    this.mascotaService.getMascotasDueno().then((response) => {
      if (response.status === 200) {
        this.misMascotas = response.data;
      }
    });
    this.fecha.idMedico = this.$route.query.idMedico;
    this.cita.idMedico.idMedico = this.$route.query.idMedico;

    this.medicoService = new MedicoService();
    this.medicoService.obtenerTiposAtencion().then((response) => {
      if (response.status === 200) {
        this.tiposAtenciones = response.data;
      }
    });
  },
  openBasic() {
    this.displayBasic = true;
  },
  closeBasic() {
    this.displayBasic = false;
  },
};
</script>

<style scoped>
.p-dropdown {
  width: 18rem;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 15px;
  text-align: left;
}
</style>

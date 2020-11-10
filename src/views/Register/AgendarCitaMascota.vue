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
          @click="verFecha"
          v-model="fechaCita"
          dateFormat="dd.mm.yy"
          :disabledDays="[0]"
          style="
        margin: 0 auto;
        text-align: center;
        width: 18rem;
      "/>
        <br /><br />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elige la hora
        </h6>
        <Dropdown
          v-model="horaSeleccionada"
          :options="horasDisponibles"
          optionLabel="horaTexto"
          placeholder="Selecciona una hora"
        />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elige la mascota
        </h6>
        <Dropdown
          v-model="mascotaSeleccionada"
          :options="misMascotas"
          optionLabel="nombreMascota"
          placeholder="Selecciona una de tus mascotas"
        />
        <br />
        <h6 style="text-align: center; margin-bottom: 15px">
          Elegir tipo de consulta
        </h6>
        <Dropdown
          v-model="citaSeleccionada"
          :options="tiposCitas"
          optionLabel="name"
          placeholder="Selecciona tipo de consulta"
        />
      </template>
      <template slot="footer">
        <Button
          label="Agendar cita"
          class="p-button-rounded p-button-success"
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

export default {
  name: "agendarCitaMascota",
  data() {
    return {
      displayBasic: false,
      fechaCita: null,
      misMascotas: null,
      mascotaSeleccionada: null,
      citaSeleccionada: null,
      datosFaltantes: null,
      horaSeleccionada: null,
      tiposCitas: [{ name: "Consulta" }, { name: "Cirugia" }],
      horasDisponibles: null,
      cita: {
        idMedico: {
          idMedico: "1",
        },
        idMascota: null,
        idAtencion: {
          idAtencion: "1",
        },
        fechaCita: null,
        modalidadCita: "Presencial",
      },
    };
  },
  mascotaService: null,
  medicoService: null,
  methods: {
    verFecha() {
      /*this.fechaCita.setHours(this.horaSeleccionada.hour);
      this.fechaCita.setMinutes(this.horaSeleccionada.minutes);
      console.log(this.fechaCita);
      console.log(this.horaSeleccionada);*/
      // this.fechaCita.setDate(15);
      // console.log(this.fechaCita);
      // console.log(this.fechaCita.getDate());
      console.log(this.horasDisponibles);
    },
  },
  created() {
    this.mascotaService = new MascotaService();
    this.mascotaService.getMascotasDueno().then((response) => {
      if (response.status === 200) {
        this.misMascotas = response.data;
      }
    });

    this.medicoService = new MedicoService();
    this.medicoService.obtenerHoras().then((response) => {
      if (response.status === 200) {
        this.horasDisponibles = response.data;
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

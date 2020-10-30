<template>
  <div class="agregarHorario">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"
        >Agregue sus horarios disponibles para citas</template
      >
      <template slot="content">
        <div class="p-field p-grid">
          <MultiSelect
            v-model="selectedHours"
            :options="hours"
            optionLabel="horaTexto"
            placeholder="Seleccion horas"
          />
        </div>
        <br />
      </template>
      <template slot="footer">
        <Button label="Agregar" @click="agregar" icon="pi pi-check" />
      </template>
    </Card>
    <Message severity="error" v-if="datosFaltantes">{{
      datosFaltantes
    }}</Message>
  </div>
</template>

<script>
import MedicoService from "@/service/MedicoService";
//import axios from "axios";

export default {
  name: "agregarHorario",
  data() {
    return {
      datosIncorrectos: null,
      selectedHours: null,
      hours: [],
      datosFaltantes: null,
    };
  },
  medicoService: null,
  created() {
    for (let i = 8; i <= 17; i++) {
      let minutos = ["00", "30"];
      let hora1 = i + ":" + minutos[0];
      let hora2 = i + ":" + minutos[1];
      let horario1 = { horaTexto: hora1, horaTiempo: hora1 + ":00" };
      let horario2 = { horaTexto: hora2, horaTiempo: hora2 + ":00" };
      this.hours.push(horario1);
      this.hours.push(horario2);
    }
    this.medicoService = new MedicoService();
  },
  methods: {
    agregar() {
      if (this.selectedHours != null) {
        this.medicoService.agregarHorario(this.selectedHours).then((data) => {
          if (data.status === 201) {
            console.log(data);
          }
        });
        this.$router.push("/");
      } else {
        this.datosFaltantes = "Seleccione alguna hora";
      }
    },
  },
};
</script>

<style>
.p-multiselect {
  min-width: 10rem;
}
</style>

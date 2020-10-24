<template>
  <div class="agendarCitaMascota">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 30rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Agendar cita </template>
      <template slot="content">
        <Calendar
          v-model="fechaCita"
          dateFormat="dd.mm.yy"
          :disabledDays="[0]"
        />
        <br />
        <b-button variant="success" size="sm" @click="verFecha"
          >Prueba</b-button
        >
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "agendarCitaMascota",
  data() {
    return {
      fechaCita: null,
    };
  },
  methods: {
    verFecha() {
      console.log(this.fechaCita);
      this.fechaCita.setDate(15);
      console.log(this.fechaCita);
      console.log(this.fechaCita.getDate());
    },
  },
};
</script>

<style></style>

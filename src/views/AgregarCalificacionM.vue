<template>
  <div class="calificacion">
    <br />
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Califica al Veterinario </template>
      <template slot="content">
        <h6 style="text-align: left">Danos un breve comentario:</h6>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="Comentario"
              type="text"
              v-model="comentario.comentarioM"
              style="width: 100%"
            />
            <label for="username">Comentario</label>
          </span>
        </div>
        <br />
        <h6 style="text-align: left">Calificacion</h6>

        <!-- <Dropdown
          v-model="comentario.puntuacionM"
          :options="puntuaciones"
          optionLabel="name"
          placeholder="Calificacion"
        /> -->
        <Rating v-model="comentario.puntuacionM" :stars="5" />
      </template>
      <template slot="footer">
        <Button
          label="Registrarse"
          class="p-button-rounded p-button-success"
          @click="save"
        />
      </template>
    </Card>
    <Message severity="error" v-if="datosFaltantes">{{
      datosFaltantes
    }}</Message>
  </div>
</template>

<script>
// @ is an alias to /src
import MedicoService from "@/service/MedicoService";

export default {
  name: "AgregarCalificacion",
  data() {
    return {
      comentario: {
        idDueno: {
          idDueno: null,
        },
        idMedico: {
          idMedico: parseInt(this.$route.query.idMedico),
        },
        comentarioM: null,
        puntuacionM: null,
      },
      puntuaciones: [
        { name: 0 },
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
      ],
      datosFaltantes: null,
    };
  },
  medicoService: null,
  created() {
    this.medicoService = new MedicoService();
    this.datosFaltantes = null;
  },
  methods: {
    save() {
      if (this.comentario.comentarioM) {
        this.medicoService.agregarComentario(this.comentario).then((data) => {
          if (data.status === 201) {
            this.$router.push("/");
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Calificacion registrada correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        this.datosFaltantes = "Datos faltantes";
      }
    },
  },
};
</script>

<style scoped>
.p-dropdown {
  width: 23rem;
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 15px;
  text-align: left;
}
</style>

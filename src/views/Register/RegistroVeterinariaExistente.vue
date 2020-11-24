<template>
  <div class="registroVeterinariaExistente">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    > 
      <template slot="title"> Busca tu Veterinaria</template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
              <Listbox class="p-listbox-list-wrapper" v-model="veterinariaSeleccionada" :options="veterinarias" optionLabel="nombreVeterinaria" :filter="true"/>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button
          label="Registrar"
          class="p-button-rounded p-button-success"
          @click="save"
        />
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import VeterinariaService from "../../service/VeterinariaService";

export default {
  name: "registroVeterinariaExistente",
  veterinariaService: null,
  data() {
    return {
    veterinariaSeleccionada: null,
		veterinarias: []
    };
  },
  created() {
    this.veterinariaService = new VeterinariaService();
  },
  methods: {
    async save() {
      if (this.veterinariaSeleccionada) {
        await this.veterinariaService
          .actualizarMedico(this.veterinariaSeleccionada)
          .then((data) => {
            if (data.status === 200) {
              this.veterinariaSeleccionada = null
            }
          });
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Te has registrado correctamente a tu veterinaria",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/");
      } else {
        this.error = "Selecciona una veterinaria por favor";
      }
    }
  },
  mounted(){
    this.veterinariaService
          .getAll()
          .then((data) => {
            if (data.status === 200) {
              this.veterinarias = data.data;
            }
          });
  }
};
</script>

<style scoped>
.p-listbox-list-wrapper{
  text-align: left;
}
</style>

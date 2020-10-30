<template>
  <div class="veterinary">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Registra tu Veterinaria</template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="nombreVeterinaria"
              type="text"
              v-model="veterinaria.nombreVeterinaria"
              style="width: 100%"
            />
            <label for="username">Nombre Veterinaria</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="direccion"
              type="text"
              v-model="veterinaria.direccionVeterinaria"
              style="width: 100%"
            />
            <label for="username">Direccion</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="telefono"
              type="text"
              v-model="veterinaria.telefonoVeterinaria"
              style="width: 100%"
            />
            <label for="username">Telefono</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="tipo"
              type="text"
              v-model="veterinaria.tipoVeterinaria"
              style="width: 100%"
            />
            <label for="username">Tipo de Veterinaria</label>
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
    <Message severity="error" :sticky="false" v-if="error">{{ error }}</Message>
  </div>
</template>

<script>
import VeterinariaService from "../../service/VeterinariaService";

export default {
  veterinariaService: null,
  created() {
    this.veterinariaService = new VeterinariaService();
  },
  name: "Veterinary",
  data() {
    return {
      veterinaria: {
        nombreVeterinaria: null,
        direccionVeterinaria: null,
        telefonoVeterinaria: null,
        tipoVeterinaria: null,
      },
      error: null,
    };
  },
  components: {},
  methods: {
    async save() {
      if (
        this.veterinaria.nombreVeterinaria &&
        this.veterinaria.direccionVeterinaria &&
        this.veterinaria.telefonoVeterinaria &&
        this.veterinaria.tipoVeterinaria
      ) {
        await this.veterinariaService
          .agregarVeterinaria(this.veterinaria)
          .then((data) => {
            if (data.status === 201) {
              console.log(data);
            }
          });

        await this.veterinariaService
          .actualizarMedico(this.veterinaria)
          .then((data) => {
            if (data.status === 200) {
              this.veterinaria = {
                nombreVeterinaria: null,
                direccionVeterinaria: null,
                telefonoVeterinaria: null,
                tipoVeterinaria: null,
              };
            }
          });

        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Has registrado correctamente tu veterinaria",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/");
      } else {
        this.error = "Todos los campos son obligatorios";
      }
    },
  },
};
</script>

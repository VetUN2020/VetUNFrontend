<template>
  <div class="registro">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Registro </template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="cedula"
              type="text"
              v-model="dueno.cedulaDueno"
              style="width: 100%"
            />
            <label for="username">Cedula</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="nombre"
              type="text"
              v-model="dueno.nombreDueno"
              style="width: 100%"
            />
            <label for="username">Nombre</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="apellido"
              type="text"
              v-model="dueno.apellidoDueno"
              style="width: 100%"
            />
            <label for="username">Apellido</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="telefono"
              type="text"
              v-model="dueno.telefonoDueno"
              style="width: 100%"
            />
            <label for="username">Telefono</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="direccion"
              type="text"
              v-model="dueno.direccionCasa"
              style="width: 100%"
            />
            <label for="username">Direccion</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="correo"
              type="text"
              v-model="dueno.correoElectronico"
              style="width: 100%"
            />
            <label for="username">Correo electronico</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="username"
              v-model="dueno.contraseniaDueno"
              style="width: 100%"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <router-link to="/login"
          ><Button
            label="Registrarse"
            class="p-button-rounded p-button-success"
            @click="save"
        /></router-link>
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import DuenoService from "../service/DuenoService";

export default {
  name: "Registro",
  data() {
    return {
      dueno: {
        cedulaDueno: null,
        nombreDueno: null,
        apellidoDueno: null,
        telefonoDueno: null,
        direccionCasa: null,
        correoElectronico: null,
        contraseniaDueno: null,
      },
    };
  },
  duenoService: null,
  created() {
    this.duenoService = new DuenoService();
  },
  methods: {
    save() {
      this.duenoService.agregarDueno(this.dueno).then((data) => {
        if (data.status === 200) {
          this.dueno = {
            cedulaDueno: null,
            nombreDueno: null,
            apellidoDueno: null,
            telefonoDueno: null,
            direccionCasa: null,
            correoElectronico: null,
            contraseniaDueno: null,
          };
        }
      });
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Te has registrado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style scoped>
</style>



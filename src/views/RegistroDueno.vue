<template>
  <div class="registroDueno">
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
            <InputNumber
              id="cedula"
              v-model="dueno.cedulaDueno"
              mode="decimal"
              :useGrouping="false"
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
            <InputNumber
              id="telefono"
              v-model="dueno.telefonoDueno"
              mode="decimal"
              :useGrouping="false"
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
            <label for="correo">Correo electronico</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="contrasenia"
              v-model="dueno.contraseniaDueno"
              style="width: 100%"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button
          label="Registrarse"
          class="p-button-rounded p-button-success"
          @click="save"
        />
      </template>
    </Card>
    <Message severity="error" :life="3000" :sticky="false" v-if="error">{{
      error
    }}</Message>
    <Message
      severity="error"
      :life="3000"
      :sticky="false"
      v-if="correoExistente"
      >{{ correoExistente }}</Message
    >
  </div>
</template>

<script>
// @ is an alias to /src
import DuenoService from "../service/DuenoService";

export default {
  name: "RegistroDueno",
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
      error: null,
      correoExistente: null,
    };
  },
  duenoService: null,
  created() {
    this.duenoService = new DuenoService();
  },
  methods: {
    save() {
      if (
        this.dueno.cedulaDueno &&
        this.dueno.nombreDueno &&
        this.dueno.apellidoDueno &&
        this.dueno.telefonoDueno &&
        this.dueno.direccionCasa &&
        this.dueno.correoElectronico &&
        this.dueno.contraseniaDueno
      ) {
        this.duenoService.verificarCorreo(this.dueno).then((data) => {
          if (data.data === true) {
            this.correoExistente = "Ya hay un usuario con este correo";
          } else {
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
                this.$swal({
                  position: "top-end",
                  icon: "success",
                  title: "Te has registrado correctamente",
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.$router.push("/loginDueno");
              }
            });
          }
        });
      } else {
        this.error = "Todos los campos son obligatorios";
      }
    },
  },
};
</script>

<style scoped>
</style>



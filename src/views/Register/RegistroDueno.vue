<template>
  <div class="registroDueno fondo">
    <!-- <br /><br /> -->
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 27rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Registro </template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="username"
              type="text"
              v-model="duenoPOJO.username"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="username">Nombre de usuario</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputNumber
              id="cedula"
              v-model="duenoPOJO.cedulaDueno"
              mode="decimal"
              :useGrouping="false"
              style="width: 100%"
              @click="borrarErrores"
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
              v-model="duenoPOJO.nombreDueno"
              style="width: 100%"
              @click="borrarErrores"
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
              v-model="duenoPOJO.apellidoDueno"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="username">Apellido</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputNumber
              id="telefono"
              v-model="duenoPOJO.telefonoDueno"
              mode="decimal"
              :useGrouping="false"
              style="width: 100%"
              @click="borrarErrores"
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
              v-model="duenoPOJO.direccionDueno"
              style="width: 100%"
              @click="borrarErrores"
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
              v-model="duenoPOJO.correoElectronico"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="correo">Correo electronico</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="contrasenia"
              v-model="duenoPOJO.password"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="verificar-contrasenia"
              v-model="pass"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="verificar-contrasenia"
              >Ingrese otra vez la contraseña</label
            >
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
import DuenoService from "@/service/DuenoService";

export default {
  name: "RegistroDueno",
  data() {
    return {
      duenoPOJO: {
        username: null,
        password: null,
        correoElectronico: null,
        cedulaDueno: null,
        nombreDueno: null,
        apellidoDueno: null,
        telefonoDueno: null,
        direccionDueno: null,
      },
      pass: null,
      error: null,
      correoExistente: null,
    };
  },
  duenoService: null,
  created() {
    this.duenoService = new DuenoService();
  },
  mounted() {
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
  methods: {
    borrarErrores() {
      this.error = null;
      this.correoExistente = null;
    },
    save() {
      if (
        this.duenoPOJO.username &&
        this.duenoPOJO.password &&
        this.duenoPOJO.correoElectronico &&
        this.duenoPOJO.cedulaDueno &&
        this.duenoPOJO.nombreDueno &&
        this.duenoPOJO.apellidoDueno &&
        this.duenoPOJO.telefonoDueno &&
        this.duenoPOJO.direccionDueno
      ) {
        if (this.duenoPOJO.password === this.pass) {
          this.duenoService.agregarDueno(this.duenoPOJO).then((data) => {
            if (data.status === 201) {
              this.duenoPOJO = {
                username: null,
                password: null,
                correoElectronico: null,
                cedulaDueno: null,
                nombreDueno: null,
                apellidoDueno: null,
                telefonoDueno: null,
                direccionDueno: null,
              };
              this.$swal({
                position: "top-end",
                icon: "success",
                title: "Te has registrado correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
              this.$router.push("/loginUser");
            }
          })
          .catch((error) => {
              if (error.response.status === 400) {
                this.correoExistente = "El correo ya existe";
              }
            });
        } else {
          this.error = "Las contraseñas no coinciden";
        }
      } else {
        this.error = "Todos los campos son obligatorios";
      }
    },
  },
};
</script>

<style scoped>
.p-card {
  padding: 1rem !important;
  padding-top: 0.5rem;
}
</style>

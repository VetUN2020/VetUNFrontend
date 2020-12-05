<template>
  <div class="registroMedico fondo">
    <Message severity="error" :closable="false" v-if="error">{{
      error
    }}</Message>
    <Message severity="error" :closable="false" v-if="correoExistente">{{
      correoExistente
    }}</Message>
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
              v-model="medico.username"
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
              v-model="medico.cedulaMedico"
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
              v-model="medico.nombreMedico"
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
              v-model="medico.apellidoMedico"
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
              v-model="medico.telefonoMedico"
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
              id="correo"
              type="text"
              v-model="medico.matriculaProfesional"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="correo">Tarjeta profesional</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="direccion"
              type="text"
              v-model="medico.direccionMedico"
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
              id="matricula"
              type="text"
              v-model="medico.correoElectronico"
              style="width: 100%"
              @click="borrarErrores"
            />
            <label for="matricula">Correo electronico</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="contrasenia"
              v-model="medico.password"
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
            <label for="contrasenia">Ingrese otra vez la contraseña</label>
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
  </div>
</template>

<script>
// @ is an alias to /src
import MedicoService from "@/service/MedicoService";

export default {
  name: "registroMedico",
  data() {
    return {
      medico: {
        username: null,
        password: null,
        correoElectronico: null,
        cedulaMedico: null,
        nombreMedico: null,
        apellidoMedico: null,
        direccionMedico: null,
        telefonoMedico: null,
        matriculaProfesional: null,
      },
      pass: null,
      error: null,
      correoExistente: null,
    };
  },
  medicoService: null,
  created() {
    this.medicoService = new MedicoService();
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
        this.medico.username &&
        this.medico.password &&
        this.medico.correoElectronico &&
        this.medico.cedulaMedico &&
        this.medico.nombreMedico &&
        this.medico.apellidoMedico &&
        this.medico.direccionMedico &&
        this.medico.telefonoMedico &&
        this.medico.matriculaProfesional &&
        this.pass
      ) {
        if (this.medico.password === this.pass) {
          this.medicoService
            .agregarMedico(this.medico)
            .then((data) => {
              if (data.status === 201) {
                this.medico = {
                  cedulaMedico: null,
                  nombreMedico: null,
                  apellidoMedico: null,
                  direccionResidencia: null,
                  telefonoMedico: null,
                  matriculaProfesional: null,
                  correoMedico: null,
                  contraseniaMedico: null,
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

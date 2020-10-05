<template>
  <div class="registroMedico">
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
              v-model="medico.cedulaMedico"
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
              v-model="medico.nombreMedico"
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
              v-model="medico.apellidoMedico"
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
              v-model="medico.telefonoMedico"
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
              id="correo"
              type="text"
              v-model="medico.matriculaProfesional"
              style="width: 100%"
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
              v-model="medico.direccionResidencia"
              style="width: 100%"
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
              v-model="medico.correoMedico"
              style="width: 100%"
            />
            <label for="matricula">Correo electronico</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="contrasenia"
              v-model="medico.contraseniaMedico"
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
import MedicoService from "../service/MedicoService";

export default {
  name: "registroMedico",
  data() {
    return {
      medico: {
        cedulaMedico: null,
        nombreMedico: null,
        apellidoMedico: null,
        direccionResidencia: null,
        telefonoMedico: null,
        matriculaProfesional: null,
        correoMedico: null,
        contraseniaMedico: null,
      },
      error: null,
      correoExistente: null,
    };
  },
  medicoService: null,
  created() {
    this.medicoService = new MedicoService();
  },
  methods: {
    save() {
      if (
        this.medico.cedulaMedico &&
        this.medico.nombreMedico &&
        this.medico.apellidoMedico &&
        this.medico.direccionResidencia &&
        this.medico.telefonoMedico &&
        this.medico.matriculaProfesional &&
        this.medico.correoMedico && 
        this.medico.contraseniaMedico
      ) {
        
        this.medicoService.verificarCorreo(this.medico).then((data) => {
          if (data.data === true) {
            this.correoExistente = "Ya hay un usuario con este correo";
          } else {
             this.medicoService.agregarMedico(this.medico).then((data) => {
              if (data.status === 200) {
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



<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer>
</script>
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
        <br>
        <div>
          <vue-recaptcha
              ref="recaptcha"
              @verify="onVerify"
              @expired="onCaptchaExpired"
              :loadRecaptchaScript="true"
              sitekey="6LfutXIbAAAAALkzHNix-qqYKIW9ViSXGZmcV8jy"
              class="captcha"
            ></vue-recaptcha>
        </div>
      </template>
      <template slot="footer">
        <ProgressBar v-if="load" mode="indeterminate" style="height: .5em" />
        <br v-if="load">
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
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: "registroMedico",
  components: { "vue-recaptcha": VueRecaptcha },
  data() {
    return {
      load: false,
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
        token: false
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
    onVerify(response) {
      if (response) {
        this.medico.token = response;
      }
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
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
          if(this.medico.token){
            this.load = true;
            this.medicoService
              .agregarMedico(this.medico, this.medico.token)
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
                  this.load = false;
                  this.$router.push("/loginUser");
                }
              })
              .catch((error) => {
                if (error.response.status === 400) {
                  this.load = false;
                  this.correoExistente = "El correo o cedula ya esta registrado o fallo la verificacion del catpcha";
                }
              });
          }else{
            this.error = "Verifica que no eres un robot por favor";
          }
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

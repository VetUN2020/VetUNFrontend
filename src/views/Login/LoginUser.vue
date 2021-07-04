<template>
  <div class="loginUser fondo">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title">Inicio de sesion</template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="correo"
              type="text"
              v-model="user.username"
              style="width: 100%"
            />
            <label for="correo">Usuario</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="password"
              type="password"
              v-model="user.password"
              v-on:keyup.enter="login"
              style="width: 100%"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
        <br />
        <div class="p-text-right">
          <router-link to="/recuperacionContrasenia"
            >¿Olvidaste tu contraseña?</router-link
          >
        </div>
      </template>
      <template slot="footer">
        <Button
          label="Iniciar sesión"
          class="p-button"
          @click="sendCode"
          icon="pi pi-check"
        />
        <br />
        <br />
        <ProgressSpinner v-if="spinner" />
      </template>
    </Card>
    <Message severity="error" v-if="datosIncorrectos">{{
      datosIncorrectos
    }}</Message>
    <Dialog
      header="Verificación doble factor"
      :visible.sync="displayBasic"
      closable="true"
      :style="{ width: '50vw' }"
    >
      <p>
        Ingrese el codigo de validación que fue enviado a su correo
      </p>
      <InputText
        id="secret"
        type="text"
        v-model="userCode.secret"
        v-on:keyup.enter="verifyCode"
        style="width: 50%"
      />
      <template #footer>
        <Button label="Yes" icon="pi pi-check" @click="verifyCode" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script>
import UsuarioService from "@/service/UsuarioService";
//import axios from "axios";

export default {
  name: "LoginUser",
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
      datosIncorrectos: null,
      displayBasic: false,
      userCode: {
        username: null,
        secret: null,
      },
      spinner: false,
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
  methods: {
    async sendCode() {
      this.spinner = true;
      this.usuarioService.sendTwoFactor(this.user).then((response) => {
        if (response.status !== 202) {
          this.spinner = false;
          alert("Usuario no encontrado");
        } else {
          this.spinner = false;
          this.displayBasic = true;
          this.userCode.username = this.user.username;
        }
      });
    },
    async verifyCode() {
      this.usuarioService
        .verifyTwoFactor(this.userCode)
        .then((response) => {
          if (response.status !== 202) {
            alert("Codigo no valido");
          } else {
            this.displayBasic = false;
            this.login();
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          alert("Codigo no valido");
        });
    },
    async login() {
      this.usuarioService
        .login(this.user)
        .then((response) => {
          if (response.status !== 200) {
            alert("Error en la autenticación");
          } else {
            localStorage.setItem("token", response.data.access_token);
            this.$store.dispatch("MenuBar/saveUserMenuBar");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Credenciales incorrectas");
            this.user.username = null;
            this.user.password = null;
          } else {
            alert("¡Parece que hubo un error de comunicación con el servidor!");
          }
        });
    },
  },
};
</script>

<style scoped>
.p-card-body {
  margin-top: 50px;
}
.p-button {
  background-color: #1abc9c !important;
  color: #f8f9fa !important;
  border-color: #1abc9c !important;
}
.p-card {
  padding: 1rem !important;
  padding-top: 0.5rem;
}
</style>

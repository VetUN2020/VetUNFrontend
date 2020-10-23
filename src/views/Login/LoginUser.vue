<template>
  <div class="loginUser">
    <br />
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
            <label for="correo">Correo</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="password"
              type="password"
              v-model="user.password"
              style="width: 100%"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button label="Iniciar sesión" @click="login" icon="pi pi-check" />
      </template>
    </Card>
    <Message severity="error" v-if="datosIncorrectos">{{
      datosIncorrectos
    }}</Message>
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
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  methods: {
    async login() {
      this.usuarioService
        .login(this.user)
        .then((response) => {
          if (response.status !== 200) {
            alert("Error en la autenticación");
          } else {
            localStorage.setItem("token", response.data.access_token);
            this.$store.dispatch("MenuBar/saveUserMenuBar");
            console.log(this.$store.state.MenuBar.userAuth);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Credenciales incorrectas");
          } else {
            alert("¡Parece que hubo un error de comunicación con el servidor!");
          }
        });
    },
  },
};
</script>

<style>
.p-card-body {
  margin-top: 25px;
}
</style>

<template>
  <div class="login">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Inicio de sesion </template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="cedula"
              type="text"
              v-model="form.correoElectronico"
              style="width: 100%"
            />
            <label for="username">Usuario</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="password"
              type="password"
              v-model="form.contraseniaDueno"
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
  </div>
</template>

<script>
// @ is an alias to /src

import DuenoService from "../service/DuenoService";

export default {
  name: "Login",
  data() {
    return {
      form: {
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
    async login() {
      await this.$store.dispatch("signIn", this.form);
      //console.log(this.$store.state.userD);
    },
  },
};
</script>
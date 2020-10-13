<template>
  <div class="loginMedico">
    <br />
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Inicio de sesion Medico</template>
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="correo"
              type="text"
              v-model="form.correoMedico"
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
              v-model="form.contraseniaMedico"
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
// @ is an alias to /src

import MedicoService from "@/service/MedicoService";
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginMedico",
  data() {
    return {
      form: {
        correoMedico: null,
        contraseniaMedico: null,
      },
      datosIncorrectos: null,
    };
  },
  medicoService: null,
  created() {
    this.medicoService = new MedicoService();
  },
  computed: {
    ...mapState("Medico", ["userNF"]),
  },
  methods: {
    ...mapActions("Medico", ["signInMedico"]),
    async login() {
      await this.signInMedico(this.form);
      this.form = {
        correoMedico: null,
        contraseniaMedico: null,
      };
      if (!this.userNF) {
        this.$router.push("/");
      } else {
        this.datosIncorrectos = "Datos incorrectos";
      }
    },
  },
};
</script>

<style scoped>
.p-card-body {
  margin-top: 50px;
}
</style>
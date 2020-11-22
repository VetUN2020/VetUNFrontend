<template>
  <div class="recuperarContrasena">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title">Recuperacion de contraseña</template>
      <br />
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="mail"
              type="text"
              v-model="userMail.correoRecuperacion"
              v-on:keyup.enter="enviarLink"
              style="width: 100%"
            />
            <label for="mail">Correo</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button label="Enviar" @click="enviarLink" icon="pi pi-check" />
      </template>
    </Card>
  </div>
</template>

<script>
import UsuarioService from "@/service/UsuarioService";

export default {
  name: "recuperarContrasena",
  data() {
    return {
      userMail: {
        correoRecuperacion: null,
      },
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  methods: {
    enviarLink() {
      this.$router.push("/");

      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Se enviara pronto un link de recuperacion a tu correo",
        showConfirmButton: false,
        timer: 1500,
      });

      this.usuarioService
        .enviarCorreoRecuperacion(this.userMail)
        .then((response) => {
          this.userMail.correoRecuperacion = "";
          if (response.status === 201) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Se ha enviado a tu correo el link de recuperacion",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          this.userMail.correoRecuperacion = "";
          if (error.response.status === 400) {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Este correo no esta registrado, intente nuevamente",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Ya se ha enviado un link de recuperacion a su correo",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },
};
</script>

<style></style>

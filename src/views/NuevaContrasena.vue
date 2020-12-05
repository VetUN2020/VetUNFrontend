<template>
  <div class="nuevaContrasena fondo">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title">Cambio de contraseña</template>
      <br />
      <template slot="content">
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password
              id="contrasenia"
              v-model="usuarioContrasenia.nuevaContrasena"
              style="width: 100%"
            />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              type="password"
              id="verificar-contrasenia"
              v-model="pass"
              style="width: 100%"
            />

            <label for="verificar-contrasenia"
              >Ingrese otra vez la contraseña</label
            >
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button label="Enviar" @click="cambiarContrasenia" icon="pi pi-check" />
      </template>
    </Card>
  </div>
</template>

<script>
import UsuarioService from "@/service/UsuarioService";

export default {
  name: "nuevaContrasena",
  data() {
    return {
      usuarioContrasenia: {
        nuevaContrasena: null,
        token: null,
      },
      pass: null,
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.$store.dispatch("MenuBar/MenuBarDark");
    if (this.$route.query.token == "") {
      this.$router.push("/");
      this.$swal({
        position: "top-end",
        icon: "warning",
        title: "El token no es valido",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  },
  methods: {
    cambiarContrasenia() {
      if (this.usuarioContrasenia.nuevaContrasena && this.pass) {
        if (this.usuarioContrasenia.nuevaContrasena === this.pass) {
          this.usuarioContrasenia.token = this.$route.query.token;
          this.usuarioService
            .cambiarContrasenia(this.usuarioContrasenia)
            .then((response) => {
              if (response.status === 202) {
                this.$router.push("/login");
                this.usuarioContrasenia.nuevaContrasena = "";
                (this.pass = ""),
                  this.$swal({
                    position: "top-end",
                    icon: "success",
                    title: "Se ha cambiado tu contraseña correctamente",
                    showConfirmButton: false,
                    timer: 1500,
                  });
              }
            });
        } else {
          this.usuarioContrasenia.nuevaContrasena = "";
          this.pass = "";
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "Las contraseñas no coinciden",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        this.$swal({
          position: "top-end",
          icon: "error",
          title: "Debe llenar todos los campos",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
};
</script>

<style></style>

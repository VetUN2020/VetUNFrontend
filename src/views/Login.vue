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
              v-model="value1"
              style="width: 100%"
            />
            <label for="username">Cedula</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <Password id="username" v-model="value2" style="width: 100%" />
            <label for="contrasenia">Contraseña</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button label="Iniciar sesión" icon="pi pi-check" />
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      value1: null,
      value2: null,
    };
  },
  components: {},
};
</script>
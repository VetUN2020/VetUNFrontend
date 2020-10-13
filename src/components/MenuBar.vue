<template>
  <div id="navBarGeneral">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/"
        ><b-navbar-brand>
          <img
            src="../assets/Icono.png"
            class="d-inline-block align-top"
            height="50px" /></b-navbar-brand
      ></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <template v-if="$store.state.Dueno.authD">
            <b-nav-form>
              <b-dropdown
                id="dropdown-right"
                v-bind:text="
                  $store.state.Dueno.userD.nombreDueno +
                  ' ' +
                  $store.state.Dueno.userD.apellidoDueno
                "
                size="sm"
                variant="success"
                class="my-2 mr-2 my-sm-3"
                right
              >
                <b-dropdown-item>Perfil</b-dropdown-item>
                <b-dropdown-item @click="registrarMascota"
                  >Registrar Mascota</b-dropdown-item
                >
                <b-dropdown-item @click="signOutDueno"
                  >Cerrar sesion</b-dropdown-item
                >
              </b-dropdown>
            </b-nav-form>
          </template>

          <template v-else-if="$store.state.Medico.authM">
            <b-nav-form>
              <b-button variant="success" size="sm">Mis citas</b-button>
              <b-dropdown
                id="dropdown-right"
                v-bind:text="
                  $store.state.Medico.userM.nombreMedico +
                  ' ' +
                  $store.state.Medico.userM.apellidoMedico
                "
                size="sm"
                variant="success"
                class="my-2 mr-2 my-sm-3"
                right
              >
                <b-dropdown-item>Perfil</b-dropdown-item>
                <b-dropdown-item @click="signOutMedico"
                  >Cerrar sesion</b-dropdown-item
                >
              </b-dropdown>
            </b-nav-form>
          </template>

          <template v-else>
            <b-nav-form>
              <b-dropdown
                id="sesionInactiva"
                text="Registrarse"
                size="sm"
                variant="success"
                class="my-2 mr-2 my-sm-3"
                right
              >
                <b-dropdown-item @click="registrarseDueno"
                  >Dueño</b-dropdown-item
                >
                <b-dropdown-item @click="registrarseMedico"
                  >Medico veterinario</b-dropdown-item
                >
                <b-dropdown-item @click="registerVeterinary"
                  >Veterinaria</b-dropdown-item
                >
              </b-dropdown>
            </b-nav-form>
            <b-nav-form>
              <b-dropdown
                id="dropdown-right"
                text="Iniciar sesion"
                size="sm"
                variant="success"
                class="my-2 mr-2 my-sm-3"
                right
              >
                <b-dropdown-item @click="loginDueno">Dueño</b-dropdown-item>
                <b-dropdown-item @click="loginMedico"
                  >Medico veterinario</b-dropdown-item
                >
              </b-dropdown>
            </b-nav-form>

            <!-- <b-nav-form>
              <router-link to="/mascotaRegistro"
                ><b-button
                  variant="success"
                  size="sm"
                  class="my-2 mr-2 my-sm-3"
                  type="submit"
                  >Mis mascotas</b-button
                ></router-link
              >
            </b-nav-form> -->
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    registrarseDueno() {
      this.$router.push("/registroDueno");
    },
    loginDueno() {
      this.$router.push("/loginDueno");
    },
    loginMedico() {
      this.$router.push("/loginMedico");
    },
    registerVeterinary() {
      this.$router.push("/regvet");
    },
    async signOutDueno() {
      await this.$store.dispatch("Dueno/signOutDueno");
      this.$router.push("/");
    },
    async signOutMedico() {
      await this.$store.dispatch("Medico/signOutMedico");
      this.$router.push("/");
    },
    registrarseMedico() {
      this.$router.push("/registroMedico");
    },
    registrarMascota() {
      this.$router.push("/mascotaRegistro");
    },
  },
};
</script>

<style>
#navBarGeneral {
  position: fixed;
  width: 100%;
  z-index: 100;
}
</style>
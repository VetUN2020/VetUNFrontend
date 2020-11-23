<template>
  <div id="navBarGeneral">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/"
        ><b-navbar-brand>
          <img
            src="../assets/Icono.png"
            class="d-inline-block align-top"
            height="50px"/></b-navbar-brand
      ></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="$store.state.MenuBar.userAuth">
            <template
              v-if="$store.state.MenuBar.userAuth.rolUsuario === 'DUENO'"
            >
              <SearchBar />
              <b-nav-form>
                <b-dropdown
                  id="dropdown-right1"
                  v-bind:text="
                    $store.state.MenuBar.userAuth.nombreUsuario +
                      ' ' +
                      $store.state.MenuBar.userAuth.apellidoUsuario
                  "
                  size="sm"
                  variant="success"
                  class="my-2 mr-2 my-sm-3"
                  right
                >
                  <b-dropdown-item @click="perfilDueno">Perfil</b-dropdown-item>
                  <b-dropdown-item @click="registrarMascota"
                    >Registrar Mascota</b-dropdown-item
                  >
                  <b-dropdown-item @click="citasDueno"
                    >Mis citas</b-dropdown-item
                  >
                  <b-dropdown-item @click="signOutDueno"
                    >Cerrar sesion</b-dropdown-item
                  >
                </b-dropdown>
              </b-nav-form>
            </template>

            <template
              v-else-if="$store.state.MenuBar.userAuth.rolUsuario === 'MEDICO'"
            >
              <b-nav-form>
                <b-button
                  @click="citasMedico"
                  variant="success"
                  size="sm"
                  class="my-2 mr-2 my-sm-3"
                  >Mis citas</b-button
                >

                <b-dropdown
                  id="dropdown-right2"
                  text="Mi veterinaria"
                  size="sm"
                  variant="success"
                  class="my-2 mr-2 my-sm-3"
                  right
                >
                  <b-dropdown-item @click="profileVeterinary"
                    >Perfil veterinaria</b-dropdown-item
                  >
                  <b-dropdown-item @click="registerVeterinary"
                    >Registrar nueva veterinaria</b-dropdown-item
                  >
                </b-dropdown>

                <b-dropdown
                  id="dropdown-right3"
                  v-bind:text="
                    $store.state.MenuBar.userAuth.nombreUsuario +
                      ' ' +
                      $store.state.MenuBar.userAuth.apellidoUsuario
                  "
                  size="sm"
                  variant="success"
                  class="my-2 mr-2 my-sm-3"
                  right
                >
                  <b-dropdown-item @click="medicoProfile"
                    >Perfil</b-dropdown-item
                  >
                  <b-dropdown-item @click="agregarHorario"
                    >Horario de atención</b-dropdown-item
                  >
                  <b-dropdown-item @click="signOutMedico"
                    >Cerrar sesion</b-dropdown-item
                  >
                </b-dropdown>
              </b-nav-form>
            </template>
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
              </b-dropdown>
            </b-nav-form>

            <b-nav-form>
              <b-button variant="success" size="sm" v-on:click="loginUsuario"
                >Iniciar sesión</b-button
              >
            </b-nav-form>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  components: {
    SearchBar,
  },
  methods: {
    registrarseDueno() {
      this.$router.push("/registroDueno");
    },
    loginUsuario() {
      this.$router.push("/loginUser");
    },
    registerVeterinary() {
      this.$router.push("/registroVeterinaria");
    },
    async signOutDueno() {
      this.$store.dispatch("MenuBar/outUserMenuBar");
      localStorage.clear();
      this.$router.push("/").catch(() => {});
    },
    async signOutMedico() {
      this.$store.dispatch("MenuBar/outUserMenuBar");
      localStorage.clear();
      this.$router.push("/").catch(() => {});
    },
    registrarseMedico() {
      this.$router.push("/registroMedico");
    },
    registrarMascota() {
      this.$router.push("/mascotaRegistro");
    },
    agendarCita() {
      this.$router.push("/agendarCitaMascota");
    },
    medicoProfile() {
      this.$router.push("/medicoProfile");
    },
    perfilDueno() {
      this.$router.push("/duenoProfile");
    },
    profileVeterinary() {
      this.$router.push("/veterinariaProfile");
    },
    citasMedico() {
      this.$router.push("/misCitasMedico");
    },
    agregarHorario() {
      this.$router.push("/agregarHorario");
    },
    citasDueno() {
      this.$router.push("/misCitasDueno");
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

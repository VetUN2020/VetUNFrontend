<template>
  <!-- <div id="navBarGeneral">
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
  </div> -->
  <div class="navBarGeneral">
    <template v-if="$store.state.MenuBar.userAuth">
      <template v-if="$store.state.MenuBar.userAuth.rolUsuario === 'DUENO'">
        <header
          id="header"
          class="transparent-header"
          v-bind:class="{
            'sticky-header': scrollM,
            'sticky-header sticky-header-shrink': scrollT,
            dark: scrollF,
          }"
          data-sticky-class="not-dark"
        >
          <div id="header-wrap">
            <div class="container">
              <div class="header-row">
                <!-- Logo
						============================================= -->
                <div id="logo">
                  <a
                    href="index.html"
                    class="standard-logo"
                    data-dark-logo="demos/pet/images/logo-dark.png"
                    >VetUN</a
                  >
                  <a
                    href="index.html"
                    class="retina-logo"
                    data-dark-logo="demos/pet/images/logo-dark@2x.png"
                    >VetUN</a
                  >
                </div>
                <!-- #logo end -->

                <div id="primary-menu-trigger">
                  <svg class="svg-trigger" viewBox="0 0 100 100">
                    <path
                      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                    ></path>
                    <path d="m 30,50 h 40"></path>
                    <path
                      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                    ></path>
                  </svg>
                </div>

                <!-- Primary Navigation
						============================================= -->
                <nav class="primary-menu not-dark">
                  <ul class="menu-container">
                    <li class="menu-item">
                      <a class="menu-link" href="#about-us"
                        ><div>About us</div></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="menu-link"><div>Perfil</div></a>
                    </li>
                  </ul>
                </nav>
                <!-- #primary-menu end -->
              </div>
            </div>
          </div>
          <div class="header-wrap-clone"></div>
        </header>
        <!-- #header end -->
      </template>
    </template>

    <template v-else>
      <header
        id="header"
        class="transparent-header"
        v-bind:class="{
          'sticky-header': scrollM,
          'sticky-header sticky-header-shrink': scrollT,
          dark: scrollF,
          'sticky-header dark': scrollL,
        }"
        data-sticky-class="not-dark"
      >
        <div id="header-wrap">
          <div class="container">
            <div class="header-row">
              <!-- Logo
						============================================= -->
              <div id="logo">
                <a
                  @click="montarNav"
                  class="standard-logo"
                  data-dark-logo="demos/pet/images/logo-dark.png"
                >
                  <router-link to="/"> VetUN </router-link></a
                >
                <a
                  @click="montarNav"
                  class="retina-logo"
                  data-dark-logo="demos/pet/images/logo-dark@2x.png"
                  ><router-link to="/"> VetUN </router-link></a
                >
              </div>
              <!-- #logo end -->

              <div id="primary-menu-trigger">
                <svg class="svg-trigger" viewBox="0 0 100 100">
                  <path
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                  ></path>
                  <path d="m 30,50 h 40"></path>
                  <path
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                  ></path>
                </svg>
              </div>

              <!-- Primary Navigation
						============================================= -->
              <nav class="primary-menu not-dark">
                <ul class="menu-container">
                  <li class="menu-item">
                    <a class="menu-link" href="/#about-us"
                      ><div>About us</div></a
                    >
                  </li>
                  <li class="menu-item">
                    <b-dropdown
                      text="Unete a nosotros"
                      variant="outline-light"
                      class="m-2"
                    >
                      <b-dropdown-item @click="registrarseMedico"
                        >¿Eres medico?</b-dropdown-item
                      >
                      <b-dropdown-item @click="registrarseDueno"
                        >Amas a tus mascotas</b-dropdown-item
                      >
                    </b-dropdown>
                  </li>
                  <li class="menu-item bg-color">
                    <a class="menu-link" @click="loginUsuario"
                      ><div>Ingresar</div></a
                    >
                  </li>
                </ul>
              </nav>
              <!-- #primary-menu end -->
            </div>
          </div>
        </div>
        <div class="header-wrap-clone"></div>
      </header>
    </template>
  </div>
</template>

<script>
//import SearchBar from "./SearchBar";

export default {
  components: {
    //SearchBar,
  },
  data() {
    return {
      scrollT: false,
      scrollM: false,
      scrollF: true,
      scrollL: false,
    };
  },
  methods: {
    controlNav() {
      let desplazamiento_Actual = window.pageYOffset;
      if (desplazamiento_Actual >= 1 && desplazamiento_Actual < 400) {
        this.scrollF = false;
        this.scrollM = true;
      } else if (desplazamiento_Actual >= 400) {
        this.scrollT = true;
        this.scrollM = false;
      } else {
        this.scrollT = false;
        this.scrollM = false;
        this.scrollF = true;
      }
    },
    montarNav() {
      this.scrollT = false;
      this.scrollM = false;
      this.scrollF = true;
      this.scrollL = false;
    },
    registrarseDueno() {
      this.$router.push("/registroDueno");
      this.scrollL = true;
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
      this.scrollL = true;
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
  created: function() {
    window.addEventListener("scroll", this.controlNav);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.controlNav);
  },
};
</script>

<style>
/* #navBarGeneral {
  position: fixed;
  width: 100%;
  z-index: 100;
} */
</style>

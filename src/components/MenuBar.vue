<template>
  <div class="navBarGeneral">
    <template v-if="$store.state.MenuBar.userAuth">
      <template v-if="$store.state.MenuBar.userAuth.rolUsuario === 'DUENO'">
        <header
          id="header"
          class="transparent-header"
          v-bind:class="{
            'sticky-header': $store.state.MenuBar.scroll.scrollM,
            'sticky-header sticky-header-shrink':
              $store.state.MenuBar.scroll.scrollT,
            dark: $store.state.MenuBar.scroll.scrollF,
            'sticky-header dark': $store.state.MenuBar.scroll.scrollL,
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
                    class="standard-logo"
                    data-dark-logo="demos/pet/images/logo-dark.png"
                    ><router-link to="/"> VetUN </router-link></a
                  >
                  <a
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
                      <a class="menu-link" @click="citasDueno"
                        ><div>Mis citas</div></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="menu-link" @click="veterinariasCercanas"
                        ><div>¿Buscas veterinaria cerca?</div></a
                      >
                    </li>
                    <li class="menu-item">
                      <SearchBar />
                    </li>
                    <div v-if="light">
                    <li class="menu-item">
                      <b-dropdown
                        v-bind:text="
                          $store.state.MenuBar.userAuth.nombreUsuario +
                            ' ' +
                            $store.state.MenuBar.userAuth.apellidoUsuario
                        "
                        variant="outline-light"
                        class="m-2 "
                      >
                        <b-dropdown-item @click="perfilDueno"
                          >Perfil</b-dropdown-item
                        >
                        <b-dropdown-item @click="registrarMascota"
                          >Registrar mascota</b-dropdown-item
                        >
                        <b-dropdown-item @click="signOutDueno"
                          >Cerrar sesion</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                    </div>
                  <div v-else>
                    <li class="menu-item">
                      <b-dropdown
                        v-bind:text="
                          $store.state.MenuBar.userAuth.nombreUsuario +
                            ' ' +
                            $store.state.MenuBar.userAuth.apellidoUsuario
                        "
                        variant="outline-dark"
                        class="m-2 "
                      >
                        <b-dropdown-item @click="perfilDueno"
                          >Perfil</b-dropdown-item
                        >
                        <b-dropdown-item @click="registrarMascota"
                          >Registrar mascota</b-dropdown-item
                        >
                        <b-dropdown-item @click="signOutDueno"
                          >Cerrar sesion</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                    </div>
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
      <template
        v-else-if="$store.state.MenuBar.userAuth.rolUsuario === 'MEDICO'"
      >
        <header
          id="header"
          class="transparent-header"
          v-bind:class="{
            'sticky-header': $store.state.MenuBar.scroll.scrollM,
            'sticky-header sticky-header-shrink':
              $store.state.MenuBar.scroll.scrollT,
            dark: $store.state.MenuBar.scroll.scrollF,
            'sticky-header dark': $store.state.MenuBar.scroll.scrollL,
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
                    class="standard-logo"
                    data-dark-logo="demos/pet/images/logo-dark.png"
                    ><router-link to="/"> VetUN </router-link></a
                  >
                  <a
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
                      <a class="menu-link" @click="citasMedico"
                        ><div>Mis citas</div></a
                      >
                    </li>
                    <div v-if="light">
                    <li class="menu-item">
                      <b-dropdown
                        text="Mi veterinaria"
                        variant="outline-light"
                        class="m-2"
                      >
                        <b-dropdown-item @click="profileVeterinary"
                          >Perfil veterinaria</b-dropdown-item
                        >
                        <b-dropdown-item @click="registerVeterinary"
                          >Registrar nueva veterinaria</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                    </div>
                  <div v-else>
                    <li class="menu-item">
                      <b-dropdown
                        text="Mi veterinaria"
                        variant="outline-dark"
                        class="m-2"
                      >
                        <b-dropdown-item @click="profileVeterinary"
                          >Perfil veterinaria</b-dropdown-item
                        >
                        <b-dropdown-item @click="registerVeterinary"
                          >Registrar nueva veterinaria</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                    </div>
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
          'sticky-header': $store.state.MenuBar.scroll.scrollM,
          'sticky-header sticky-header-shrink':
            $store.state.MenuBar.scroll.scrollT,
          dark: $store.state.MenuBar.scroll.scrollF,
          'sticky-header dark': $store.state.MenuBar.scroll.scrollL,
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

                  <div v-if="light">
                    <li class="menu-item">
                      <b-dropdown
                        text="Unete a nosotros"
                        variant="outline-dark"
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
                  </div>
                  <div v-else>
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
                  </div>

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
import SearchBar from "./SearchBar";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      light: false,
    };
  },
  methods: {
    controlNav() {
      let desplazamiento_Actual = window.pageYOffset;
      if (this.$store.state.MenuBar.homePage) {
        if (desplazamiento_Actual >= 1 && desplazamiento_Actual < 400) {
          //Miniscroll
          this.light = true;
          this.$store.dispatch("MenuBar/MenuBarMiniScroll");
        } else if (desplazamiento_Actual >= 400) {
          //fullscroll
          this.light = true;
          this.$store.dispatch("MenuBar/MenuBarFullScroll");
        } else {
          this.light = false;
          this.$store.dispatch("MenuBar/MenuBarInvisible");
        }
      } else {
        this.$store.dispatch("MenuBar/MenuBarDark");
      }
    },
    montarNav() {
      this.$store.dispatch("MenuBar/MenuBarInvisible");
    },
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
    agregarTipoAtencion() {
      this.$router.push("/agregarPrecios");
    },
    veterinariasCercanas() {
      this.$router.push("/veterinariasCercanas");
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

<style scoped>
@media (min-width: 1200px) {
  .container {
    max-width: 75%;
    margin: auto;
  }
}
</style>

<template>
  <div class="home">
    <template v-if="$store.state.MenuBar.userAuth">
      <template v-if="$store.state.MenuBar.userAuth.rolUsuario === 'DUENO'">
        <h1>
          Bienvenido a vetUN, en este mapa podra ver veterinarias cercanas a su
          ubicación
        </h1>
        <div id="app">
          <HereMap
            v-if="center.lat && center.lng && veterinarias"
            :center="center"
            :veterinarias="veterinarias"
            :veterinariaProfile="null"
          />
        </div>
      </template>
      <template v-else>
        <img id="fondo" src="../assets/fondo.png" alt="" />
      </template>
    </template>
    <template v-else>
      <div>
        <section
          id="slider"
          class="slider-element min-vh-60 min-vh-md-100 include-header"
          style="background: url('demos/pet/images/hero-image.jpg') center right no-repeat; background-size: cover; margin-top: -102px;"
        >
          <div class="slider-inner">
            <div class="vertical-middle">
              <div class="container py-5">
                <div class="emphasis-title dark m-0">
                  <h2
                    style="font-size: 40px; line-height: 1.4; font-weight: 600; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);"
                  >
                    Nuestras mascotas no son solo parte de <br />
                    nuestra vida, la vuelven plena.
                  </h2>
                  <br />
                  <p
                    class="font-weight-light d-none d-md-block"
                    style="font-size: 16px; opacity: .7;"
                  >
                    Cuidamos de tu mascota de la manera que tu lo harias,
                  </p>
                  <a
                    @click="registrarseDueno"
                    class="button button-large button-rounded ml-0"
                    >UNETE</a
                  ><span class="leftmargin-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="about-us"
          class="section m-0 clearfix"
          style="background-color: #eef2f5;"
        >
          <div class="container clearfix">
            <div
              class="heading-block center border-bottom-0 bottommargin topmargin-sm mx-auto"
              style="max-width: 640px"
            >
              <h3
                class="nott font-secondary font-weight-normal"
                style="font-size: 36px;"
              >
                Que Somos
              </h3>
              <span
                >VetUN es una app web que conecta Veterinarias de calidad, con
                Dueños de Mascotas interesados en el bienestar de su
                mascota</span
              >
            </div>

            <div class="row clearfix">
              <!-- Features colomns
							============================================= -->
              <div class="row clearfix">
                <div class="col-lg-3 col-md-6 bottommargin-sm">
                  <div class="feature-box media-box fbox-bg">
                    <div class="fbox-media">
                      <a
                        ><img
                          src="demos/pet/images/services/1.jpg"
                          alt="Featured Box Image"
                      /></a>
                    </div>
                    <div class="fbox-content border-0">
                      <h3 class="nott ls0 font-weight-semibold">
                        Atencion A Domicilio<span
                          class="subtitle font-weight-light ls0"
                          >Nos ajustamos a tus necesidades</span
                        >
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 bottommargin-sm">
                  <div class="feature-box media-box fbox-bg">
                    <div class="fbox-media">
                      <a
                        ><img
                          src="demos/pet/images/services/2.jpg"
                          alt="Featured Box Image"
                      /></a>
                    </div>
                    <div class="fbox-content border-0">
                      <h3 class="nott ls0 font-weight-semibold">
                        Medicos Veterinarios<span
                          class="subtitle font-weight-light ls0"
                          >Disponibles para tu servicio</span
                        >
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 bottommargin-sm">
                  <div class="feature-box media-box fbox-bg">
                    <div class="fbox-media">
                      <a
                        ><img
                          src="demos/pet/images/services/3.jpg"
                          alt="Featured Box Image"
                      /></a>
                    </div>
                    <div class="fbox-content border-0">
                      <h3 class="nott ls0 font-weight-semibold">
                        Atencion de Urgencias<span
                          class="subtitle font-weight-light ls0"
                          >Cuando necesitas respuesta inmediata</span
                        >
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 bottommargin-sm">
                  <div class="feature-box media-box fbox-bg">
                    <div class="fbox-media">
                      <a
                        ><img
                          src="demos/pet/images/services/4.jpg"
                          alt="Featured Box Image"
                      /></a>
                    </div>
                    <div class="fbox-content border-0">
                      <h3 class="nott ls0 font-weight-semibold">
                        Atencion Virtual<span
                          class="subtitle font-weight-light ls0"
                          >Nos ajustamos a la nueva normalidad</span
                        >
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer
		============================================= -->
        <footer id="footer" class="dark">
          <div class="container clearfix">
            <!-- Footer Widgets
				============================================= -->
            <div class="footer-widgets-wrap">
              <div class="row col-mb-50">
                <div class="col-sm-6 col-lg-3">
                  <div class="widget clearfix">
                    <p>
                      El<strong> Amor</strong> por tu mascota, nos motiva a
                      <strong>reinventarnos</strong> dia a dia.
                    </p>

                    <div
                      style="background: url('images/world-map.png') no-repeat center center; background-size: 100%;"
                    >
                      <address>
                        <strong>Direccion:</strong><br />
                        Cll 26 Universidad Nacional<br />
                      </address>
                      <abbr title="Phone Number"
                        ><strong>Telefono:</strong></abbr
                      >
                      310 790 7321<br />
                      <abbr title="Email Address"><strong>Email:</strong></abbr>
                      contacto@vetun.com
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                  <div class="widget widget_links clearfix"></div>
                </div>

                <div class="col-sm-6 col-lg-3">
                  <div class="widget widget_links clearfix"></div>
                </div>

                <div class="col-sm-6 col-lg-3">
                  <div
                    class="widget center clearfix"
                    style="border: 2px dashed #AAA; padding: 30px"
                  >
                    <h3>VETUN</h3>
                    <p>Vivimos por quien vives</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- .footer-widgets-wrap end -->
          </div>

          <div class="line m-0"></div>

          <!-- Copyrights
			============================================= -->
          <div id="copyrights">
            <div class="container">
              <div
                class="row justify-content-between align-items-center col-mb-30"
              >
                <div class="col-12 col-lg-auto text-center text-lg-left">
                  &copy; VetUN, 2020.
                </div>

                <div class="col-12 col-lg-auto text-center text-lg-right">
                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-facebook"
                  >
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-twitter"
                  >
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-gplus"
                  >
                    <i class="icon-gplus"></i>
                    <i class="icon-gplus"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-pinterest"
                  >
                    <i class="icon-pinterest"></i>
                    <i class="icon-pinterest"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-vimeo"
                  >
                    <i class="icon-vimeo"></i>
                    <i class="icon-vimeo"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-github"
                  >
                    <i class="icon-github"></i>
                    <i class="icon-github"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-yahoo"
                  >
                    <i class="icon-yahoo"></i>
                    <i class="icon-yahoo"></i>
                  </a>

                  <a
                    href="#"
                    class="social-icon inline-block si-small si-borderless si-linkedin"
                  >
                    <i class="icon-linkedin"></i>
                    <i class="icon-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- #copyrights end -->
        </footer>
        <!-- #footer end -->
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import HereMap from "@/components/HereMap.vue";
import VeterinariaService from "@/service/VeterinariaService";

export default {
  name: "Home",
  veterinariaService: null,
  components: {
    HereMap,
  },
  data() {
    return {
      veterinarias: null,
      center: {
        lat: null,
        lng: null,
      },
    };
  },
  methods: {
    success(pos) {
      var crd = pos.coords;
      this.center.lat = crd.latitude;
      this.center.lng = crd.longitude;
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    registrarseDueno() {
      this.$router.push("/registroDueno");
    },
  },
  created() {
    this.veterinariaService = new VeterinariaService();
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      this.options
    );
    //traemos las veterinarias
    this.veterinariaService.getAll().then((response) => {
      this.veterinarias = response.data;
    });
  },
};
</script>

<style scoped>
#fondo {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-size: 50px;
  font-weight: 800;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dueno {
  background-color: aqua;
}
</style>

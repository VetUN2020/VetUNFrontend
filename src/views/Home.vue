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
      <img id="fondo" src="../assets/fondo.png" alt="" />
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

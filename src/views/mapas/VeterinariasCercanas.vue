<template>
  <div class="veterinariasCercanas fondo">
    <div id="mapa">
      <HereMap
        v-if="center.lat && center.lng && veterinarias"
        :center="center"
        :veterinarias="veterinarias"
        :veterinariaProfile="null"
      />
    </div>
  </div>
</template>

<script>
import HereMap from "@/components/HereMap.vue";
import VeterinariaService from "@/service/VeterinariaService";

export default {
  components: {
    HereMap,
  },
  veterinariaService: null,
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
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
};
</script>

<style scoped>
#mapa {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-size: 50px;
  font-weight: 800;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
}
</style>

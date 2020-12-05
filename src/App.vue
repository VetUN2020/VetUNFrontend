<template>
  <div id="app">
    <MenuBar />
    <router-view />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";

export default {
  name: "App",
  components: {
    MenuBar,
  },
  created() {
    this.$store.dispatch("PerfilDueno/setPerfil");
  },
};
</script>

<style>
.fondo {
  margin-top: -5px;
  height: 100vh;
  background-image: url("https://c8.alamy.com/compes/mxaxf6/vector-patron-sin-fisuras-con-huellas-de-huellas-de-animales-puede-utilizarse-para-papel-tapiz-de-fondo-de-la-pagina-web-las-texturas-de-la-superficie-10-eps-mxaxf6.jpg");
  /* background: url("./assets/background.jpg"); */
  background-size: cover;
}
</style>

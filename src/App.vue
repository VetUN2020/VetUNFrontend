<template>
  <div id="app">
    <MenuBar />
    <div id="router">
    <!-- <br />
    <br />
    <br />
    <br /> -->
    <router-view />
    </div>
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
  }
};
</script>

<style scoped>
  #router{
    padding-top: 80px;
  }
</style>

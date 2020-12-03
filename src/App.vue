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

<style scoped>
#router {
  padding-top: 80px;
}
</style>

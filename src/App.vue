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
  created(){
    console.log("Creado");
    console.log(this.$store.state.userD);
  }
};
</script>

<style>
</style>

<template>
  <div class="home">
    <img id="fondo" src="../assets/fondo.png" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
#fondo {
  /* padding-bottom: 625px;
  background-image: url("../assets/fondo.png");
  background-size: cover; */
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>

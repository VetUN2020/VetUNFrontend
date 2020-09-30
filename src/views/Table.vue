<template>
  <div class="crud">
    <h1>Tabla con conexión CRUD </h1>
    <CrudApp/>
  </div>
</template>


<script>
// @ is an alias to /src
import CrudApp from '@/components/CrudApp.vue'

export default {
  name: 'Crud',
  components: {
    CrudApp
  }
}
</script>
<template>
  <div>
    <DataTable :value="personas" :paginator="true" :rows="3">
      <Column field="id" header="Documento"></Column>
      <Column field="email" header="Correo"></Column>
      <Column field="password" header="Contaseña"></Column>
    </DataTable>
  </div>
</template>

<script>
import UsuarioService from "../service/UsuarioService";
export default {
  name: "CrudApp",
  data() {
    return {
      personas: null,
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.usuarioService.getAll().then((data) => {
      this.personas = data.data;
    });
  },
};
</script>
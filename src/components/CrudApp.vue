<template>
  <div width="80%">
    <DataTable :value="personas" :paginator="true" :rows="5">
      <Column field="cedulaDueno" header="Documento"></Column>
      <Column field="nombreDueno" header="Nombre"></Column>
      <Column field="apellidoDueno" header="Apellido"></Column>
    </DataTable>
  </div>
</template>

<script>
import DuenoService from "../service/DuenoService";
export default {
  name: "CrudApp",
  data() {
    return {
      personas: null,
    };
  },
  duenoService: null,
  created() {
    this.duenoService = new DuenoService();
  },
  mounted() {
    this.duenoService.getAll().then((data) => {
      this.personas = data.data;
    });
  },
};
</script>
<template>
  <div class="veterinary">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Registra tu Veterinaria</template>
      <template slot="content">
  
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="nombre"
              type="text"
              v-model="veterinaria.nombreVeterinaria"
              style="width: 100%"
            />
            <label for="username">Nombre Veterinaria</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="apellido"
              type="text"
              v-model="veterinaria.dirVeterinaria"
              style="width: 100%"
            />
            <label for="username">Direccion</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="telefono"
              type="text"
              v-model="veterinaria.telVeterinaria"
              style="width: 100%"
            />
            <label for="username">Telefono</label>
          </span>
        </div>
        <br />
        <div class="p-field p-grid">
          <span class="p-float-label">
            <InputText
              id="direccion"
              type="text"
              v-model="veterinaria.tipoVeterinaria"
              style="width: 100%"
            />
            <label for="username">Tipo de Veterinaria</label>
          </span>
        </div>
      </template>
      <template slot="footer">
        <Button
          label="Registrar"
          class="p-button-rounded p-button-success"
        />
      </template>
    </Card>
  </div>
</template>

<script>

export default {
  name: "Veterinary",
  data() {
    return {
        veterinaria: {
        nombreVeterinaria: null,
        dirVeterinaria: null,
        telVeterinaria: null,
        tipoVeterinaria: null,
      },
    };
  },
  components: {},
};
</script>
<template>
  <div class="DuenoProfile">
    <br />
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Perfil Dueño</template>
      <template slot="content">
        <!--IdDueno-->
                  <div class="row">
                    <div class="col-sm-4">
                      <h6 class="mb-0 text-primary">Nombre</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{dueno.nombreDueno}} {{dueno.apellidoDueno}}
                    </div>
                  </div>

                  <!--Cedula-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">C.C.</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{dueno.cedulaDueno}}
                    </div>
                  </div>

                  <!--Direccion-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Direccion</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{dueno.direccionCasa}}
                    </div>
                  </div>

                  <!--Telefono-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{dueno.telefonoDueno}}
                    </div>
                  </div>
                  <!--Email-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{dueno.correoElectronico}}
                    </div>
                  </div>
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import DuenoService from "@/service/DuenoService";

export default {
  duenoService: null,
  created() {
    this.duenoService = new DuenoService;
  },
  mounted(){
  },
  data() {
    return {
        dueno: this.$store.state.Dueno.userD,
    };
  },
  methods: {
    save() {
    },
  }
};
</script>

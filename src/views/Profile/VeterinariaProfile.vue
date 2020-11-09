<template>
  <div class="vetProfile">
    <div class="container">
      <div class="main-body">
        <br /><br />
        <template v-if="perfilVeterinaria">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-flex flex-column align-items-center text-center"
                  >
                    <img
                      id="profilePic"
                      src="@/assets/veterinaria.png"
                      alt="Admin"
                      width="200"
                    />
                    <div class="mt-3">
                      <h3 class="text-info">
                        {{ perfilVeterinaria.nombreVeterinaria }}
                      </h3>
                      <p class="text-secondary mb-1">Veterinaria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <!--Direccion-->
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Direccion</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilVeterinaria.direccionVeterinaria }}
                    </div>
                  </div>
                  <!--Telefono-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilVeterinaria.telefonoVeterinaria }}
                    </div>
                  </div>
                  <!--Matricula profesional-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Tipo</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilVeterinaria.tipoVeterinaria }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Veterinarios-->
            <div class="container" id="app">
              <div class="row">
                <div
                  v-for="item in veterinarios"
                  v-bind:key="item"
                  class="col-md-3 col-6 my-1"
                >
                  <div class="card h-100">
                    <img
                      id="profilePic"
                      src="@/assets/veterinario.jpg"
                      alt="Admin"
                      width="100%"
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <strong
                          >{{ item.nombreMedico }}
                          {{ item.apellidoMedico }}</strong
                        >
                      </div>
                      <div>
                        <span class="badge badge-pill badge-info"
                          >Direccion : {{ item.direccionMedico }}</span
                        >
                        <hr />
                        <span class="badge badge-pill badge-info"
                          >Telefono : {{ item.telefonoMedico }}</span
                        >
                        <hr />
                        <span class="badge badge-pill badge-info"
                          >Link : {{ item.linkMedico }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VeterinariaService from "@/service/VeterinariaService";
import MedicoService from "@/service/MedicoService";

export default {
  data() {
    return {
      perfilVeterinaria: null,
      veterinarios: [],
    };
  },
  watch: {
    $route(to, from) {
      if (to == from) {
        this.$router.go();
      } else {
        this.$router.go();
      }
    },
  },
  methods: {
    loadPerfil() {
      //if (this.$route.params.id) {
      console.log(this.$route.query.idVeterinaria);

      if (this.$route.query.idVeterinaria) {
        //const idVeterinaria = this.$route.params.id;
        const idVeterinaria = this.$route.query.idVeterinaria;
        this.veterinariaService
          .getVeterinaria(idVeterinaria)
          .then((response) => {
            this.perfilVeterinaria = response.data;
            this.medicoService
              .medicosSegunVeterinaria(this.perfilVeterinaria.idVeterinaria)
              .then((response) => {
                this.veterinarios = response.data;
              });
          });
      } else {
        this.veterinariaService.obtenerPerfil().then((response) => {
          this.perfilVeterinaria = response.data;
          this.medicoService
            .medicosSegunVeterinaria(this.perfilVeterinaria.idVeterinaria)
            .then((response) => {
              this.veterinarios = response.data;
            });
        });
      }
    },
  },
  veterinariaService: null,
  medicoService: null,
  created() {
    this.veterinariaService = new VeterinariaService();
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.loadPerfil();
  },
};
</script>

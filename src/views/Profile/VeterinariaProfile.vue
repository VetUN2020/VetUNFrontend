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
                    <Button
                      v-if="
                        $store.state.MenuBar.userAuth.rolUsuario === 'DUENO'
                      "
                      label="Calificar Veterinaria"
                      class="p-button-rounded mt-2 p-button-success"
                      style="margin: 0 auto;"
                      @click="calificarVeterinaria()"
                    />
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
                  <div class="card h-100" @click="perfilMedico(item.idMedico)">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <h3 class="text-right mb-2">Comentarios y calificaciones</h3>
        <div class="row gutters-sm mt-2">
          <div
            v-for="calificacion in calificaciones"
            :key="calificacion.idComentarioVeterinaria"
            class="col-md-6 mb-4"
          >
            <div class="card">
              <div class="card-body">
                <p class="text-right mb-0">{{ calificacion.puntuacionV }}/5</p>
                <h5>"{{ calificacion.comentarioV }}"</h5>
                <p class="text-right">
                  -{{ calificacion.idDueno.nombreDueno }}
                  {{ calificacion.idDueno.apellidoDueno }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <HereMap
            v-if="perfilVeterinaria"
            :veterinariaProfile="perfilVeterinaria.direccionVeterinaria"
            :veterinarias="[]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VeterinariaService from "@/service/VeterinariaService";
import MedicoService from "@/service/MedicoService";
import HereMap from "@/components/HereMap.vue";

export default {
  components: {
    HereMap,
  },
  data() {
    return {
      perfilVeterinaria: null,
      veterinarios: [],
      calificaciones: [],
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
    calificarVeterinaria() {
      const id = this.$route.query.idVeterinaria;
      this.$router
        .push({
          name: "agregarCalificacionVeterinaria",
          query: { idVeterinaria: id },
        })
        .catch(() => {});
    },
    loadPerfil() {
      if (this.$route.query.idVeterinaria) {
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

        this.veterinariaService
          .getCalificaciones(idVeterinaria)
          .then((response) => {
            response.data.forEach((element) => {
              this.calificaciones.push(element);
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
    perfilMedico(idM) {
      this.$router
        .push({
          name: "MyMedicoProfile",
          query: { idMedico: idM },
        })
        .catch(() => {});
      this.showResults = false;
      this.busqueda = "";
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
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
};
</script>

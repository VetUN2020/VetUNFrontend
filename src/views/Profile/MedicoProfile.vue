<template>
  <div class="MedicoProfile">
    <div class="container">
      <div class="main-body">
        <br /><br />
        <template v-if="perfilMedico">
          <div class="row justify-content-sm-center justify-content-xs-center">
              <div class="card mb-5" style="width: 80%;">
                <div class="card-body">
                  <div
                    class="d-flex flex-column align-items-center text-center"
                  >
                  <div class="col-lg-auto">
                    <img
                      id="profilePic"
                      src="@/assets/veterinario.jpg"
                      alt="Medico"
                      width="200"
                    />
                    <div class="mt-3">
                      <h3 class="text-info">
                        {{ perfilMedico.nombreMedico }}
                        {{ perfilMedico.apellidoMedico }}
                      </h3>
                      <p class="text-secondary mb-1">Medico veterinario</p>
                    </div>
                  </div>
                  <br />
                  <div class="col-md-8">
                  <!--Cedula-->

                  <!--Direccion-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Direccion</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.direccionMedico }}
                    </div>
                  </div>

                  <!--Telefono-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.telefonoMedico }}
                    </div>
                  </div>

                  <!--Matricula profesional-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Matricula profesional</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.matriculaProfesional }}
                    </div>
                  </div>

                  <!--Email-->
                  <hr v-if="perfilMedico.correoMedico" />
                  <div class="row" v-if="perfilMedico.correoMedico">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.correoMedico }}
                    </div>
                  </div>

                  <!--Contraseña-->
                  <!--Usuario-->
                  <hr v-if="perfilMedico.usuarioMedico" />
                  <div v-if="perfilMedico.usuarioMedico" class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Usuario</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.usuarioMedico }}
                    </div>
                  </div>
                  <br>
                  <div
                    class="flex-row align-items-center text-center row justify-content-around"
                  >
                    <Button
                      v-if="
                        $store.state.MenuBar.userAuth.rolUsuario === 'DUENO'
                      "
                      label="Agendar cita"
                      class="col-4 p-button-rounded
                    p-button-success"
                      @click="agendarCitaMascota()"
                    />
                    <Button
                      v-if="
                        $store.state.MenuBar.userAuth.rolUsuario === 'DUENO'
                      "
                      label="Comentario"
                      class="col-4 p-button-rounded p-button-success"
                      @click="calificarVeterinario()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <h3 class="text-center mb-4">Comentarios y calificaciones</h3>
          <div class="row" style="width: 100%;">
            <div
              v-for="calificacion in calificaciones"
              :key="calificacion.idComentarioMedico"
              class="col-md-6 mb-4"
            >
              <div class="card">
                <div class="card-body">
                  <p class="text-right mb-0">
                    {{ calificacion.puntuacionM }}/5
                  </p>
                  <h5>"{{ calificacion.comentarioM }}"</h5>
                  <p class="text-right">
                    -{{ calificacion.idDueno.nombreDueno }}
                    {{ calificacion.idDueno.apellidoDueno }}
                  </p>
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
//import CitasService from "@/service/CitasService";
import MedicoService from "@/service/MedicoService";

export default {
  medicoService: null,
  data() {
    return {
      perfilMedico: null,
      medicoLoaded: false,
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
    loadPerfil() {
      if (this.$route.query.idMedico) {
        const idMedico = this.$route.query.idMedico;
        this.medicoService.getMedico(idMedico).then((response) => {
          this.perfilMedico = response.data;
        });

        this.medicoService.getCalificaciones(idMedico).then((response) => {
          response.data.forEach((element) => {
            this.calificaciones.push(element);
          });
          console.log(this.calificaciones);
        });
      } else {
        this.medicoService.obtenerPerfil().then((response) => {
          this.perfilMedico = response.data;
        });
      }
    },
    agendarCitaMascota() {
      const id = this.$route.query.idMedico;
      this.$router
        .push({
          name: "AgendarCitaMascota",
          query: { idMedico: id },
        })
        .catch(() => {});
    },
    calificarVeterinario() {
      const id = this.$route.query.idMedico;
      this.$router
        .push({
          name: "agregarCalificacionMedico",
          query: { idMedico: id },
        })
        .catch(() => {});
    },
  },
  created() {
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.loadPerfil();
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
};
</script>
<style  scoped>
.p-button{
  background:#1abc9c !important;
}
</style>

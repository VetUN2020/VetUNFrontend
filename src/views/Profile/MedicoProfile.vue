<template>
  <div class="MedicoProfile">
    <div class="container">
      <div class="main-body">
        <br /><br />
        <template v-if="perfilMedico">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-flex flex-column align-items-center text-center"
                  >
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
                  <br>
                  <div class="d-flex flex-column align-items-center text-center">

                    <Button label="Agendar cita" class="p-button-rounded p-button-success" @click="agendarCitaMascota()" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <!--Cedula-->
                  <div class="row">
                    <div class="col-sm-4">
                      <h6 class="mb-0 text-primary">Cedula</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilMedico.cedulaMedico }}
                    </div>
                  </div>

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

      } else {
        this.medicoService.obtenerPerfil().then((response) => {
          this.perfilMedico = response.data;
        });
      }
    },
    agendarCitaMascota() {
      //this.$router.push("/agendarCitaMascota");
      const id = this.$route.query.idMedico;
      this.$router
        .push({
          name: "AgendarCitaMascota",
          query: { idMedico: id },
        })
        .catch(() => {});
    }
  },
  created() {
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.loadPerfil();
  },
};
</script>

<template>
  <div class="vetProfile">
    <div class="container">
      <div class="main-body">
        <br /><br />
        <template v-if="perfilDueno">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-flex flex-column align-items-center text-center"
                  >
                    <img
                      id="profilePic"
                      src="@/assets/dueno.png"
                      alt="Dueno"
                      width="200"
                    />
                    <div class="mt-3">
                      <h3 class="text-info">
                        {{ perfilDueno.nombreDueno }}
                        {{ perfilDueno.apellidoDueno }}
                      </h3>
                      <p class="text-secondary mb-1">Dueño de mascota</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <!--Cedula-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">C.C.</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilDueno.cedulaDueno }}
                    </div>
                  </div>

                  <!--Direccion-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Direccion</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilDueno.direccionDueno }}
                    </div>
                  </div>

                  <!--Telefono-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilDueno.telefonoDueno }}
                    </div>
                  </div>

                  <!--Email-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilDueno.correoDueno }}
                    </div>
                  </div>

                  <!--Usuario-->
                  <hr />
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Usuario</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{ perfilDueno.usuarioDueno }}
                    </div>
                  </div>
                </div>
              </div>
              <!--Mascotas-->
              <div class="container" id="app">
                <div class="row">
                  <div
                    v-for="item in misMascotas"
                    v-bind:key="item"
                    class="col-md-3 col-6 my-1"
                  >
                    <div
                      class="card h-100"
                      @click="perfilMedico(item.idMedico)"
                    >
                      <img
                        id="profilePic"
                        src="@/assets/mascota.jpg"
                        alt="Admin"
                        width="100%"
                      />
                      <div class="card-body">
                        <div class="card-title">
                          <strong>{{ item.nombreMascota }} </strong>
                        </div>
                        <div>
                          <span class="badge badge-pill badge-info"
                            >Especie: {{ item.especie }}</span
                          >
                          <hr />
                          <span class="badge badge-pill badge-info"
                            >Raza: {{ item.raza }}</span
                          >
                        </div>
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
import MascotaService from "@/service/MascotaService";
import DuenoService from "@/service/DuenoService";

export default {
  data() {
    return {
      perfilDueno: null,
      misMascotas: [],
    };
  },
  methods: {},
  duenoService: null,
  mascotaService: null,
  created() {
    this.duenoService = new DuenoService();
    this.mascotaService = new MascotaService();
    this.mascotaService.getMascotasDueno().then((response) => {
      if (response.status === 200) {
        this.misMascotas = response.data;
        console.log(this.misMascotas);
      }
    });
  },
  mounted() {
    this.duenoService.obtenerPerfil().then((response) => {
      this.perfilDueno = response.data;
      console.log(response.data);
    });
  },
};
</script>

<template>
  <div class="vetProfile">
    <div class="container">
      <div class="main-body">
        <br /><br />
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
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
                <hr />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VeterinariaService from "@/service/VeterinariaService";

export default {
  veterinariaService: null,
  data() {
    return {
      perfilVeterinaria: null,
    };
  },
  methods: {},
  created() {
    this.veterinariaService = new VeterinariaService();
  },
  mounted() {
    this.veterinariaService.obtenerPerfil().then((response) => {
      this.perfilVeterinaria = response.data;
    });
  },
};
</script>

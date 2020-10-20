<template>
  <div class="vetProfile">
    <div class="container">
    <div class="main-body">
        <br><br>
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img id="profilePic" src="@/assets/veterinario.jpg" alt="Admin" width="200">
                    <div class="mt-3">
                      <h3 class="text-info" >{{medico.nombreMedico}} {{medico.apellidoMedico}}</h3>
                      <p class="text-secondary mb-1">Medico veterinario</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  
                  <!--IdMedico-->
                  <div class="row">
                    <div class="col-sm-4">
                      <h6 class="mb-0 text-primary">Id Medico</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.idMedico}}
                    </div>
                  </div>

                  <!--Cedula-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">C.C.</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.cedulaMedico}}
                    </div>
                  </div>

                  <!--Direccion-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Direccion</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.direccionResidencia}}
                    </div>
                  </div>

                  <!--Telefono-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.telefonoMedico}}
                    </div>
                  </div>

                  <!--Matricula profesional-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Matricula profesional</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.matriculaProfesional}}
                    </div>
                  </div>

                  <!--Email-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.correoMedico}}
                    </div>
                  </div>

                  <!--Contraseña-->
                  <hr>
                  <div class="row">
                    <div class="col-sm-4 text-primary">
                      <h6 class="mb-0">Contraseña</h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.contraseniaMedico}}
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
//import CitasService from "@/service/CitasService";
import MedicoService from "@/service/MedicoService";

export default {
  medicoService: null,
  created() {
    this.medicoService = new MedicoService;
  },
  mounted(){
  },
  data() {
    return {
        medico: {
            idMedico:               this.$store.state.Medico.userM.idMedico,
            cedulaMedico:           this.$store.state.Medico.userM.cedulaMedico,
            nombreMedico:           this.$store.state.Medico.userM.nombreMedico,
            apellidoMedico:         this.$store.state.Medico.userM.apellidoMedico,
            direccionResidencia:    this.$store.state.Medico.userM.direccionResidencia,
            telefonoMedico:         this.$store.state.Medico.userM.telefonoMedico,
            matriculaProfesional:   this.$store.state.Medico.userM.matriculaProfesional,
            correoMedico:           this.$store.state.Medico.userM.correoMedico,
            contraseniaMedico:      this.$store.state.Medico.userM.contraseniaMedico,
        },
    };
  },
  methods: {
    save() {
    },
  }
};
</script>

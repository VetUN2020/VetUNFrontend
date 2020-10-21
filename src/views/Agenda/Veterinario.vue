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
                      <p class="text-secondary mb-1">Citas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">

              <div class="card mb-3" v-for="cita in citas" :key="cita">
                <div class="card-body">                  
                  <div class="row">
                    <div class="col-sm-4">
                      <h6 class="mb-0 text-primary">CITA: </h6>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      {{medico.idMedico}}
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
import CitasService from "@/service/CitasService";

export default {
  citasService: null,
  created() {
    this.citasService = new CitasService();
    
  },
  beforeMounted(){
    this.loadData();
  },
  data() {
    return {
        idVet:               this.$store.state.Medico.userM.idMedico,
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
        citas: []
    };
  },
  methods: {
    loadData(){
       this.citasService.getAll().then((response) => {
          console.log(response.data);
          this.citas = response.data;
        });
    }
  }
};
</script>

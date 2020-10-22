<template>
  <div class="agendarCita">
    <br />
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 30rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title"> Agendar cita </template>
      <template slot="content">
        <h6 style="text-align: left">Diligencia los siguientes datos para obtener tu cita:</h6>
        <br />
        <h6 style="text-align: left">Fecha</h6>
        <br>
        <Calendar v-model="cita.fechaCita" :showTime="true" :minDate="hoy" dateFormat="dd.mm.yy" hourFormat="12" />
        <br><br>
        <h6 style="text-align: left">Elegir veterinaria</h6>
        <br>
        <button type="button" class="btn btn-primary" @click="cargarVeterinarias">Cargar Veterinarias</button>
        <br><br><br>
        <Dropdown
          v-model="idVeterinariaAux"
          :options="vetDisp"
          optionLabel="name"
          placeholder="Selecciona una veterinaria"
        />
        <br><br>
        <h6 style="text-align: left">Elegir mascota</h6>
        <br>
        <button type="button" class="btn btn-primary" @click="cargarMascotas">Cargar mis mascotas</button>
        <br><br><br>
        <Dropdown
          v-model="idMascotaAux"
          :options="misMascotas"
          optionLabel="name"
          placeholder="Selecciona una de tus mascotas"
        />
        <br><br>
        <h6 style="text-align: left">Elegir tipo de consulta</h6>
        <br><br>
        <Dropdown
          v-model="cita.tipoCita"
          :options="tiposCitas"
          optionLabel="name"
          placeholder="Selecciona tipo de consulta"
        />
        <br><br><br>
        <button type="button" class="btn btn-outline-info" @click="verificarDisponibilidad">Verificar disponibilidad</button>
        <br><br>
      </template>
      <template slot="footer">
        <Button
          label="Asignar Cita"
          class="p-button-rounded p-button-success"
          @click="save"
        />
      </template>
    </Card>
  <Message severity="error" v-if="datosFaltantes">{{
      datosFaltantes
    }}</Message>
  </div>
</template>

<script>
// @ is an alias to /src
import CitasService from "@/service/CitasService";
import VeterinariaService from "@/service/VeterinariaService"
import MascotaService from "@/service/MascotaService"

export default {
  name: "agendarCita",
  citaService: null,
  veterinariaService: null,
  mascotaService: null,
  created() {
    this.citaService = new CitasService();
    this.veterinariaService = new VeterinariaService();
    this.mascotaService = new MascotaService();
    this.veterinariaService.getVeterinaryNames().then(response => {
        this.veterinariasDisponibles = response.data;
    });
    this.mascotaService.getByIdDueno(this.idDueno).then(response => {
        this.misMascotasAux = response.data;
    });
  },
  data() {
    return {
      misMascotasAux: null,
      misMascotas: [],
      disp: new Boolean(false),
      idDueno: this.$store.state.Dueno.userD.idDueno,
      hoy: new Date(),
      idVeterinariaAux: null, 
      idVeterinariaAux2:null,
      idMascotaAux: null,
      idMascotaAux2: null,
      cita: {
        fechaCita: null,
        idVeterinaria: {
            idVeterinaria: null,
            nombreVeterinaria: null,
            direccionVeterinaria: null,
            telefonoVeterinaria: null,
            localizacion: null,
            tipoVeterinaria: null
        },
        tipoCita: null,
        idMascota: {
          idMascota: null,
            idDueno: {
                idDueno: null,
                cedulaDueno: null,
                nombreDueno: null,
                apellidoDueno: null,
                telefonoDueno: null,
                direccionCasa: null,
                correoElectronico: null,
                contraseniaDueno: null
            },
            nombreMascota: null,
            especie: null,
            raza: null
        },
      },
      tiposCitas:[
        {name: "Consulta"},
        {name: "Cirugia"}
      ],
      datosFaltantes: null,
      error: null,
      correoExistente: null,
      veterinariasDisponibles: [],
      vetDisp: []
    };
  }, 
  mounted() {
      this.cargarVeterinarias()
  },
  methods: {
    cargarVeterinarias(){
      var i = 0;
      this.veterinariasDisponibles.forEach(element => {
        this.vetDisp[i] = {name: element};
        i = i + 1;
      });
    },
    cargarMascotas(){
      var i = 0;
      this.misMascotasAux.forEach(element => {
        this.misMascotas[i] = {name: element};
        i = i + 1;
      });
    },
    verificarDisponibilidad(){
      if(this.cita.fechaCita != null && this.idVeterinariaAux != null){
        this.disp = this.citaService.checkAvailabilityByDateAndIdVeterinary(this.cita.fechaCita, (Object.values(this.idVeterinariaAux).toString().split(" ")[0]))
        .then(response => {
            return response.data;
        });
        if (Object.values(this.disp)) {
          this.veterinariaService
          this.idVeterinariaAux2 = (Object.values(this.idVeterinariaAux).toString().split(" ")[0]);
          this.idMascotaAux2 = (Object.values(this.idMascotaAux).toString().split(" ")[0]);
          alert("La fecha que ingresaste esta disponible para que realices tu cita");
        }
      }else{
        alert("Tienes que escoger una fecha y una veterinaria, con el fin de ver la disponibilidad");
        this.cita.idVeterinaria = null;
        this.idVeterinariaAux = null;
      }
    },
    save() {
      if (Object.values(this.disp)) {
        this.cita.idMascota.idMascota = parseInt(this.idMascotaAux2);
        this.cita.idVeterinaria.idVeterinaria = parseInt(this.idVeterinariaAux2);
        this.cita.tipoCita = (Object.values(this.cita.tipoCita).toString());
        console.log(this.cita);
        this.citaService.agregarCita(this.cita).then((data) => {
          if (data.status === 200) {
            this.cita = {
              fechaCita: null,
              idVeterinaria: null,
              tipoCita: null,
              idMascota: null,
            };
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Te has registrado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push("/");
          }
        });
      }else{
        alert("Revisa la disponibilidad de la fecha!");
      }
      
      
    },
  }
};
</script>

<style scoped>
.p-dropdown {
  width: 23rem;
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 15px;
  text-align: left;
}
</style>

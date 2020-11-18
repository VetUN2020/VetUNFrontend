<template>
  <div class="search-bar form-inline">
    <input
      v-model="busqueda"
      placeholder="Buscar"
      @keyup="fetchInfo(busqueda)"
    />

    <div class="search-results" v-if="showResults">
      <h5 v-if="resultadosMedicos.length > 0">Medicos:</h5>

      <ul
        @click="goMedico(medico.idMedico)"
        v-for="medico in resultadosMedicos"
        :key="medico.id"
      >
        <li>{{ medico.nombreMedico }} {{ medico.apellidoMedico }}</li>
      </ul>

      <h5 v-if="resultadosVeterinarias.length > 0">Veterinarias:</h5>
      <ul
        @click="goVet(veterinaria.idVeterinaria)"
        v-for="veterinaria in resultadosVeterinarias"
        :key="veterinaria.id"
      >
        <li>{{ veterinaria.nombreVeterinaria }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import MedicoService from "../service/MedicoService";
import VeterinariaService from "../service/VeterinariaService";
export default {
  medicoService: null,
  veterinariaService: null,
  created() {
    this.medicoService = new MedicoService();
    this.veterinariaService = new VeterinariaService();
  },
  beforeMount() {
    this.loadVeterinarias();
    this.loadMedicos();
  },
  data() {
    return {
      medicos: [],
      veterinarias: [],
      resultadosMedicos: [],
      resultadosVeterinarias: [],
      showResults: false,
      busqueda: "",
    };
  },
  methods: {
    loadMedicos() {
      this.medicoService.getAll().then((response) => {
        response.data.map((item) => {
          this.medicos.push(item);
        });
      });
    },
    loadVeterinarias() {
      this.veterinariaService.getAll().then((response) => {
        response.data.map((item) => {
          this.veterinarias.push(item);
        });
      });
    },
    goMedico(id) {
      this.$router
        .push({
          name: "MyMedicoProfile",
          query: { idMedico: id },
        })
        .catch(() => {});
      this.showResults = false;
      this.busqueda = "";
    },
    goVet(id) {
      this.$router
        .push({
          name: "MyVeterinariaProfile",
          query: { idVeterinaria: id },
        })
        .catch(() => {});
      this.showResults = false;
      this.busqueda = "";
    },
    fetchInfo(busqueda) {
      if (busqueda) {
        this.showResults = true;
        this.medicos.filter((item) => {
          let medicoName =
            item.nombreMedico.toLowerCase() +
            "" +
            item.apellidoMedico.toLowerCase();
          let busquedaMed = busqueda.toLowerCase();
          if (
            medicoName.includes(busquedaMed) &&
            !this.resultadosMedicos.includes(item)
          ) {
            if (this.resultadosMedicos.length < 3) {
              this.resultadosMedicos.push(item);
            }
          } else if (!medicoName.includes(busquedaMed)) {
            let i = this.resultadosMedicos.indexOf(item);
            if (i > -1) {
              this.resultadosMedicos.splice(i, 1);
            }
          }
        });
        this.veterinarias.filter((item) => {
          let nameVet = item.nombreVeterinaria.toLowerCase();
          let busquedaVet = busqueda.toLowerCase();
          if (
            nameVet.includes(busquedaVet) &&
            !this.resultadosVeterinarias.includes(item)
          ) {
            if (this.resultadosVeterinarias.length < 3) {
              this.resultadosVeterinarias.push(item);
            }
          } else if (!nameVet.includes(busquedaVet)) {
            let i = this.resultadosVeterinarias.indexOf(item);
            if (i > -1) {
              this.resultadosVeterinarias.splice(i, 1);
            }
          }
        });
      } else {
        this.showResults = false;
        this.resultadosMedicos = [];
        this.resultadosVeterinarias = [];
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin: 0rem 0.5rem;
  width: 30vw;
}
.search-bar input {
  width: 100%;
}
.search-results {
  background-color: #fff;
  position: absolute;
  top: 55px;
  width: 30vw;
}
</style>

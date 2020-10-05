<template>
  <div class="registroMascota">
    <Card
      style="
        margin: 0 auto;
        text-align: center;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
        <template slot="title"> Registra tu mascota </template>
        <h4>Danos los siguientes datos: </h4>
        <template slot="content">
            <h6 style="text-align:left">Diligencia los siguientes datos: </h6>
            <br>
            <div class="p-field p-grid">
                <span class="p-float-label">
                    <InputText
                        id="idDueno"
                        type="text"
                        v-model="mascota.idDueno"
                        style="width: 100%"
                    />
                    <label for="username">Cedula</label>
                </span>
            </div>
            <br>
            <div class="p-field p-grid">
                <span class="p-float-label">
                    <InputText
                        id="Nombre"
                        type="text"
                        v-model="mascota.nombreMascota"
                        style="width: 100%"
                    />
                    <label for="username">Nombre</label>
                </span>
            </div>
            <br>
            <h6 style="text-align:center">Especie</h6>
            <select v-model="mascota.especie" style="width:370px">
                <option disabled value="">Selecciona una raza</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Caballo</option>
                <option>pejelagarto</option>
                <option>Otra raza</option>
            </select>
            <br>
            <br>
            <div class="p-field p-grid">
                <span class="p-float-label">
                    <InputText
                        id="Raza"
                        type="text"
                        v-model="mascota.raza"
                        style="width: 100%"
                    />
                    <label for="username">Raza</label>
                </span>
            </div>
            <br>

            <h6 style="text-align:center">Vacunas</h6>
            <div id='example-3' style="text-align:left">
                <input type="checkbox" id="Moquillo" value="Moquillo" v-model="checkedNames">
                <label for="Moquillo">_Moquillo</label>
                <br>
                <input type="checkbox" id="adenovirus" value="adenovirus" v-model="checkedNames">
                <label for="adenovirus">_Adenovirus</label>
                <br>
                <input type="checkbox" id="parvovirus" value="parvovirus" v-model="checkedNames">
                <label for="parvovirus">_Parvovirus</label>
                <br>
                <input type="checkbox" id="adenovirus2" value="adenovirus2" v-model="checkedNames">
                <label for="adenovirus2">_Adenovirus2</label>
            </div>

            <h6 style="text-align:center">Citas</h6>
            <div id='example-3' style="text-align:left">
                <input type="checkbox" id="Lunes" value="Lunes" v-model="checkedNames2">
                <label for="Lunes">_Lunes</label>
                <br>
                <input type="checkbox" id="Martes" value="Martes" v-model="checkedNames2">
                <label for="Martes">_Martes</label>
                <br>
                <input type="checkbox" id="Miercoles" value="Miercoles" v-model="checkedNames2">
                <label for="Miercoles">_Miercoles</label>
                <br>
                <input type="checkbox" id="Jueves" value="Jueves" v-model="checkedNames2">
                <label for="Jueves">_Jueves</label>
            </div>
        </template>
        <template slot="footer">
        <router-link to="/login"
          ><Button
            label="Registrarse"
            class="p-button-rounded p-button-success"
            @click="save"
        /></router-link>
      </template>
    </Card>

  </div>
</template>

<script>
// @ is an alias to /src
import MascotaService from "../service/MascotaService";

export default {
    name: 'RegistroMascota',
    data() {
        return {
            mascota: {
                idDueno:        null,
                nombreMascota:  null,
                especie:        null,
                raza:           null,
                vacunas:        null,
                citas:          null,
            },

            checkedNames: [],
            checkedNames2: [],
        };
    },
    mascotaServ: null,
    created() {
        this.mascotaServ = new MascotaService();
    },
    methods: {
        save() {
            this.mascota.vacunas = this.checkedNames,
            this.mascota.citas = this.checkedNames2,
            this.mascotaServ.agregarMascota(this.mascota).then((data) => {
                if (data.status === 200) {
                    this.mascota = {
                        idDueno:        null,
                        nombreMascota:  null,
                        especie:        null,
                        raza:           null,
                        vacunas:        null,
                        citas:          null,
                    };
                }
            });
            this.$swal({
                position: "top-end",
                icon: "success",
                title: "Te has registrado correctamente",
                showConfirmButton: false,
                timer: 1500,
            })
        }
    }
};
</script>

<style scoped>
</style>



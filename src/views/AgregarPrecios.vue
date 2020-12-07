<template>
  <div class="agregarPrecios fondo">
    <Card
      style="
        margin: 0 auto;
        text-align: left;
        width: 25rem;
        margin-bottom: 2em;
      "
    >
      <template slot="title">
        <div class="text">
          Agregue los tipos de citas y sus precios
        </div>
      </template>
      <template slot="content">
        <div class="p-field p-grid">
          <div class="p-field p-col-12 p-md-3">
            <h5>Consulta General</h5>
            <InputSwitch style="margin-right: 50px;" v-model="checked[0]" />
            <InputNumber
              style="margin-top: 0px;"
              id="integeronly"
              v-model="value[0]"
              v-if="checked[0]"
            />
            <br />
            <br />
            <h5>Vacunacion</h5>
            <InputSwitch style="margin-right: 50px;" v-model="checked[1]" />
            <InputNumber
              style="margin-top: 0px;"
              id="integeronly"
              v-model="value[1]"
              v-if="checked[1]"
            />
            <br />
            <br />
            <h5>Cirugia</h5>
            <InputSwitch style="margin-right: 50px;" v-model="checked[2]" />
            <InputNumber
              style="margin-top: 0px;"
              id="integeronly"
              v-model="value[2]"
              v-if="checked[2]"
            />
            <br />
            <br />
            <h5>Cita especializada</h5>
            <InputSwitch style="margin-right: 50px;" v-model="checked[3]" />
            <InputNumber
              style="margin-top: 0px;"
              id="integeronly"
              v-model="value[3]"
              v-if="checked[3]"
            />
            <br />
            <br />
            <h5>Otros conceptos</h5>
            <InputSwitch style="margin-right: 50px;" v-model="checked[4]" />
            <InputNumber
              style="margin-top: 0px;"
              id="integeronly"
              v-model="value[4]"
              v-if="checked[4]"
            />
          </div>
        </div>
      </template>
      <template slot="footer">
        <Button label="Agregar" @click="agregarPrecios" icon="pi pi-check" />
      </template>
    </Card>
    <Message severity="error" v-if="datosFaltantes">{{
      datosFaltantes
    }}</Message>
  </div>
</template>

<script>
import MedicoService from "@/service/MedicoService";

export default {
  name: "agregarPrecios",
  data() {
    return {
      checked: [false, false, false, false, false],
      value: [0, 0, 0, 0, 0],
      preciosMedico: [],
      datosFaltantes: null,
    };
  },
  medicoService: null,
  created() {
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
  methods: {
    agregarPrecios() {
      this.preciosMedico = [];
      for (let i = 0; i < this.checked.length; i++) {
        if (this.checked[i] === true) {
          let costo = {
            idAtencion: { idAtencion: i + 1 },
            costoA: this.value[i],
          };
          this.preciosMedico.push(costo);
        }
      }

      this.medicoService
        .agregarPreciosCitas(this.preciosMedico)
        .then((data) => {
          if (data.status === 201) {
            console.log(data);
          }
        });

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.text {
  text-align: center;
}

.p-card-content {
  margin-top: 0px;
  padding-top: 0px;
}
</style>

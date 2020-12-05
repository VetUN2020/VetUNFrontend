<template>
  <div class="demo-app" v-if="datosCargados">
    <FullCalendar class="demo-app-calendar" :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <b>{{ arg.timeText }}</b>
        <i>{{ arg.event.title }}</i>
      </template>
    </FullCalendar>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src

import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DuenoService from "@/service/DuenoService";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return {
      datosCargados: false,
      allCitas: [],
      citas: [],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        initialEvents: null, // alternatively, use the `events` setting to fetch from a feed
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        eventClick: this.handleEventClick,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    };
  },
  duenoService: null,
  methods: {
    handleEventClick(clickInfo) {
      const h = this.$createElement;
      this.allCitas.forEach((cita) => {
        if (cita.idCita == clickInfo.event.id) {
          const messageVNode = h("div", { class: ["foobar"] }, [
            h("p", ["Fecha: ", cita.fechaCita]),
            h("p", ["Hora: ", cita.horaCita]),
            h("p", [
              "Medico: ",
              cita.idMedico.nombreMedico + " " + cita.idMedico.apellidoMedico,
            ]),
            h("p", ["Mascota: ", cita.idMascota.nombreMascota]),
            h("p", ["Motivo atencion: ", cita.idAtencion.descripcionAtencion]),
            h("p", ["Modalidad : ", cita.modalidadCita]),
          ]);
          this.$bvModal.msgBoxOk(messageVNode, {
            title: "Estos son los datos de tu cita",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          });
        }
      });
    },
  },
  created() {
    this.duenoService = new DuenoService();
  },
  mounted() {
    this.citas = [];
    this.duenoService.obtenerMisCitas().then((response) => {
      this.allCitas = response.data;
      response.data.forEach((element) => {
        this.citas.push({
          id: element.idCita,
          title:
            element.idAtencion.descripcionAtencion +
            " con " +
            element.idMascota.nombreMascota,
          start: element.fechaCita + "T" + element.horaCita,
        });
      });
      this.datosCargados = true;
      this.calendarOptions.initialEvents = this.citas;
    });
    this.$store.dispatch("MenuBar/MenuBarDark");
  },
};
</script>

<style></style>

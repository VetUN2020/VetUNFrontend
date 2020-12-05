<template>
  <div class="demo-app" v-if="datosCargados">
    <FullCalendar @date-click="dateClicked" :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <b>{{ arg.timeText }}</b>
        <i>{{ arg.event.title }}</i>
      </template>
    </FullCalendar>
  </div>
</template>

<script>
// @ is an alias to /src

import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import MedicoService from "@/service/MedicoService";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return {
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
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
      datosCargados: false,
      allCitas: [],
      citas: [],
    };
  },
  medicoService: null,
  methods: {
    handleEventClick(clickInfo) {
      const h = this.$createElement;
      this.allCitas.forEach((cita) => {
        if (cita.idCita == clickInfo.event.id) {
          const messageVNode = h("div", { class: ["foobar"] }, [
            h("p", ["Fecha: ", cita.fechaCita]),
            h("p", ["Hora: ", cita.horaCita]),
            h("p", ["Mascota: ", cita.idMascota.nombreMascota]),
            h("p", ["Especie: ", cita.idMascota.especie]),
            h("p", ["Raza: ", cita.idMascota.raza]),
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
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.citas = [];
    this.medicoService.obtenerMisCitas().then((response) => {
      this.allCitas = response.data;
      response.data.forEach((element) => {
        this.citas.push({
          id: element.idCita,
          title: element.idAtencion.descripcionAtencion,
          start: element.fechaCita + "T" + element.horaCita,
        });
      });
      this.datosCargados = true;
      this.calendarOptions.initialEvents = this.citas;
      this.$store.dispatch("MenuBar/MenuBarDark");
    });
  },
};
</script>

<style></style>

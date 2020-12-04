<template>
  <div class="demo-app" v-if="datosCargados">
    <FullCalendar class="demo-app-calendar" :options="calendarOptions">
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
import DuenoService from "@/service/DuenoService";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return {
      datosCargados: false,
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
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
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
  methods: {},
  created() {
    this.duenoService = new DuenoService();
  },
  mounted() {
    this.citas = [];
    this.duenoService.obtenerMisCitas().then((response) => {
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

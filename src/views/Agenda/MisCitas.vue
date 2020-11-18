<template>
  <div class="demo-app">
    <div class="demo-app-main">
      <FullCalendar
        class="demo-app-calendar"
        :options="calendarOptions"
        :events="events"
        v-if="micas.length > 0"
      >
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
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
      micas: [],
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
      events: null,
      currentEvents: [],
      bool: false,
    };
  },
  medicoService: null,
  methods: {
    agregarCitas(citas) {
      console.log("m", citas);
      let c = [];
      c.push({
        id: 1,
        title: "All Day Event",
        start: "2020-11-16",
      });
      return c;
    },
    mostrar() {
      console.log(this.micas);
    },
  },
  created() {
    this.medicoService = new MedicoService();
  },
  mounted() {
    this.micas = [];
    this.medicoService.obtenerMisCitas().then((response) => {
      response.data.forEach((element) => {
        this.micas.push({
          id: element.idCita,
          title: element.idAtencion.descripcionAtencion,
          start: element.fechaCita + "T" + element.horaCita,
        });
      });
      this.calendarOptions.initialEvents = this.micas;
    });
  },
};
</script>

<style></style>

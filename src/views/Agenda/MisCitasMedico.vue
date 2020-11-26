<template>
  <div class="demo-app" v-if="datosCargados">
      <FullCalendar
        class="demo-app-calendar"
        :options="calendarOptions"
      >
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
        eventClick: this.mostrarInfo,
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
  medicoService: null,
  methods: {
    mostrarInfo(arg){
      this.allCitas.forEach(cita => {
        if(cita.idCita == arg.event.id){
          console.log("entro2");
          console.log(cita);
        }
      })
    }
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
      this.datosCargados = true
      this.calendarOptions.initialEvents = this.citas;
    })
  },
};
</script>

<style></style>

<template>
  <div class="misCitas">
    <FullCalendar :events="events" :options="options" />
  </div>
</template>

<script>
// @ is an alias to /src

import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "misCitas",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: "2019-01-01",
        header: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        editable: true,
      },
      events: [
        {
          id: 1,
          title: "All Day Event",
          start: "2019-01-01",
        },
        {
          id: 2,
          title: "Long Event",
          start: "2019-01-07",
          end: "2019-01-10",
        },
        {
          id: 3,
          title: "Repeating Event",
          start: "2019-01-09T16:00:00",
        },
        {
          id: 4,
          title: "Repeating Event",
          start: "2019-01-16T16:00:00",
        },
        {
          id: 5,
          title: "Conference",
          start: "2019-01-11",
          end: "2019-01-13",
        },
        {
          id: 6,
          title: "Meeting",
          start: "2019-01-12T10:30:00",
          end: "2019-01-12T12:30:00",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.calendar {
  width: 500px;
  height: 500px;
}
</style>

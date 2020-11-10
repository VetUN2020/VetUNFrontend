import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Table from "../views/Table.vue";
import RegistroDueno from "../views/Register/RegistroDueno.vue";
import RegistroVeterinaria from "../views/Register/RegistroVeterinaria.vue";
import RegistroMedico from "../views/Register/RegistroMedico.vue";
import RegistroMascota from "../views/Register/RegistroMascota.vue";
import AgendarCita from "../views/Register/AgendarCita.vue";
import CitasVet from "../views/Agenda/Veterinario.vue";
import MedicoProfile from "../views/Profile/MedicoProfile.vue";
import DuenoProfile from "../views/Profile/DuenoProfile.vue";
import VeterinariaProfile from "../views/Profile/VeterinariaProfile.vue";
import LoginUser from "../views/Login/LoginUser.vue";
import AgregarHorario from "../views/AgregarHorario.vue";

import AgendarCitaMascota from "../views/Register/AgendarCitaMascota.vue";

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/crud",
      name: "CrudApp",
      component: Table,
    },
    {
      path: "/registroDueno",
      name: "registroDueno",
      component: RegistroDueno,
    },
    {
      path: "/mascotaRegistro",
      name: "registroMascota",
      component: RegistroMascota,
    },
    {
      path: "/registroMedico",
      name: "registroMedico",
      component: RegistroMedico,
    },
    {
      path: "/registroVeterinaria",
      name: "registroveterinaria",
      component: RegistroVeterinaria,
    },
    {
      path: "/agendarCita",
      name: "agendarCita",
      component: AgendarCita,
    },
    {
      path: "/misCitas",
      name: "citasVet",
      component: CitasVet,
    },
    {
      path: "/medicoProfile/",
      name: "MyMedicoProfile",
      props: true,
      component: MedicoProfile,
    },
    {
      path: "/medicoProfile/:id",
      name: "MedicoProfile",
      component: MedicoProfile,
    },
    {
      path: "/duenoProfile",
      name: "DuenoProfile",
      component: DuenoProfile,
    },
    {
      path: "/veterinariaProfile",
      name: "MyVeterinariaProfile",
      props: true,
      component: VeterinariaProfile,
    },
    {
      path: "/veterinariaProfile/:id",
      name: "VeterinariaProfile",
      component: VeterinariaProfile,
    },
    {
      path: "/loginUser",
      name: "loginUser",
      component: LoginUser,
    },
    {
      path: "/agendarCitaMascota",
      name: "AgendarCitaMascota",
      props: true,
      component: AgendarCitaMascota,
    },
    {
      path: "/agregarHorario",
      name: "agregarHorario",
      component: AgregarHorario,
    },
  ],
});

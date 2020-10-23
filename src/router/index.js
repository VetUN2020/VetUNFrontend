import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Table from "../views/Table.vue";
import RegistroDueno from "../views/Register/RegistroDueno.vue";
import Veterinary from "../views/Register/Veterinary.vue";
import RegistroMedico from "../views/Register/RegistroMedico.vue";
import RegistroMascota from "../views/Register/RegistroMascota.vue";
import AgendarCita from "../views/Register/AgendarCita.vue";
import CitasVet from "../views/Agenda/Veterinario.vue";
import VetProfile from "../views/Profile/VetProfile.vue";
import DuenoProfile from "../views/Profile/DuenoProfile.vue";
import VeterinariaProfile from "../views/Profile/Veterinaria.vue";
import LoginUser from "../views/Login/LoginUser.vue";

Vue.use(VueRouter);


export default new VueRouter({
<<<<<<< HEAD
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
      path: "/regvet",
      name: "veterinary",
      component: Veterinary,
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
      path: "/vetProfile",
      name: "vetProfile",
      component: VetProfile,
    },
    {
      path: "/DuenoProfile",
      name: "DuenoProfile",
      component: DuenoProfile,
    },
    {
      path: "/veterinariaProfile",
      name: "veterinariaProfile",
      component: VeterinariaProfile,
    },
    {
      path: "/loginUser",
      name: "loginUser",
      component: LoginUser,
    },
  ],
});


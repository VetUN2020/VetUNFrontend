import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import RegistroDueno from "../views/Register/RegistroDueno.vue";
import RegistroVeterinaria from "../views/Register/RegistroVeterinaria.vue";
import RegistroMedico from "../views/Register/RegistroMedico.vue";
import RegistroMascota from "../views/Register/RegistroMascota.vue";
import MisCitasMedico from "../views/Agenda/MisCitasMedico.vue";
import MedicoProfile from "../views/Profile/MedicoProfile.vue";
import DuenoProfile from "../views/Profile/DuenoProfile.vue";
import VeterinariaProfile from "../views/Profile/VeterinariaProfile.vue";
import LoginUser from "../views/Login/LoginUser.vue";
import AgregarHorario from "../views/AgregarHorario.vue";
import AgregarPrecios from "../views/AgregarPrecios.vue";
import AgendarCitaMascota from "../views/Register/AgendarCitaMascota.vue";
import MisCitasDueno from "../views/Agenda/MisCitasDueno.vue";
import RecuperacionContrasenia from "../views/RecuperarContrasena.vue";
import NuevaContrasenia from "../views/NuevaContrasena.vue";
import AgregarCalificacionM from "../views/AgregarCalificacionM.vue";
import AgregarCalificacionV from "../views/AgregarCalificacionV.vue";
import RegistroVeterinariaExistente from "../views/Register/RegistroVeterinariaExistente.vue";
import VeterinariasCercanas from "../views/mapas/VeterinariasCercanas.vue"

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: "history",
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
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
      path: "/registroVeterinariaExistente",
      name: "registroveterinariaExistente",
      component: RegistroVeterinariaExistente,
    },
    {
      path: "/misCitasMedico",
      name: "misCitasMedico",
      component: MisCitasMedico,
    },
    {
      path: "/misCitasDueno",
      name: "misCitasDueno",
      component: MisCitasDueno,
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
    {
      path: "/agregarPrecios",
      name: "agregarPrecios",
      component: AgregarPrecios,
    },
    {
      path: "/recuperacionContrasenia",
      name: "recuperacionContrasenia",
      component: RecuperacionContrasenia,
    },
    {
      path: "/nuevaContrasenia",
      name: "nuevaContrasenia",
      component: NuevaContrasenia,
    },
    {
      path: "/calificarMedico",
      name: "agregarCalificacionMedico",
      props: true,
      component: AgregarCalificacionM,
    },
    {
      path: "/calificarVeterinaria",
      name: "agregarCalificacionVeterinaria",
      props: true,
      component: AgregarCalificacionV,
    },
    {
      path: "/veterinariasCercanas",
      name: "mapaVeterinariasCercanas",
      component: VeterinariasCercanas,
    },
  ],
});
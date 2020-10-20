import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import RegistroDueno from '../views/Register/RegistroDueno.vue'
import Veterinary from '../views/Register/Veterinary.vue'
import LoginDueno from '../views/Login/LoginDueno.vue'
import LoginMedico from '../views/Login/LoginMedico.vue'
import RegistroMedico from '../views/Register/RegistroMedico.vue'
import RegistroMascota from '../views/Register/RegistroMascota.vue'
import AgendarCita from '../views/Register/AgendarCita.vue'
import VetProfile from '../views/Profile/VetProfile.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/crud',
            name: 'CrudApp',
            component: Table
        },
        {
            path: '/registroDueno',
            name: 'registroDueno',
            component: RegistroDueno
        },
        {
            path: '/mascotaRegistro',
            name: 'registroMascota',
            component: RegistroMascota
        },
        {
            path: '/loginDueno',
            name: 'loginDueno',
            component: LoginDueno
        },
        {
            path: '/loginMedico',
            name: 'loginMedico',
            component: LoginMedico
        },
        {
            path: '/registroMedico',
            name: 'registroMedico',
            component: RegistroMedico
        }, {
            path: '/regvet',
            name: 'veterinary',
            component: Veterinary
        }, {
            path: '/agendarCita',
            name: 'agendarCita',
            component: AgendarCita
        }, {
            path: '/vetProfile',
            name: 'vetProfile',
            component: VetProfile
        }
    ]
})
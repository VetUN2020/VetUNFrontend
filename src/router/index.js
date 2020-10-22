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
import CitasVet from '../views/Agenda/Veterinario.vue'
import VetProfile from '../views/Profile/VetProfile.vue'
import DuenoProfile from '../views/Profile/DuenoProfile.vue'
import VeterinariaProfile from '../views/Profile/Veterinaria.vue'


Vue.use(VueRouter)


export default new VueRouter({

    routes: [{
<<<<<<< HEAD
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/crud',
        name: 'CrudApp',
        component: Table
    }, {
        path: '/registroDueno',
        name: 'registroDueno',
        component: RegistroDueno
    }, {
        path: '/mascotaRegistro',
        name: 'registroMascota',
        component: RegistroMascota
    }, {
        path: '/loginDueno',
        name: 'loginDueno',
        component: LoginDueno
    }, {
        path: '/loginMedico',
        name: 'loginMedico',
        component: LoginMedico
    }, {
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
        path: '/misCitas',
        name: 'citasVet',
        component: CitasVet
    }, {
        path: '/vetProfile',
        name: 'vetProfile',
        component: VetProfile
    }, {
        path: '/veterinariaProfile',
        name: 'veterinariaProfile',
        component: VeterinariaProfile
    }]
=======
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/crud',
            name: 'CrudApp',
            component: Table
        }, {
            path: '/registroDueno',
            name: 'registroDueno',
            component: RegistroDueno
        }, {
            path: '/mascotaRegistro',
            name: 'registroMascota',
            component: RegistroMascota
        }, {
            path: '/loginDueno',
            name: 'loginDueno',
            component: LoginDueno
        }, {
            path: '/loginMedico',
            name: 'loginMedico',
            component: LoginMedico
        }, {
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
            path: '/misCitas',
            name: 'citasVet',
            component: CitasVet
        }, {
            path: '/vetProfile',
            name: 'vetProfile',
            component: VetProfile
        }, {
            path: '/DuenoProfile',
            name: 'DuenoProfile',
            component: DuenoProfile
        }, {
            path: '/veterinariaProfile',
            name: 'veterinariaProfile',
            component: VeterinariaProfile
        }
    ]
>>>>>>> 9c7ade20a590da34f410c54fa725abc08b88f2d4
})
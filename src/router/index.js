import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import RegistroDueno from '../views/RegistroDueno.vue'
import LoginDueno from '../views/LoginDueno.vue'
import RegistroMedico from '../views/RegistroMedico.vue'

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
            path: '/loginDueno',
            name: 'loginDueno',
            component: LoginDueno
        },
        {
            path: '/registroMedico',
            name: 'registroMedico',
            component: RegistroMedico
        }
    ]
})
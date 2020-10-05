import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import RegistroMascota from '../views/RegistroMascota.vue'

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
            path: '/registro',
            name: 'registro',
            component: Registro
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/mascotaRegistro',
            name: 'registroMascota',
            component: RegistroMascota
        }
    ]
})
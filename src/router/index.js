import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import RegistroDueno from '../views/RegistroDueno.vue'
import Login from '../views/Login.vue'

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
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
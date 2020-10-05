import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import InputNumber from 'primevue/inputnumber';
import Message from 'primevue/message';

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import {
  BNavbar
} from 'bootstrap-vue'
import {
  BForm
} from 'bootstrap-vue'


import VueSweetalert2 from 'vue-sweetalert2';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false

Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
Vue.component('Menubar', Menubar)
Vue.component('InputText', InputText)
Vue.component('Password', Password)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('InputNumber', InputNumber)
Vue.component('Message', Message)

Vue.component('b-navbar', BNavbar)
Vue.component('b-form', BForm)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2);

new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')


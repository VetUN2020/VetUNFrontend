import Vue from 'vue'
import App from './App.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from './router'
import Menubar from 'primevue/menubar';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import {
  BNavbar
} from 'bootstrap-vue'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import {
  BForm
} from 'bootstrap-vue'
import Button from 'primevue/button';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
Vue.component('Menubar', Menubar)
Vue.component('b-navbar', BNavbar)
Vue.component('InputText', InputText)
Vue.component('Password', Password)
Vue.component('b-form', BForm)
Vue.component('Button', Button)
Vue.component('Card', Card)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from './router'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


Vue.config.productionTip = false
Vue.component('DataTable', DataTable)
Vue.component('Column', Column)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
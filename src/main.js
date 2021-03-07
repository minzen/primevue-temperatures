import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('Dialog', Dialog)
    .component('DataTable', DataTable)
    .mount('#app')

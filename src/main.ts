<<<<<<< HEAD
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
=======
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
>>>>>>> 6d08b3a9c652a0a7baf1669e699ce8f4ce06dac6

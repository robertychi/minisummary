// import { createApp } from "vue";
// import App from "./App.vue";

import { createPinia } from "pinia"
// createApp(App).mount("#app");
import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"
import "@styles/main.scss"

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app")

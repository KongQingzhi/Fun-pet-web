import { createApp } from "vue";

import "element-plus/dist/index.css";
import "./style.css";
import "tailwindcss/tailwind.css";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import pinia from "./store";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(pinia);

app.mount("#app");

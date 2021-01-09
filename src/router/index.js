import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Configurar from "../pages/Configurar.vue";
import Ejecutar from "../pages/Ejecutar.vue";

const history = createWebHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/configurar", component: Configurar },
    { path: "/ejecutar/:cantidad", component: Ejecutar }
];

export default createRouter({ history, routes });


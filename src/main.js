// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

// component
import ListBook from "./components/Home/ListBook.vue";
import ManagementBook from "./components/KelolaBuku/ManagementBook.vue";
import DetailBook from "./components/DetailBook.vue";

const routes = [
    { path: "/buku", component: ListBook },
    { path: "/kelola-buku", component: ManagementBook },
    { path: "/buku/:slug", component: DetailBook },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");

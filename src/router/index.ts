import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "About",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ResumeView.vue"),
    },
    {
      path: "/testimonials",
      name: "testimonials",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TestimonialsView.vue"),
    }
  ],
});

export default router;

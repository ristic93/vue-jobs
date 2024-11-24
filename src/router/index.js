import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import JobsView from "@/pages/JobsView.vue";
import NotFound from "@/pages/NotFound.vue";
import JobView from "@/pages/JobView.vue";
import AddJobView from "@/pages/AddJobView.vue";
import EditJobView from "@/pages/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
    {
        path: "/jobs/edit/:id",
        name: "edit-job",
        component: EditJobView,
      },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;

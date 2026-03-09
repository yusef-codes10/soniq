import ButtonsView from '@/views/ButtonsView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import DetailsView from '@/views/DetailsView.vue'
import FormsView from '@/views/FormsView.vue'
import HomeView from '@/views/HomeView.vue'
import LayoutsView from '@/views/LayoutsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: LayoutsView,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: FormsView,
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: ButtonsView,
  },
  {
    path: '/components',
    name: 'Components',
    component: ComponentsView,
  },
  // dynamic route
  {
    path: '/:slug',
    name: 'Details',
    component: DetailsView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

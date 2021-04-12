import { createRouter, createWebHistory } from 'vue-router'
import FormTranslator from '../components/FormTranslator.vue'

const routes = [
  {
    path: '/',
    name: 'formTranslator',
    component: FormTranslator
  },
  {
    path: '/about',
    name: 'About',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

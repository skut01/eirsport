import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Presentation from './components/Presentation.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/equipe', component: Presentation },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/eirsport/'),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  },
})

export default router
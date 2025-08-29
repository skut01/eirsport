import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Presentation from './components/Presentation.vue'
import Contact from './components/Contact.vue'
import Actus from './components/Actus.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/equipe', component: Presentation },
  { path: '/contact', component: Contact },
  { path: '/news', component: Actus }
]

const router = createRouter({
  history: createWebHistory('/eirsport/'),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  },
})

export default router
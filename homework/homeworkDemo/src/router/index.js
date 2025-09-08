import { createRouter, createWebHistory } from 'vue-router'
import demo from '@/views/demo.vue' 
import hello from '@/views/hello.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/demo',
      name:'demo',
      component: demo
    },
    {
      path:'/hello',
      name:'hello',
      component: hello
    },
  ],
})

export default router

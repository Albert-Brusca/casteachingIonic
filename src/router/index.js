import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/login',
    component: () => import ('../views/Login.vue'),
    name: 'login'
  },
  {
    path: '/user',
    component: () => import ('../views/User.vue'),
    name: 'user',
    meta: { private: true}
  },

  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/videos/:id',
    component: () => import ('../views/Video.vue')
  },
  {
    path: '/videos',
    component: () => import ('../views/Videos.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

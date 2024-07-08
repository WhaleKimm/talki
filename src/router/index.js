// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import RoleplaySelectionScreen from '@/components/Screen/RoleplayScreen/RoleplaySelectionScreen.vue'
import RoleplayExecutionScreen from '@/components/Screen/RoleplayScreen/RoleplayExecutionScreen.vue'

const routes = [
  {
    path: '/',
    name: 'RoleplaySelectionScreen',
    component: RoleplaySelectionScreen,
  },
  {
    path: '/execution',
    name: 'RoleplayExecutionScreen',
    component: RoleplayExecutionScreen,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

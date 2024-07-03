import { createRouter, createWebHistory } from 'vue-router';
import RoleplaySelectionScreen from '@/components/Screen/RoleplayScreen/RoleplaySelectionScreen.vue';


const routes = [
  {
    path: '/',
    name: 'RoleplaySelectionScreen',
    component: RoleplaySelectionScreen
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

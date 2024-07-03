import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/Screen/Common/MainScreen.vue';
import ExecutionScreen from '@/components/Screen/Common/ExecutionScreen.vue';
import EndScreen from '@/components/Screen/Common/EndScreen.vue';
import AnalyticsScreen from '@/components/Screen/Common/AnalyticsScreen.vue';
import RoleplaySelectionScreen from '@/components/Screen/RoleplayScreen/RoleplaySelectionScreen.vue';
import PresentationScreen from '@/components/Screen/PresentationScreen/PresentationScreen.vue';
import InterviewSelectionScreen from '@/components/Screen/InterviewScreen/InterviewSelectionScreen.vue';

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: MainScreen
  },
  {
    path: '/execution',
    name: 'ExecutionScreen',
    component: ExecutionScreen
  },
  {
    path: '/end',
    name: 'EndScreen',
    component: EndScreen
  },
  {
    path: '/analytics',
    name: 'AnalyticsScreen',
    component: AnalyticsScreen
  },
  {
    path: '/roleplay-selection',
    name: 'RoleplaySelectionScreen',
    component: RoleplaySelectionScreen
  },
  {
    path: '/presentation',
    name: 'PresentationScreen',
    component: PresentationScreen
  },
  {
    path: '/interview-selection',
    name: 'InterviewSelectionScreen',
    component: InterviewSelectionScreen
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

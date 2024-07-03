import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/Screen/Common/MainScreen.vue';
import ExecutionScreen from '@/components/Screen/Common/ExecutionScreen.vue';
import EndScreen from '@/components/Screen/Common/EndScreen.vue';
import AnalyticsScreen from '@/components/Screen/Common/AnalyticsScreen.vue';
import RoleplaySelectionScreen from '@/components/Screen/RoleplayScreen/RoleplaySelectionScreen.vue';
import PresentationScreen from '@/components/Screen/PresentationScreen/PresentationScreen.vue';
import InterviewSelectionScreen from '@/components/Screen/InterviewScreen/InterviewSelectionScreen.vue';

// 네비게이션을 위한 라우트들을 정의합니다
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
  history: createWebHistory(), // HTML5 히스토리 모드를 사용하여 깔끔한 URL을 지원합니다
  routes // 정의한 라우트들을 라우터 인스턴스에 전달합니다
});

export default router; // Vue 애플리케이션에서 사용할 라우터 인스턴스를 익스포트합니다

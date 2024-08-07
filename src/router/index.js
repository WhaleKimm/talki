import { createRouter, createWebHistory } from 'vue-router'

// 라우팅에 사용할 Vue 컴포넌트들을 임포트합니다
import MainScreen from '../components/Screen/Common/MainScreen.vue'
import InterviewSelectionScreen from '../components/Screen/InterviewScreen/InterviewSelectionScreen.vue'
import PresentationSelectionScreen from '../components/Screen/PresentationScreen/PresentationScreen.vue'
import RoleplaySelectionScreen from '../components/Screen/RoleplayScreen/RoleplaySelectionScreen.vue'
import UploadSelectionScreen from '../components/Screen/UploadScreen/UploadSelectionScreen.vue'

// 네비게이션을 위한 라우트들을 정의합니다
const routes = [
  { path: '/', component: MainScreen }, // 홈 페이지 라우트
  { path: '/interview', name: 'InterviewSelectionScreen', component: InterviewSelectionScreen }, // 인터뷰 화면 라우트
  {
    path: '/presentation',
    name: 'PresentationSelectionScreen',
    component: PresentationSelectionScreen,
  }, // 프리젠테이션 화면 라우트
  { path: '/roleplay', name: 'RoleplaySelectionScreen', component: RoleplaySelectionScreen }, // 롤플레이 화면 라우트
  { path: '/upload', name: 'UploadSelectionScreen', component: UploadSelectionScreen }, // 업로드 화면 라우트
]

// 라우터 인스턴스를 생성합니다
const router = createRouter({
  history: createWebHistory(), // HTML5 히스토리 모드를 사용하여 깔끔한 URL을 지원합니다
  routes, // 정의한 라우트들을 라우터 인스턴스에 전달합니다
})

export default router // Vue 애플리케이션에서 사용할 라우터 인스턴스를 익스포트합니다

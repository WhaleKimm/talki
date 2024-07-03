import { createApp } from 'vue';
import App from './App.vue'; // 앱 컴포넌트를 임포트합니다
import router from './router'; // 라우터를 임포트합니다

const app = createApp(App); // Vue 앱을 생성합니다

app.use(router); // 앱에 라우터를 추가합니다

// Hot Module Replacement (HMR) 설정
if (import.meta.hot) {
  import.meta.hot.accept(); // 모듈 핫 리로딩을 처리합니다
}

app.mount('#app'); // 앱을 마운트하고 지정된 요소에 연결합니다

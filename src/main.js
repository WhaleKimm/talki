import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 가져오기

const app = createApp(App);

if (module.hot) {
  module.hot.accept();
}

app.use(router); // 라우터 사용
app.mount('#app');

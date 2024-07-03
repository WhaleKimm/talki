<template>
  <!-- 메인 스크린 템플릿 -->
  <div class="main-screen">
    <!-- 웹 사이드바 컴포넌트 -->
    <WebSidebar />
    <!-- 컨텐츠 영역 -->
    <div class="content">
      <h1>Main Screen</h1> <!-- 메인 스크린 제목 -->
      <p>여기에 과거 진행한 세션 라이브러리 추가</p> <!-- 설명 문구 -->
    </div>
  </div>
</template>

<script>
// 웹 사이드바 컴포넌트 임포트
import WebSidebar from '../Bar/WebSidebar.vue';

export default {
  name: 'MainScreen', // 컴포넌트 이름
  components: {
    WebSidebar, // 웹 사이드바 컴포넌트 등록
  },
};
</script>

<style scoped>
/* 메인 스크린 스타일 */
.main-screen {
  display: flex; /* 플렉스 박스로 배치 */
}

/* 컨텐츠 영역 스타일 */
.content {
  margin-left: 200px; /* 사이드바 너비만큼 왼쪽 여백 */
  padding: 20px; /* 패딩 */
  width: calc(100% - 200px); /* 사이드바 너비만큼 제외한 나머지 너비 */
}
</style>

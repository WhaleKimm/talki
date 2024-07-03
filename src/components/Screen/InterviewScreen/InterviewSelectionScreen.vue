<template>
  <!-- 인터뷰 화면 템플릿 -->
  <div class="interview-screen">
    <!-- 웹 사이드바 컴포넌트 -->
    <WebSidebar />
    <!-- 컨텐츠 영역 -->
    <div class="content">
      <h1>Interview Screen</h1> <!-- 인터뷰 화면 제목 -->
      <p>인터뷰 기능, 페이지 컨텐츠 추가</p> <!-- 설명 문구 -->
    </div>
  </div>
</template>

<script>
// 웹 사이드바 컴포넌트 임포트
import WebSidebar from '../Bar/WebSidebar.vue';

export default {
  name: 'InterviewSelectionScreen', // 컴포넌트 이름
  components: {
    WebSidebar, // 웹 사이드바 컴포넌트 등록
  },
};
</script>

<style scoped>
/* 인터뷰 화면 스타일 */
.interview-screen {
  display: flex; /* 플렉스 박스로 배치 */
}

/* 컨텐츠 영역 스타일 */
.content {
  margin-left: 200px; /* 사이드바 너비만큼 왼쪽 여백 */
  padding: 20px; /* 패딩 */
  width: calc(100% - 200px); /* 사이드바 너비만큼 제외한 나머지 너비 */
}
</style>

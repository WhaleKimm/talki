<template>
  <!-- 루트 앱 컴포넌트 -->
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/roleplay">Roleplay</router-link></li>
        <li><router-link to="/presentation">Presentation</router-link></li>
        <li><router-link to="/interview">Interview</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <!-- 라우터 뷰 추가 -->
  </div>
</template>

<script>
export default {
  name: 'App', // 앱 컴포넌트의 이름
}
</script>

<style>
/* 전역 스타일 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* 폰트 패밀리 설정 */
  -webkit-font-smoothing: antialiased; /* 웹킷 브라우저용 글꼴 부드럽게 설정 */
  -moz-osx-font-smoothing: grayscale; /* 모질라 브라우저용 글꼴 부드럽게 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  color: #2c3e50; /* 텍스트 색상 */
  margin-top: 60px; /* 위쪽 마진 설정 */
}

nav {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: flex-start; /* 아이템을 왼쪽 정렬 */
}

li {
  margin-bottom: 10px; /* 탭 사이의 간격 */
}

router-link {
  text-decoration: none;
  color: #42b983;
  writing-mode: vertical-rl; /* 텍스트를 세로로 회전 */
}
</style>

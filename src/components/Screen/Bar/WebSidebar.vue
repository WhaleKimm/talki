<template>
  <!-- 사이드바 템플릿 -->
  <div class="sidebar">
    <!-- 로고 링크 -->
    <router-link to="/" class="logo-link">
      <!-- TALKI 로고 -->
      <div class="logo">TALKI</div>
    </router-link>

    <!-- 네비게이션 메뉴 -->
    <nav>
      <ul>
        <!-- 롤플레이 링크 -->
        <li><router-link to="/roleplay">Roleplay</router-link></li>
        <!-- 프레젠테이션 링크 -->
        <li><router-link to="/presentation">Presentation</router-link></li>
        <!-- 인터뷰 링크 -->
        <li><router-link to="/interview">Interview</router-link></li>
        <!-- 업로드 링크 -->
        <li><router-link to="/upload">Upload</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
/* 사이드바 스타일 */
.sidebar {
  width: 200px; /* 사이드바 너비 */
  background-color: #37474f; /* 다크 톤의 배경색 */
  color: #ffffff; /* 흰색 텍스트 */
  padding: 20px; /* 패딩 */
  height: 100vh; /* 전체 높이 */
  position: fixed; /* 고정 위치 */
  top: 0; /* 상단 정렬 */
  left: 0; /* 좌측 정렬 */
  box-sizing: border-box; /* 박스 크기 계산 */
  border-right: 1px solid #263238; /* 우측 테두리 */
}

/* 로고 스타일 */
.logo {
  font-size: 24px; /* 로고 글꼴 크기 */
  font-weight: bold; /* 글꼴 두께 */
  text-align: center; /* 가운데 정렬 */
  margin-bottom: 20px; /* 아래 여백 */
  margin-top: 0; /* 상단 여백 제거 */
  padding: 20px 0; /* 패딩 */
  line-height: 1; /* 줄 높이 */
}

/* 로고 링크 스타일 */
.logo-link {
  display: block; /* 블록 레벨 요소로 변경 */
  text-decoration: none; /* 텍스트 밑줄 제거 */
  color: #ffffff; /* 흰색 텍스트 */
  transition: color 0.3s ease; /* 색상 전환 애니메이션 */
}

/* 로고 링크 호버 스타일 */
.logo-link:hover {
  color: #ffc107; /* 호버 시 노란색 */
}

/* 네비게이션 메뉴 스타일 */
nav ul {
  list-style: none; /* 목록 스타일 제거 */
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
}

/* 네비게이션 메뉴 아이템 스타일 */
nav li {
  margin-bottom: 10px; /* 아래쪽 여백 */
}

/* 네비게이션 메뉴 링크 스타일 */
nav a {
  text-decoration: none; /* 텍스트 밑줄 제거 */
  color: #ffffff; /* 흰색 텍스트 */
  transition: color 0.3s ease; /* 색상 전환 애니메이션 */
}

/* 네비게이션 메뉴 링크 호버 스타일 */
nav a:hover {
  color: #ffc107; /* 호버 시 노란색 */
}

/* 활성 링크 스타일 */
nav a.router-link-exact-active {
  font-weight: bold; /* 글꼴 두껍게 */
}

/* 메인 컨텐츠 스타일 */
.content {
  margin-left: 200px; /* 사이드바 너비만큼 왼쪽 여백 */
  padding: 20px; /* 패딩 */
  width: calc(100% - 200px); /* 사이드바 너비만큼 제외한 나머지 너비 */
}
</style>

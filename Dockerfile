# Node.js 18 기본 이미지
FROM node:18

# 앱 디렉토리 생성
WORKDIR /app

# npm 캐시 디렉토리 설정
RUN npm set cache /app/.npm-cache --global

# npm 최신 버전으로 업데이트
RUN npm install -g npm@latest

# Vue CLI를 전역으로 설치
RUN npm install -g @vue/cli@5.0.8

# package.json과 package-lock.json을 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# vue-template-compiler 제거 및 @vue/compiler-sfc 설치
RUN npm uninstall vue-template-compiler
RUN npm install @vue/compiler-sfc@3.4.31

# ESLint 및 Prettier 관련 패키지 설치
RUN npm install eslint@latest eslint-plugin-vue@latest eslint-plugin-prettier@latest eslint-config-prettier@latest --save-dev --legacy-peer-deps

# 프로젝트 파일 복사
COPY . .

# 포트 8080 노출
EXPOSE 8080

# Vue 개발 서버 시작
CMD ["npm", "run", "serve"]

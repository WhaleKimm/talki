# Node.js 18 이미지를 기반으로 사용
FROM node:18

# 앱 디렉토리 생성
WORKDIR /app

# npm 캐시 디렉토리 설정
RUN npm set cache /app/.npm-cache --global

# npm을 최신 버전으로 업데이트
RUN npm install -g npm@latest

# Vue CLI를 전역으로 설치
RUN npm install -g @vue/cli

# package.json과 package-lock.json을 복사
COPY package*.json ./

# ESLint와 관련된 패키지를 설치
# RUN npm install eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue @babel/eslint-parser eslint-plugin-prettier eslint-config-prettier prettier --save-dev

# 종속성 설치
RUN npm install

# 안정적인 정렬을 위한 모던 JS 사용
RUN npm install stable@latest inflight@latest rimraf@4 glob@9 consolidate@1.0.0 @babel/plugin-transform-class-properties@latest @eslint/config-array @eslint/object-schema webpack-chain@latest --save-dev

# 프로젝트 코드 복사
COPY . .

# 포트 8080 노출
EXPOSE 8080

# 프로젝트 생성 및 Vue 개발 서버 실행
CMD ["npm", "run", "serve"]

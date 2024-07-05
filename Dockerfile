# Node.js 18 이미지를 기반으로 사용
FROM node:18

# 앱 디렉토리 생성
WORKDIR /app

# npm 캐시 디렉토리 설정
RUN npm set cache /app/.npm-cache --global

# npm을 최신 버전으로 업데이트
RUN npm install -g npm@latest

# Vue CLI를 전역으로 설치
RUN npm install -g @vue/cli@5.0.8

# package.json과 package-lock.json을 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# vue-template-compiler 제거 및 @vue/compiler-sfc 설치
RUN npm uninstall vue-template-compiler
RUN npm install @vue/compiler-sfc@3.4.31

# 안정적인 정렬을 위한 모던 JS 사용
RUN npm install stable@latest inflight@latest rimraf@4 glob@9 consolidate@1.0.0 @babel/plugin-transform-class-properties@latest @eslint/config-array @eslint/object-schema webpack-chain@latest --save-dev

# 프로젝트 코드 복사
COPY . .

# 포트 8080 노출
EXPOSE 8080

# 프로젝트 생성 및 Vue 개발 서버 실행
CMD ["npm", "run", "serve"]

# Node.js 14 이미지를 기반으로 사용
FROM node:14

# 앱 디렉토리 생성
WORKDIR /app

# npm 캐시 디렉토리 설정
RUN npm set cache /app/.npm-cache --global

# Vue CLI를 전역으로 설치
RUN npm install -g @vue/cli

# package.json과 package-lock.json을 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 프로젝트 코드 복사
COPY . .

# 포트 8080 노출
EXPOSE 8080

# 프로젝트 생성 및 Vue 개발 서버 실행
CMD ["npm", "run", "serve"]

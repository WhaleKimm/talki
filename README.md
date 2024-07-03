# Vscode 상에서 clone 하는 법
1. [F1] 키 누르고 git clone 선택 후 [이 프로젝트 주소] 입력
2. 폴더 선택

# Docker 사용법

1. 구글에서 "Docker Desktop" 다운로드 후 계정 연결
2. 프로젝트 clone을 했다는 가정 하에, "docker-compose up --build" 입력. 이후에 컨테이너 실행 시에는 "docker-compose up"으로 실행
3. 모두 사용 후에는 docker-compose down을 통해 컨테이너 종료
   a. Docker Desktop 상에서 종료도 가능하다.
4. 사용하다가 디스크를 너무 많이 차지한다면 카톡으로 문의 <문제는 도커 WSL2의 가상하드디스크 문제>

# 주의사항
1. push, pull 시에 자신의 브런치를 확인
2. 해당되는 브런치에서 활동.

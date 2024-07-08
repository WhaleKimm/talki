<template>
  <div class="roleplay-selection-screen">
    <div class="camera-view">
      <video ref="video" autoplay playsinline></video>
      <!-- 비디오 요소에 ref를 설정하여 나중에 접근할 수 있게 합니다. -->
    </div>
    <button @click="startRecording">Start Recording</button>
    <!-- 녹화를 시작하는 버튼입니다. -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <!-- 오류 메시지가 있을 경우 화면에 표시합니다. -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue' // Vue Composition API에서 ref와 onMounted를 임포트합니다.
import { useRouter } from 'vue-router' // Vue Router에서 useRouter를 임포트합니다.
import store from '@/store' // Vuex 스토어를 임포트합니다.

export default {
  setup() {
    const videoRef = ref(null) // 비디오 요소를 참조하기 위한 ref를 생성합니다.
    const errorMessage = ref(null) // 오류 메시지를 저장하기 위한 ref를 생성합니다.
    const router = useRouter() // Vue Router를 사용하여 라우팅을 제어합니다.

    // 녹화를 시작하는 함수입니다.
    const startRecording = async () => {
      await store.startRecording() // 스토어의 startRecording 액션을 호출합니다.
      router.push({ name: 'RoleplayExecutionScreen' }) // RoleplayExecutionScreen으로 라우팅합니다.
    }

    // 컴포넌트가 마운트된 후 실행되는 함수입니다.
    onMounted(() => {
      // 카메라 접근 권한을 요청합니다.
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          if (videoRef.value) {
            // 비디오 요소가 존재하는지 확인합니다.
            videoRef.value.srcObject = stream // 비디오 요소에 스트림을 설정합니다.
          }
        })
        .catch((err) => {
          console.error('Error accessing camera:', err) // 콘솔에 오류를 출력합니다.
          errorMessage.value =
            '카메라에 접근할 수 없습니다. 권한을 확인하고 다시 시도하세요.' // 오류 메시지를 설정합니다.
          // 개발 기간 동안 테스트를 위해 기본 비디오 파일을 재생합니다.
          if (videoRef.value) {
            // 비디오 요소가 존재하는지 확인합니다.
            videoRef.value.src = 'C:/talki/default-video.mp4' // 기본 비디오 파일의 경로를 설정합니다.
            videoRef.value.play() // 비디오 파일을 재생합니다.
          }
        })
    })

    return { videoRef, startRecording, errorMessage } // 템플릿에서 사용할 변수를 반환합니다.
  },
}
</script>

<style scoped>
.roleplay-selection-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.camera-view {
  width: 640px;
  height: 480px;
  background-color: black;
  margin-bottom: 20px;
}
button {
  padding: 15px 30px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>

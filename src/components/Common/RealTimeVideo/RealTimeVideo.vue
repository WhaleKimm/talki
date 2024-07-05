<template>
  <div class="real-time-video">
    <h1>RealTimeVideo Practice</h1>
    <video ref="video" width="640" height="480" autoplay playsinline></video>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'RealTimeVideo',
  data() {
    return {
      errorMessage: null, // 에러 메시지를 저장합니다.
      stream: null, // 비디오 스트림을 저장합니다.
    }
  },
  mounted() {
    this.setupCamera() // 컴포넌트가 마운트되면 카메라 설정을 시작합니다.
  },
  methods: {
    async setupCamera() {
      try {
        // 사용자에게 카메라와 마이크 권한을 요청합니다.
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        this.$refs.video.srcObject = stream // 비디오 요소에 스트림을 설정합니다.
        this.stream = stream // 스트림을 저장합니다.
      } catch (err) {
        console.error('Error accessing camera:', err)
        this.errorMessage = 'Error accessing camera. Please check your permissions and try again.'
      }
    },
  },
}
</script>

<style scoped>
.real-time-video {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

video {
  width: 100%;
  max-width: 640px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.error-message {
  margin-top: 16px;
  color: red;
}
</style>

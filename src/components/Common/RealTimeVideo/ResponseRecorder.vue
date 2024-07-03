<template>
  <div class="response-recorder">
    <button @click="startRecording" :disabled="isRecording">
      <!-- isRecording 상태에 따라 버튼 텍스트를 표시 -->
      {{ isRecording ? 'Recording...' : buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Start Conversation'
    }
  },
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      recordedChunks: []
    };
  },
  methods: {
    async startRecording() {
      this.isRecording = true;
      // 카메라와 마이크 스트림 요청
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // MediaRecorder 인스턴스 생성
      this.mediaRecorder = new MediaRecorder(stream);

      // 데이터가 준비될 때마다 호출되는 이벤트 핸들러
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      // 녹화가 종료될 때 호출되는 이벤트 핸들러
      this.mediaRecorder.onstop = () => {
        // 녹화된 데이터로 Blob 생성
        const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
        // Blob URL 생성
        const url = URL.createObjectURL(blob);
        // a 태그 생성하여 다운로드 트리거
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.webm';
        a.click();
        URL.revokeObjectURL(url);
      };

      // 녹화 시작
      this.mediaRecorder.start();
    },
    stopRecording() {
      this.isRecording = false;
      // 녹화 중지
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }
    }
  },
  beforeUnmount() {
    // 컴포넌트가 언마운트되기 전에 녹화 중지
    this.stopRecording();
  }
};
</script>

<style scoped>
.response-recorder {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
button {
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>

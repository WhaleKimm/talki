// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  isRecording: false,
  mediaRecorder: null,
  recordedChunks: [],
  
  async startRecording() {
    this.isRecording = true;
    try {
      // 카메라와 마이크 스트림을 요청합니다.
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // MediaRecorder 객체를 생성합니다.
      this.mediaRecorder = new MediaRecorder(stream);

      // 데이터가 제공될 때마다 호출되는 이벤트 핸들러입니다.
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      // 녹화가 중지되었을 때 호출되는 이벤트 핸들러입니다.
      this.mediaRecorder.onstop = () => {
        // 녹화된 데이터 조각들을 Blob 객체로 변환합니다.
        const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
        // Blob 객체의 URL을 생성합니다.
        const url = URL.createObjectURL(blob);
        // 다운로드 링크를 생성하여 클릭 이벤트를 트리거합니다.
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.webm';
        a.click();
        URL.revokeObjectURL(url);
        // 녹화 상태를 초기화합니다.
        this.resetRecording();
      };

      // 녹화를 시작합니다.
      this.mediaRecorder.start();
    } catch (error) {
      console.error('Requested device not found:', error);
      alert('카메라나 마이크를 찾을 수 없습니다. 장치가 연결되어 있고 권한이 부여되었는지 확인해주세요.');
      this.isRecording = false;
    }
  },

  // 녹화를 중지하는 메서드입니다.
  stopRecording() {
    this.isRecording = false;
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
  },

  // 녹화 상태를 초기화하는 메서드입니다.
  resetRecording() {
    this.isRecording = false;
    this.mediaRecorder = null;
    this.recordedChunks = [];
  }
});

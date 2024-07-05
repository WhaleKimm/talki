<template>
  <div class="response-recorder">
    <!-- 녹화 상태에 따라 버튼 텍스트를 변경합니다. -->
    <button @click="handleStart" :disabled="store.isRecording">
      {{ store.isRecording ? 'Recording...' : buttonText }}
    </button>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  props: {
    buttonText: {
      type: String,
      default: 'Start Conversation'
    }
  },
  setup(props, { emit }) {
    // 녹화를 시작하는 함수입니다.
    const handleStart = () => {
      store.startRecording();
      emit('start');  // 부모 컴포넌트로 이벤트 전달
    };

    return { store, handleStart };
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

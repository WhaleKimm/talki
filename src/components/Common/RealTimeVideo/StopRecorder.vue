<template>
    <div class="stop-recorder">
      <!-- 녹화 상태에 따라 버튼을 활성화 또는 비활성화합니다. -->
      <button @click="stopRecording" :disabled="!store.isRecording">
        Stop Recording
      </button>
    </div>
  </template>
  
  <script>
  import { store } from '@/store';
  
  export default {
    setup() {
      // 녹화를 중지하는 함수입니다.
      const stopRecording = () => {
        store.stopRecording();
      };
  
      return { store, stopRecording };
    }
  };
  </script>
  
  <style scoped>
  .stop-recorder {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  button {
    padding: 15px 30px;
    background-color: #dc3545;
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
  
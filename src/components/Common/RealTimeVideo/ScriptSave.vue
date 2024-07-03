<template>
    <div id="ScriptSave">
      <h1>Script Save</h1>
      <button @click="uploadRecording">Upload for Transcription</button>
      <div v-if="transcription">
        <h2>Transcription:</h2>
        <p>{{ transcription }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScriptSave',
    data() {
      return {
        downloadLink: null, // 다운로드 링크를 저장합니다.
        transcription: null // 전사된 텍스트를 저장합니다.
      };
    },
    props: {
      videoLink: String // 부모 컴포넌트에서 비디오 링크를 받아옵니다.
    },
    methods: {
      async uploadRecording() {
        if (!this.videoLink) return;
  
        // 다운로드 링크에서 비디오 파일을 가져옵니다.
        const response = await fetch(this.videoLink);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('video', blob, 'recording.webm');
  
        try {
          // 여기에 API 호출을 추가합니다.
          // const res = await fetch('API_ENDPOINT', {
          //   method: 'POST',
          //   body: formData,
          // });
  
          // const data = await res.json();
          // this.transcription = data.transcription;
        } catch (err) {
          console.error('Error uploading file:', err);
          alert('Error uploading file. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #ScriptSave {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  button:hover:enabled {
    background-color: #45a049;
  }
  </style>
  
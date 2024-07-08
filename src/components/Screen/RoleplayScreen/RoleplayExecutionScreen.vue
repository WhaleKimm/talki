<template>
  <div class="roleplay-execution-screen">
    <div class="camera-view">
      <video ref="video" autoplay></video>
    </div>
    <button @click="stopRecording" :disabled="!store.isRecording">Stop Recording</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import store from '@/store'

export default {
  setup() {
    const router = useRouter()
    const stopRecording = () => {
      store.stopRecording()
      router.push({ name: 'RoleplaySelectionScreen' })
    }

    return { stopRecording, store }
  },
  mounted() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      this.$refs.video.srcObject = stream
    })
  },
}
</script>

<style scoped>
.roleplay-execution-screen {
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

<template>
  <div class="roleplay-selection-screen">
    <div class="camera-view">
      <video ref="video" autoplay></video>
    </div>
    <button @click="startRecording">Start Recording</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import store from '@/store'

export default {
  setup() {
    const router = useRouter()
    const startRecording = async () => {
      await store.startRecording()
      router.push({ name: 'RoleplayExecutionScreen' })
    }

    return { startRecording }
  },
  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        this.$refs.video.srcObject = stream
      })
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
</style>

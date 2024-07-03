<template>
  <div class="roleplay-selection-screen">
    <RealTimeVideo />
    <!-- 버튼 텍스트를 prop으로 전달 -->
    <ResponseRecorder buttonText="Start Conversation" />
  </div>
</template>

<script>
import RealTimeVideo from '@/components/Common/RealTimeVideo/RealTimeVideo.vue';
// import ResponseRecorder from '@/components/Common/RealTimeVideo/ResponseRecorder.vue';

export default {
  components: {
    RealTimeVideo,
    // ResponseRecorder
  }
};
</script>

<style scoped>
.roleplay-selection-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
import { reactive } from 'vue'

// 반응형 데이터 객체 생성
const store = reactive({
  isRecording: false, // 녹화 중인지 여부를 나타내는 상태
  mediaRecorder: null, // MediaRecorder 객체를 저장할 변수
  recordedChunks: [], // 녹화된 데이터 조각들을 저장할 배열

  // 녹화를 시작하는 메서드
  async startRecording() {
    this.isRecording = true // 녹화 상태를 true로 설정
    try {
      // 사용자에게 카메라와 마이크 권한을 요청하여 스트림을 가져옴
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      // MediaRecorder 객체를 생성하여 스트림을 전달
      this.mediaRecorder = new MediaRecorder(stream)

      // 데이터가 제공될 때마다 호출되는 이벤트 핸들러
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data) // 녹화된 데이터 조각들을 배열에 추가
        }
      }

      // 녹화가 중지되었을 때 호출되는 이벤트 핸들러
      this.mediaRecorder.onstop = () => {
        // 녹화된 데이터 조각들을 Blob 객체로 변환
        const blob = new Blob(this.recordedChunks, { type: 'video/webm' })
        // Blob 객체의 URL을 생성
        const url = URL.createObjectURL(blob)
        // 다운로드 링크를 생성하여 클릭 이벤트를 트리거
        const a = document.createElement('a')
        a.href = url
        a.download = 'recording.webm' // 파일명을 설정
        a.click() // 다운로드를 시작
        URL.revokeObjectURL(url) // URL을 해제
        // 녹화 상태를 초기화
        this.resetRecording()
      }

      // 녹화를 시작
      this.mediaRecorder.start()
    } catch (error) {
      // 다음 줄에서 콘솔 경고를 무시합니다.
      // eslint-disable-next-line no-console
      console.error('Requested device not found:', error)
      // 다음 줄에서 alert 경고를 무시합니다.
      // eslint-disable-next-line no-alert
      alert(
        '카메라나 마이크를 찾을 수 없습니다. 장치가 연결되어 있고 권한이 부여되었는지 확인해주세요.'
      )
      this.isRecording = false // 녹화 상태를 false로 설정
    }
  },

  // 녹화를 중지하는 메서드
  stopRecording() {
    this.isRecording = false // 녹화 상태를 false로 설정
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop() // MediaRecorder가 존재하고 활성 상태이면 녹화를 중지
    }
  },

  // 녹화 상태를 초기화하는 메서드
  resetRecording() {
    this.isRecording = false // 녹화 상태를 false로 설정
    this.mediaRecorder = null // MediaRecorder 객체를 초기화
    this.recordedChunks = [] // 녹화된 데이터 조각들을 저장하는 배열을 초기화
  },
})

// store 객체를 기본으로 내보냄
export default store

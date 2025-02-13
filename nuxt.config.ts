export default defineNuxtConfig({
  nitro: {
    output: {
      dir: 'docs', // 정적 사이트 출력 폴더를 'docs'로 변경
      publicDir: 'docs', // public 안만들고 바로 저장
    }
  }
})
<template>
  <div class="failed" v-show="failedMsg">
    <div>
      <h3>
        <img src="~@/assets/images/icon/failed.png" alt="메일 전송에 실패">
      </h3>
      
      <!-- 이미지 사용으로 인한 링크 -->
      <div class="blind">
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
      </div>
      <p class="invalid">메시지 발송이 실패하였습니다.</p>
      <button class="close buttonBox" @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    failedMsg: Boolean,
  },
  methods: {
    close() {
      this.$emit('close', !this.failedMsg)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";
@import "~@/assets/scss/layout/mail_invalid.scss";
</style>
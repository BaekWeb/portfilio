<template>
  <transition name="fade">
    <div class="loading" v-show="load">
      <h2>Web</h2>
      <strong>Beak</strong>

      <ul class="boxs">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <p>
        로딩중 입니다. <br/>
        잠시만 기다려 주세요.
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      load: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.load = !this.load;
    }, 3000);
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.load = true;

        setTimeout(() => {
          this.load = !this.load;
        }, 5000);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.loading {
  @include setPosition(fixed, 0, 0, 0, 0, 2000);
  @include setFlex(flex, center, center);
  flex-flow: column;
  color: $white;
  background-color: $main;

  &.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  &.fade-enter, .fade-leave-to {
    opacity: 0;
  }

  h2 {
    @include font-m;
  }
  strong {
    @include font-xl;
    margin-top: -0.5rem;
  }
  .boxs {
    margin: 1rem 0;
    li {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      margin: 0 0.25rem;
      border-radius: 3px;
      color: transparent;
      text-indent: -10000rem;

      &:nth-child(1) {
        background-color: #ffffff;
        animation: loadMove 1s cubic-bezier(0, 1.3, 0.59, 0.65) infinite;  
      }
      &:nth-child(2) {background-color: #2583dc;}
      &:nth-child(3) {background-color: #00beff;}
      &:nth-child(4) {background-color: #c349c2;}
      &:nth-child(5) {
        background-color: #921111;
        animation: loadMove2 1s cubic-bezier(0, 1.3, 0.59, 0.65) 0.5s infinite;  
      }
    }
  }
  p {
    @include font-m;
    text-align: center;
  }
}

@keyframes loadMove {
  0% {transform: translateX(0);}
  50% {transform: translateX(-1rem);}
  100% {transform: translateX(0);}
}
@keyframes loadMove2 {
  0% {transform: translateX(0);}
  50% {transform: translateX(1rem);}
  100% {transform: translateX(0);}
}
</style>
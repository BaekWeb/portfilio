<template>
  <section class="visual">
    <article class="content">
      <div class="main">
        <div class="box">
          <h2 class="title">
            <span>좋은 디자인</span>
            <span>효과적인 코드</span>
          </h2>
          <p class="text">
            안녕하세요 <br>
            필요한 정보를 효과적으로 전달할 수 있는 디자인, <br>
            협업에 도움이 되는 효과적인 코드로 <br>
            코딩을 하겠습니다.
          </p>
        </div>
      </div>
    </article>

    <article class="view">
      <View/>
    </article>
  </section>
</template>

<script>
import View from "@/components/view.vue";


export default {
  components: {
    View
  }
}
</script>

<style>
</style>
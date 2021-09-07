<template>
  <section class="site_intro">
    <h2 class="title">
      사이트소개
    </h2>
    <p>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
      
      Ipsa quaerat commodi consectetur similique
      mollitia beatae dolor veritatis atque,
      rerum excepturi vero quia quae eius repellat a molestias
      quo unde corporis.
    </p>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.site_intro {
  max-width: 64rem;
  margin: 0 auto;
  padding: 6rem 1rem;
  box-sizing: border-box;

  .title {
    @include font-m-2;
  }

  p {
    @include font-m;
    width: 25rem;
    margin-top: 1rem;
    line-height: 2rem;
  }
}

// mo
@include mo-lg {
  .site_intro {
    padding: 4rem 1rem;
    background-color: #fbfbfb;

    p {
      width: 100%;
    }
  }
}
</style>
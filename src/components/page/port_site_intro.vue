<template>
  <section class="site_intro">
    <h2 class="title">
      사이트소개
    </h2>
    <p v-for="siteAbout in workCard[index].siteIntro[0].intro_text" :key="siteAbout">
      {{siteAbout.text}}
    </p>
  </section>
</template>

<script>
export default {
  props: ['workCard'],
  data() {
    return {
      index: 0,
      paramsId: parseInt(this.$route.params.id),
    }
  },
  created() {
    for (let i = 0; i < this.workCard.length; i++) {

      if (this.paramsId == this.workCard[i].id) {
        this.index = i
      }
    }
  },
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
    white-space: pre-line;
  }
}

// mo
@include mo-lg {
  .site_intro {
    padding: 4rem 1rem;
    background-color: #fbfbfb;

    p {
      @include font-s;
      width: 100%;
      white-space: normal;
    }
  }
}
</style>
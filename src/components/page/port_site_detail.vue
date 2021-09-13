<template>
  <section class="site_detail">
    <div class="content">
      <h2 class="title">사이트설명</h2>

      <div class="boxs">
        <img :src="workCard[index].siteExplanation[0].siteWeb_src" alt="">
        
        <ul>
          <li class="item"
          v-for="webSite in workCard[index].siteExplanation[0].item"
          :key="webSite"
          >
            <Spot :webSite="webSite"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Spot from "./spot.vue";

export default {
  props: ['workCard'],
  data() {
    return {
      index: 0,
      paramsId: parseInt(this.$route.params.id),
    }
  },
  components: {
    Spot
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

.site_detail {
  .content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 6rem 1rem;
    box-sizing: border-box;

    .title {
      @include font-m;
    }

    .boxs {
      position: relative;
      margin: 1rem 0 0 0;
      width: 100%;
      
      img {
        width: 100%;
      }
    }
  }
}

// mo 
@include mo-lg {
  .site_detail {
    .content {
      padding: 4rem 1rem;
    }
  }
}
</style>
<template>
  <div class="port">
    <Header/>
    <PortVisual :workCard="workCard[pageIdx]"/>
    <PortSiteIntro :workCard="workCard[pageIdx]"/>
    <PortInfoDetail :workCard="workCard[pageIdx]"/>
    <PortSiteDetail :workCard="workCard[pageIdx]"/>
    <section class="button">
      <ul>
        <li class="prev">
          <router-link :to="{name: 'Port', params: {id: prev}}">
            이전
          </router-link>
        </li>
        <li class="next">
          <router-link :to="{name: 'Port', params: {id: next}}">
            다음
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import PortVisual from "@/components/page/port_visual.vue";
import PortSiteIntro from "@/components/page/port_site_intro.vue";
import PortInfoDetail from "@/components/page/port_info_detail.vue";
import PortSiteDetail from "@/components/page/port_site_detail.vue";

export default {
  name: 'Port',
  data() {
    return {
      index: 0,
    }
  },
  components: {
    Header,
    PortVisual,
    PortSiteIntro,
    PortInfoDetail,
    PortSiteDetail,
  },
  computed: {
    workCard() {
      return this.$store.state.work.page;
    },
    pageIdx() {
      for (let i = 0; i < this.workCard.length; i++) {

        if (this.$route.params.id == this.workCard[i].id) {
          return this.index = i
        }
      }
    },
    prev() {
      if (this.$route.params.id <= 1) {
        return this.workCard.length
      } else {
        return this.$route.params.id - 1
      }
    },
    next() {
      if (this.$route.params.id < this.workCard.length) {
        return parseInt(this.$route.params.id) + 1
      } else {
        return 1
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.button {
  color: $white;
  background-color: $black;

  > ul {
    @include setFlex(flex, space-between, center);
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem 1rem;
    box-sizing: border-box;

    > li {
      @include font-m;

      &:hover {
        &::after {
          width: 0%;
          transition: 0.5s;
        }
      }

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 3px;
        background-color: $white;
      }
    }
  }
}
</style>

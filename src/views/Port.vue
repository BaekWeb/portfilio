<template>
  <div class="port">
    <Header/>
    <PortVisual :workCard="workCard"/>
    <PortSiteIntro :workCard="workCard"/>
    <PortInfoDetail :workCard="workCard"/>
    <PortSiteDetail :workCard="workCard"/>

    <section class="button">
      <ul>
        <li class="prev">
          <router-link :to="`/Port/` + prev">
            이전
          </router-link>
        </li>
        <li class="next">
          <router-link :to="`/Port/` + next">
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
      paramsId: parseInt(this.$route.params.id),
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
    prev() {
      if (this.paramsId <= 1) {
        return this.workCard.length
      } else {
        return this.paramsId - 1
      }
    },
    next() {
      if (this.paramsId < this.workCard.length) {
        return this.paramsId + 1
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

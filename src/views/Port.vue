<template>
  <div class="port">
    <Header/>
    <PortVisual :workCard="workCard"/>
    <PortSiteIntro :workCard="workCard"/>
    <PortInfoDetail :workCard="workCard"/>
    <PortSiteDetail :workCard="workCard"/>

    <section class="button">
      <ul>
        <li @click="prev">
            Prev
        </li>
        <li @click="next">
            Next
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
      paramsId: parseInt(this.$route.params.id)
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
    }
  },
  methods: {
    prev() {

      if (this.paramsId <= 1) {
        this.paramsId = this.workCard.length
        console.log(this.paramsId);
      } else {
        this.paramsId = this.paramsId - 1
        console.log(this.paramsId);
      }
    },
    next() {
      if (this.paramsId < this.workCard.length) {
        this.paramsId = this.paramsId + 1
        console.log(this.paramsId);
      } else {
        this.paramsId = 1
        console.log(this.paramsId);
      }
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
</style>

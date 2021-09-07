<template>
  <div class="port">
    <Header/>
    <PortVisual/>
    <PortSiteIntro/>
    <PortInfoDetail/>
    <PortSiteDetail/>

    <section class="button">
      <ul>
        <li>PREV</li>
        <li>NEXT</li>
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
  components: {
    Header,
    PortVisual,
    PortSiteIntro,
    PortInfoDetail,
    PortSiteDetail,
  }
}
</script>

<style lang="scss" scoped>
</style>

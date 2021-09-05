<template>
  <div class="home">
    <Header/>
    <Visual/>
    <About/>
    <Skill/>
    <Work/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Visual from "@/components/visual.vue";
import About from "@/components/about.vue";
import Skill from "@/components/skill.vue";
import Work from "@/components/work.vue";
import Footer from "@/components/footer.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Visual,
    About,
    Skill,
    Work,
    Footer
  }
}
</script>

<style>
</style>

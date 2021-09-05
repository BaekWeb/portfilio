<template>
  <section class="work">
    <div class="content">
      <h2 class="title">
        Porkfolio
      </h2>

      <ul class="workBox">
        <li class="item" v-for="workCard in workCard" :key="workCard">
          <WorkCard :workCard="workCard"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import WorkCard from "@/components/card/workCard.vue";

export default {
  components: {
    WorkCard
  },
  computed: {
    workCard() {
      return this.$store.state.work.page;  
    }
  }
}
</script>

<style>

</style>
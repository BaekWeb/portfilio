<template>
  <main class="main">
    <Loading/>
    <router-view />
  </main>
</template>

<script>
import Loading from "@/components/loading.vue";

export default {
  components: {
    Loading,
  },
}
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";
</style>

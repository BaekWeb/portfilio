<template>
  <header class="header">
    <div class="content">
      <h1 class="logo">
        <a href="#">
          <img src="@/assets/images/icon/logo.png" alt="로고">
        </a>
      </h1>

      <ul class="burgerMenu" @click="menuToggle">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <SideMenu :toggle="toggle" @menuClose="menuToggle"/>
  </header>
</template>

<script>
import SideMenu from "@/components/sideMenu.vue";


export default {
  data() {
    return {
      toggle: false,
    }
  },
  components: {
    SideMenu,
  },
  methods: {
    menuToggle(menuClose) {
      this.toggle = menuClose;
    }
  }
}
</script>

<style>

</style>
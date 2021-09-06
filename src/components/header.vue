<template>
  <header class="header" :style="{ backgroundColor: bgColor}">
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
      limitscroll: 200,
      bgColor: ""
    }
  },
  components: {
    SideMenu,
  },
  methods: {
    menuToggle(menuClose) {
      this.toggle = menuClose;
    },
    headerScroll() {
      var scrollTop = window.scrollY;

      if (scrollTop < this.limitscroll) {
        this.bgColor = "transparent"
      } else {
        this.bgColor = "#121212"
      }
    },
  },
  created() {
      window.addEventListener('scroll', this.headerScroll);
  },
  destroyed() {
      window.removeEventListener('scroll', this.headerScroll);
  }

}
</script>

<style>

</style>
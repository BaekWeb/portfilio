
<template>
  <section class="viewSlide">
    <swiper
    slidesPerView="auto"
    :spaceBetween="40"
    :loop="true"
    :pagination="{
      el: '.pageNumber',
      type: 'fraction',
    }"
    :navigation="{
      prevEl: '.view_prev',
      nextEl: '.view_next',
    }"
    :breakpoints="{
      '767': {
        spaceBetween: 20,
      },
      '424': {
        spaceBetween: 20,
      },
      '280': {
        spaceBetween: 10,
      },
    }"
    class="viewSwiper">
      <swiper-slide class="item" v-for="workItem in workItem" :key="workItem">
        <ViewCard :workItem="workItem" />
      </swiper-slide>
    </swiper>

    <ul class="viewButton">
      <li class="view_prev">
        <span class="blind">prev</span>
      </li>
      <li class="pageNumber">
        <span class="swiper-pagination-current"></span>
        <span class="swiper-pagination-total"></span>
      </li>
      <li class="view_next">
        <span class="blind">next</span>
      </li>
    </ul>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import ViewCard from "@/components/card/viewCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ViewCard
  },
  data() {
    return {};
  },
  computed: {
    workItem() {
      return this.$store.state.work.page;
    },
  },
  methods: {},
};
</script>
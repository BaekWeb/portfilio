<template>
  <div class="card">
    <h2>
      <img :src="item.icon[0].src" :alt="item.icon[0].alt">
    </h2>

    <strong>{{item.name}}</strong>

    <ul class="star">
      <li v-for="star in 5" :key="star">
        <div v-if="star <= item.star">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" :style="{fill: color}">
            <path id="starPath" data-name="starPath" d="M10,0l2.5,7.438,7.5.2-5.955,4.8L16.18,20,10,15.528,3.82,20l2.135-7.562L0,7.639l7.5-.2Z"/>
          </svg>
        </div>
        <div v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" :style="{fill: color2}">
            <path id="starPath" data-name="starPath" d="M10,0l2.5,7.438,7.5.2-5.955,4.8L16.18,20,10,15.528,3.82,20l2.135-7.562L0,7.639l7.5-.2Z"/>
          </svg>          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      color: '#FA3B3B',
      color2: '#fff'
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.card {
  padding: 20px 0;
  text-align: center;

  > h2 {
    width: 90px;
    height: 90px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 100%;
    box-sizing: border-box;
    background-color: $white;

    img {
      height: 100%
    }
  }

  > strong {
    @include font-m;
    display: block;
    margin: 10px 0 0 0;
  }

  .star {
    margin: 10px 0 0 0;
    > li {
      display: inline-block;
    }
  }
}
</style>
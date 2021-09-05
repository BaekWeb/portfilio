<template>
  <section class="info">
    <article class="info_img">
      <ul>
        <li v-for="item in skill" :key="item">
          <skillCard :item='item' />
        </li>
      </ul>
    </article>

    <article class="info_text">
      <ul>
        <li v-for="item in skill" :key="item">
          <strong>{{item.name}}</strong>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </article> 
  </section>
</template>

<script>
import skillCard from "@/components/card/skillCard.vue";

export default {
  components: {
    skillCard
  },
  computed: {
    skill() {
      return this.$store.state.skill.info;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.info {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  
  .info_img {
    padding: 4rem 0;

    > ul {
      @include setGrid(grid, 5, 1fr, 1, 1fr, 1rem);
      width: 38rem;
      margin: 0 auto;
    }
  }
  .info_text {
    text-align: center;

    ul {
      li {
        margin: 3rem 0 0 0;
        strong {
          @include font-l;
        }

        p {
          @include font-m;
          margin: 1rem 0 0 0;
          line-height: 1.2rem;
          white-space: pre-line;
        }
      }
    }
  }
}

// tablet
@include tablet {
  .info {    
    .info_img {
      > ul {
        @include setGrid(grid, 3, 1fr, 2, 1fr, 1rem);
        width: max-content;
      }
    }
  }
}

// mo
@include mo-lg {
  .info {    
    .info_img {
      > ul {
        @include setGrid(grid, 2, 1fr, 3, 1fr, 1rem);
        width: max-content;
      }
    }
    .info_text {
      ul {
        li {
          strong {
            @include font-l;
          }

          p {
            @include font-s;
            margin: 0.5rem 0 0 0;
            white-space: inherit;
          }
        }
      }
    }
  }
}

</style>
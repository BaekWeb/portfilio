<template>
  <section class="site_detail">
    <div class="content">
      <h2 class="title">사이트설명</h2>

      <div class="boxs">
        <img :src="workCard[index].siteExplanation[0].siteWeb_src" alt="">
        
        <ul>
          <li class="item"
          v-for="(webSite, i) in workCard[index].siteExplanation[0].item"
          :key="webSite"
          :style="{
            top: webSite.spot[0].top, left: webSite.spot[0].left}"
          @click="drop(i)"
          >
            <transition name="fade">
              <div class="drop"
              :style="{
                top: webSite.drop[0].top,
                right: webSite.drop[0].right,
                bottom: webSite.drop[0].bottom,
                left: webSite.drop[0].left
                }"
              v-show="number == i"
              >
                <h3>{{webSite.name}}</h3>

                <ul>
                  <li v-for="(text) in webSite.drop[0].text[0]" :key="text">
                    {{text}}
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['workCard'],
  data() {
    return {
      index: 0,
      paramsId: this.$route.params.id,
      number: null,
    }
  },
  methods: {
    drop(i) {
      if (this.number == i) {
        this.number = null
      } else {
        this.number = i;
      }
    },
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
@import "~@/assets/scss/main.scss";

.site_detail {
  .content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 6rem 1rem;
    box-sizing: border-box;

    .title {
      @include font-m;
    }

    .boxs {
      position: relative;
      margin: 1rem 0 0 0;
      width: 100%;
      
      img {
        width: 100%;
      }

      ul .item {
        @include setPosition(absolute, auto, auto, auto, auto, 999);
        width: 32px;
        height: 32px;
        border: 2px solid $white;
        border-radius: 100%;
        background-color: $main;
        cursor: pointer;
        
        &::after {
          @include setPosition(absolute, 50%, auto, auto, 50%, 999);
          transform: translate(-50%, -50%) rotate(45deg);
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          background: url("~@/assets/images/icon/close.png") no-repeat center;
          background-size: cover;
          transition: 0.5s;
        }

        &:hover,
        &.open {
          &::after {
            transform: translate(-50%, -50%);
          }
        }

        .drop {
          @include setPosition(absolute, auto, auto, auto, auto, 999);
          width: 200px;
          min-height: 250px;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 15px;
          color: $white;
          background-color: $black2;

          &.fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
          }
          &.fade-enter, .fade-leave-to {
            opacity: 0;
          }

          h3 {
            @include font-l;
          }

          ul {
            @include font-s;
            margin-top: 1rem;

            li {
              margin: 10px 0 0 15px;
              list-style: auto;
            }
          }
        }
      }

    }
  }
}

// mo 
@include mo-lg {
  .site_detail {
    .content {
      padding: 4rem 1rem;

      .boxs {
        .item {
          flex-flow: column;
          gap: 10px;
          margin-bottom: 20px;

          .web_text {
            width: 100%;

            h3 {
              @include font-m;
            }
            ul li {
              @include font-s;
            }
          }
        }
      }
    }
  }
}
</style>
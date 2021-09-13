<template>
  <section class="info_detail">
    <div class="content">
      <h2 class="name">{{workCard[index].name}}</h2>
      <strong class="title">{{workCard[index].sub_title}}</strong>

      <dl>
        <dt>font</dt>
        <dd>{{workCard[index].font}}</dd>
        <dt>color</dt>
        <dd>
          <ol>
            <li v-for="color in workCard[index].color[0]" :key="color">
              <h3 :style="{backgroundColor: color}"></h3>
              <span>{{color}}</span>
            </li>
          </ol>
        </dd>
        <dt>address</dt>
        <dd><a :href="workCard[index].siteLink">{{workCard[index].siteLink}}</a></dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  props: ['workCard'],
  data() {
    return {
      index: 0,
      paramsId: parseInt(this.$route.params.id),
    }
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

.info_detail {
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;

  .content {
    padding: 4rem 0;
    border-radius: 0.75rem;
    text-align: center;
    color: $white;
    background-color: $black;

    .name {
      @include font-l;
    }
    .title {
      @include font-m;
      font-weight: 400;
    }

    dl {
      margin: 2rem;

      dt {
        @include font-l;
        margin-top: 3rem;
        font-weight: 700;
      }
      dd {
        @include font-s;
        margin: 0.5rem 0;

        ol {
          @include setFlex(flex, center, center);
          gap: 1rem;

          li {
            h3 {
              width: 1.2rem;
              height: 1.2rem;
              margin: 0 auto;
              border: 1px solid $white;
              border-radius: 100%;
              box-sizing: border-box;
              text-indent: -10000rem;
              background-color: $white;
            }
            span {
              display: inline-block;
              margin-top: 0.25rem;
            }
          }
        }
      }
    }
  }
}

// mo
@include mo-lg {
  .info_detail {

    .content {
      padding: 2rem 0;

      dl {
        margin: 1rem;

        dt {
          margin-top: 2rem;
        }
        dd {
          @include font-s;
          margin: 0.5rem 0;
          overflow: hidden;
          text-overflow: ellipsis;

          ol {
            gap: 1rem;
          }
        }
      }
    }
  }
}
</style>
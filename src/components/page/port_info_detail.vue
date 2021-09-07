<template>
  <section class="info_detail">
    <div class="content">
      <h2 class="name">한솥</h2>
      <strong class="title">메인페이지</strong>

      <dl>
        <dt>font</dt>
        <dd>" 맑은 고딕 "</dd>
        <dt>color</dt>
        <dd>
          <ol>
            <li>
              <h3>1</h3>
              <span>2</span>
            </li>
            <li>
              <h3>1</h3>
              <span>2</span>
            </li>
            <li>
              <h3>1</h3>
              <span>2</span>
            </li>
          </ol>
        </dd>
        <dt>address</dt>
        <dd>https://baekweb.github.io/hansot</dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {

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
    border-radius: 15px;
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
          gap: 2rem;

          li {
            h3 {
              width: 24px;
              height: 24px;
              border: 1px solid $white;
              border-radius: 100%;
              box-sizing: border-box;
              text-indent: -10000px;
              background-color: $white;
            }
            span {
              display: inline-block;
              margin-top: 5px;
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
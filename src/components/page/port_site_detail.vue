<template>
  <section class="site_detail">
    <div class="content">
      <h2 class="title">사이트설명</h2>

      <ul class="boxs">
        <li class="item">
          <div class="web_img">
            <img src="@/assets/images/common/hansot_header.jpg" alt="">
          </div>
          <div class="web_text">
            <h3>Header</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </li>
        <li class="item">
          <div class="web_img">
            <img src="@/assets/images/common/hansot_visual.jpg" alt="">
          </div>
          <div class="web_text">
            <h3>Visual</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </li>
        <li class="item">
          <div class="web_img">
            <img src="@/assets/images/common/hansot_content.jpg" alt="">
          </div>
          <div class="web_text">
            <h3>Content</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {

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
      margin: 1rem 0 0 0;

      .item {
        @include setFlex(flex, center, flex-start);
        gap: 20px;
        margin-bottom: 20px;

        .web_img {
          flex: 1;
          
          img {
            width: 100%;
          }
        }
        .web_text {
          width: 300px;

          h3 {
            @include font-l;
          }
          ul li {
            @include font-m;
            margin: 1rem 0 0 0;
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
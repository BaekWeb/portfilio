<template>
  <article class="workCard">
    <div class="mainImg">
      <a :href="workCard.siteLink">
        <img
        :src="workCard.mainImg[0].src"
        :alt="workCard.mainImg[0].alt"
        :style="{transform: workCard.mainImg[0].transform}">
      </a>
    </div>

    <div class="backContent">
      <h3>{{workCard.title}}</h3>

      <ul class="iconBox">
        <li>
          <div>
            <a :href="workCard.siteLink">
              <img src="@/assets/images/icon/home_w.png" alt="사이트 바로가기">
            </a>
          </div>
          <span>Site</span>
        </li>
        <li>
          <div>
            <a :href="workCard.codeLink">
              <img src="@/assets/images/icon/github_w.png" alt="code 보러가기">
            </a>
          </div>
          <span>Code</span>
        </li>
        <li>
          <div>
            <a :href="workCard.siteLink">
              <img src="@/assets/images/icon/info_w.png" alt="사이트 정보보기">
            </a>
          </div>
          <span>Info</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: ['workCard'],
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.workCard {
  position: relative;
  width: 12.5rem;
  height: 18rem;
  border-radius: 1rem;
  color: $white;
  background-color: $black;
  overflow: hidden;
  box-shadow: 4px 4px 4px $black2;

  &:hover {
    .mainImg {
      width: 4.5rem;
      height: 4.5rem;
      margin: 0 auto;
      border-radius: 100%;
      top: 2rem;
    }
  }

  .mainImg {
    @include setPosition(absolute, 0, auto, auto, 50%, 90);
    transform: translate(-50%, 0);
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 1s;

    img {
      @include setPosition(absolute, 50%, auto, auto, 50%, 90);
      height: 100%;
    }
  }

  .backContent {
    @include setPosition(absolute, auto, auto, 4rem, 0, 89);
    width: 100%;
    text-align: center;

    > h3 {
      @include font-m-2;
    }
    .iconBox {
      @include setFlex(flex, center, center);
      column-gap: 1rem;
      margin: 1rem 0 0 0;

      > li {
        > div {
          width: 2.25rem;
          height: 2.25rem;
          padding: 0.5rem;
          margin: 0 auto;
          box-sizing: border-box;

          a {
            display: block;
            > img {
              width: 100%;
            }
          }
        }

        > span {
          @include font-s;
        }

      }
    }
  }
}

@include mo-lg {
  .workCard {
    width: 100%;
  }
}
</style>

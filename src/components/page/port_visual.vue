<template>
  <section class='port_visual'>
    <article class="main">
      <div>
        <h2 class="name">{{workCard.name}}</h2>
        <strong class="title">{{workCard.siteIntro[0].intro_main}}</strong>
        <p>
          {{workCard.siteIntro[0].intro_sub}}
        </p>

        <ul class="icon">
          <li>
            <a :href="workCard.siteLink">
              <i>
                <img src="@/assets/images/icon/home_w.png" alt="사이트가기">
              </i>
              <span>사이트가기</span>
            </a>
          </li>
          <li>
            <a :href="workCard.codeLink">
              <i>
                <img src="@/assets/images/icon/github_w.png" alt="코드보러가기">
              </i>
              <span>코드보러가기</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <article class="siteInfo">
      <div>
        <ul class="info">
          <li v-for="infomation in workCard.infomation" :key="infomation">
            <strong>{{infomation.info_name}}</strong>
            <span>{{infomation.info_text}}</span>
          </li>
        </ul>
        <div class="siteImg">
          <img 
          :src="workCard.mainImg[0].src"
          :alt="workCard.mainImg[0].alt"
          :style="{transform: workCard.mainImg[0].transform}"
          >
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: ['workCard'],
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.port_visual {
  .main {
    color: $white;
    background-color: $black;

    > div {
      max-width: 64rem;
      margin: 0 auto;
      padding: 8rem 1rem;
      box-sizing: border-box;

      .name {
        @include font-l-2;
      }
      .title {
        @include font-l;
        display: block;
      }
      > p {
        @include font-m;
        margin: 2rem 0;
        white-space: pre-line;
      }

      .icon {
        li {
          display: inline-block;
          margin-right: 1rem;
          opacity: 0.5;
          transition: 0.5s;

          &:hover {
            opacity: 1;
          }

          a {
            @include setFlex(flex, center, center);
            gap: 0.5rem;
            img {
              width: 1.2rem;
            }
            span {
              @include font-s;
            }
          }
        }
      }
    }
  }

  .siteInfo {
    max-width: 64rem;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;

    > div {
      position: relative;

      .info {
        @include setFlex(flex, flex-start, center);
        gap: 2rem;
        padding: 2rem 0;

        li {
          strong {
            @include font-m-2;
          }

          > span {
            @include font-m;
            display: block;
            margin-top: 0.5rem;
          }
        }
      }

      .siteImg {
        @include setPosition(absolute, auto, 0, 0, auto, 999);
        width: 12.5rem;
        height: 20rem;
        border-radius: 0.75rem;
        box-shadow: 4px 4px 4px $black2;
        overflow: hidden;

        img {
          @include setPosition(absolute, 50%, auto, auto, 50%, 999);
          width: auto;
          height: 100%;
        }
      }
    }

  }
}

// mo 
@include mo-lg {
  .port_visual {
    .siteInfo {
      > div {
        @include setFlex(flex, center, flex-start);
        flex-flow: column-reverse;
        margin-top: -4rem;

        .info {
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 0;

          li {
            width: 5rem;

            strong {
              @include font-m;
            }

            > span {
              @include font-s;
            }
          }
        }

        .siteImg {
          position: relative;
          width: 80%;
          height: 5rem;
          padding: 30% 0;
          
          img {
            object-fit: cover;
          }
        }
      }

    }
  }
}
</style>
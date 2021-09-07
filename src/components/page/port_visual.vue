<template>
  <section class='port_visual'>
    <article class="main">
      <div>
        <h2 class="name">Hansot</h2>
        <strong class="title">한솥을 그대로 가져오다</strong>
        <p>
          한솥 메인페이지를 캡처와 이미지를 가져온 후 <br>
          나만의 코드로 다시 재현한 웹 사이트.
        </p>

        <ul class="icon">
          <li>
            <a href="">
              <i>
                <img src="@/assets/images/icon/home_w.png" alt="사이트가기">
              </i>
              <span>사이트가기</span>
            </a>
          </li>
          <li>
            <a href="">
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
          <li>
            <strong>분류</strong>
            <span>클론코딩</span>
          </li>
          <li>
            <strong>제작년도</strong>
            <span>2020</span>
          </li>
          <li>
            <strong>제작기간</strong>
            <span>약 2주</span>
          </li>
          <li>
            <strong>기여도</strong>
            <span>퍼블리싱 100 %</span>
          </li>
        </ul>
        <div class="siteImg">
          <img src="@/assets/images/common/hansot.jpg" alt="한솥이미지">
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.port_visual {
  .main {
    color: #ffffff;
    background-color: #121212;

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
        
        img {
          width: 12.5rem;
          height: 20rem;
          border-radius: 0.75rem;
          box-shadow: 4px 4px 4px $black2;
          object-fit: cover;
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
            width: 100px;

            strong {
              @include font-m;
            }

            > span {
              @include font-s;
            }
          }
        }

        .siteImg {
          position: static;
          
          img {
            width: 80%;
            height: auto;
          }
        }
      }

    }
  }
}
</style>
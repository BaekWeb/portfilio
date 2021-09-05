<template>
  <article class="profile">
    <div class="content">
      <div class="mainImg">
        <h2>프로필이미지</h2>
        <ul class="icon">
          <li v-for="icon in icon" :key="icon">
            <a :href="icon.link">
              <img :src="icon.img[0].iconSrc" :alt="icon.img[0].iconAlt">
              <img :src="icon.img[1].iconSrc" :alt="icon.img[1].iconAlt">
            </a>
          </li>
        </ul>
      </div>
      <div class="mainText">
        <div class="text">
          <strong>Beak Seung In</strong>
          <span>010. 4157. 9881</span>
        </div>
        <ul class="icon">
          <li v-for="icon in icon" :key="icon">
            <a :href="icon.link">
              <img :src="icon.img[1].iconSrc" :alt="icon.img[1].iconAlt">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      icon: [
        {
          id: 1,
          name: 'email',
          img: [
            {
              iconSrc: require('@/assets/images/icon/email_w.png'),
              iconAlt: '메일보내기',
            },
            {
              iconSrc: require('@/assets/images/icon/email_b.png'),
              iconAlt: '메일보내기',
            },
          ],
          link: 'mailto:bsi0228@gamil.com'
        },
        {
          id: 2,
          name: 'github',
          img: [
            {
              iconSrc: require('@/assets/images/icon/github_w.png'),
              iconAlt: '깃허브 가기',
            },
            {
              iconSrc: require('@/assets/images/icon/github_b.png'),
              iconAlt: '깃허브 가기',
            },
          ],
          link: 'https://github.com/baek-web'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.profile {
  max-width: 64rem;
  padding: 0 1rem;
  box-sizing: border;
  
  .content {
    @include setFlex(flex, center, center);
    flex-flow: column;
    width: 15rem;
    height: 17.5rem;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0.2rem 0.2rem 0.2rem $black2;

    &:hover {
      .mainImg {
        .icon {
          opacity: 1;
        }
      }
    }

    .mainImg {
      position: relative;
      flex: 1;
      width: 100%;
      background: url("~@/assets/images/common/profile.jpg") no-repeat center;
      background-size: cover;
      text-indent: -10000rem;

      .icon {
        @include setPosition(absolute, 0, 0, 0, 0, 90);
        @include setFlex(flex, center, center);
        column-gap: 1rem;
        background-color: $black2;
        opacity: 0;
        transition: 1s;

        > li {
          position: relative;
          width: 1.8rem;
          height: 1.8rem;
          padding: 0.25rem;
          border: 0.1rem solid $white;
          border-radius: 0.25rem;
          box-sizing: border-box;
          transform: rotate(45deg);
          cursor: pointer;

          &:hover {
            background-color: $white;

            > a {
              img {
                display: none;

                &:nth-child(2) {
                  display: block;
                }
              }
            }
          }

          > a {
            display: block;
            transform: rotate(-45deg);

            img {
              width: 100%;

              &:nth-child(2) {
                display: none;
              }
            }
          }
        }
      }
    }
    
    .mainText {
      padding: 0.5rem 0;
      .text {
        text-align: center;
        strong,
        span {
          @include font-m;
          display: block;
        }
        span {
          color: $black2;
        }
      }

      .icon {
        display: none;
      }
    }
  }
}

// mo
@include mo-lg {
  .profile {
    padding: 0;
    
    .content {
      width: calc(100% - 1rem);
      height: 25rem;
      border-radius: 0;
      box-shadow: none;

      .mainImg {
        border-radius: 0 0.75rem 0.75rem 0;
        .icon {
          display: none;
        }
      }
      
      .mainText {
        @include setFlex(flex, space-between, center);
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;

        .text {
          text-align: left;
        }

        .icon {
          display: block;
          height: 1.2rem;

          > li {
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            margin: 0 0 0 1rem;
          }

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

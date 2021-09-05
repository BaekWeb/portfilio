<template>
  <transition name="fade">
    <nav class="sideMenu" v-show="toggle">
      <section class="bgButton" @click="menuClose">
        bgClose
      </section>
      <transition name="move" >
        <section class="menuBox" v-show="toggle">
          <article class="gnb">
            <ul>
              <li v-for="site in site" :key="site">
                <a :href="site.link">
                  <strong>
                    {{site.name}}
                    
                    <span>
                      {{site.name}}
                    </span>
                  </strong>
                  <span>{{site.subText}}</span>
                </a>
              </li>
            </ul>
          </article>
          <article class="iconBox">
            <div class="close" @click="menuClose" >
              <img src="~@/assets/images/icon/close.png" alt="">
            </div>

            <ul>
              <li v-for="icon in icon" :key="icon">
                <a :href="icon.link">
                  <img :src="icon.src" :alt="icon.alt">
                </a>
              </li>
            </ul>
          </article>
        </section>
      </transition>
    </nav>
  </transition>
</template>

<script>
export default {
  props: ['toggle'],
  data() {
    return {
      site: [
        {
          name: 'Home',
          subText: 'Go Home',
          link: '#'
        },
        {
          name: 'Profile',
          subText: 'Go Profile',
          link: '#'
        },
        {
          name: 'Skill',
          subText: 'Go Skill',
          link: '#'
        },
        {
          name: 'Work',
          subText: 'Go Work',
          link: '#'
        }
      ],
      icon: [
        {
          name: 'github',
          src: require('@/assets/images/icon/github_b.png'),
          alt: '깃허브 바로가기',
          link: 'https://github.com/baek-web'
        },
        {
          name: 'facebook',
          src: require('@/assets/images/icon/facebook.png'),
          alt: '페이스북 바로가기',
          link: 'https://www.facebook.com/'
        },
        {
          name: 'instagram',
          src: require('@/assets/images/icon/instagram.png'),
          alt: '인스타 바로가기',
          link: 'https://www.instagram.com/'
        },
      ]
    }
  },
  methods: {
    menuClose() {
      this.$emit("menuClose", !this.toggle);
    },
  }
}
</script>

<style>

.fade-enter-active {
  animation: fade 1s ease;
}
.fade-leave-active {
  animation: fade 1s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.move-enter-active {
  animation: move 1s ease;
}
.move-leave-active {
  animation: move 1s reverse;
}
@keyframes move {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

</style>
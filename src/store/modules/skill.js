import { createStore } from 'vuex'

export default createStore({
  state: {
    info: [
      {
        id: 1,
        name: 'HTML',
        text: `시멘틱한 구조를 통해 마크업을 작성합니다.`,
        icon: [
          {
            src: require("@/assets/images/icon/html.png"),
            alt: 'html 아이콘',
          }
        ],
        star: 4
      },
      {
        id: 1,
        name: 'CSS',
        text: `keyframe을 활용하여 animation을 구현하고,
        Sass 를 통해 코드중복을 줄여 간결화 합니다.`,
        icon: [
          {
            src: require("@/assets/images/icon/css.png"),
            alt: 'css 아이콘',
          }
        ],
        star: 4
      },
      {
        id: 1,
        name: 'javascript & jQuery',
        text: `코드를 이해하고 간단한 이벤트 효과를 작성할 수 있으며,
        swiper slide 같은 라이브러리를 사용할 수 있습니다.`,
        icon: [
          {
            src: require("@/assets/images/icon/js.png"),
            alt: 'javascript 아이콘',
          }
        ],
        star: 3
      },
      {
        id: 1,
        name: 'Xd',
        text: `xd를 통해 웹디자인을 구현할 수 있으며,
        프로토 타입의 트리거를 통해 간단한 효과를 사용 가능합니다.`,
        icon: [
          {
            src: require("@/assets/images/icon/xd.png"),
            alt: 'Xd 아이콘',
          }
        ],
        star: 3
      },
      {
        id: 1,
        name: 'Vue',
        text: `컴포넌트를 통해 유지보수 하기 쉽도록 데이터 관리를 할 수 있으며,
        SPA(Single Page Application)로 웹을 구축 할 수 있으나
        아직은 숙련도가 부족하여 공부 중에 있습니다.`,
        icon: [
          {
            src: require("@/assets/images/icon/vue.png"),
            alt: 'Vue 아이콘',
          }
        ],
        star: 2
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

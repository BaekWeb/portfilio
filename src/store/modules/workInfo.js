import { createStore } from 'vuex'

export default createStore({
  state: {
    page: [
      {
        id: 1,
        name: '포트폴리오',
        title: 'Portfolio',
        sub_title: '메인페이지',
        siteLink: '포트폴리오 사이트링크',
        codeLink: 'https://github.com/baek-web/portfolio_vue',
        mainImg: [
          {
            src: require("@/assets/images/common/portfolio.jpg"),
            alt: '포트폴리오로 가기',
            position: 0,
            transform: 'translate(-50%, -50%)'
          }
        ],
      },
      {
        id: 2,
        name: '한솥',
        title: 'Hansot',
        sub_title: '메인페이지',
        siteLink: 'https://baek-web.github.io/hansot/',
        codeLink: 'https://github.com/baek-web/hansot',
        mainImg: [
          {
            src: require('@/assets/images/common/hansot.jpg'),
            alt: '한솥 가기',
            position: 50,
            transform: 'translate(-50%, -50%)'
          }
        ],
      },
      {
        id: 3,
        name: '렛츠코레일',
        title: 'lets Korail',
        sub_title: '메인페이지',
        siteLink: 'https://baek-web.github.io/korail/',
        codeLink: 'https://github.com/baek-web/korail',
        mainImg: [
          {
            src: require('@/assets/images/common/letkorail.jpg'),
            alt: '코레일 가기',
            position: 30,
            transform: 'translate(-35%, -50%)'
          }
        ],
      },
      {
        id: 4,
        name: '이케아',
        title: 'Ikea',
        sub_title: '메인페이지',
        siteLink: 'https://baek-web.github.io/ikea/',
        codeLink: 'https://github.com/baek-web/ikea',
        mainImg: [
          {
            src: require('@/assets/images/common/ikea.jpg'),
            alt: '이케아 가기',
            position: 50,
            transform: 'translate(-50%, -50%)'
          }
        ],
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

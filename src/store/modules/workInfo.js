import { createStore } from 'vuex'

// 찾고싶은 정보는 ctrl + f 하고
//  id: 1 입력하세요
// id: 1 = 포트폴리오
// id: 2 = 한솥
// id: 3 = 렛츠코레일
// id: 4 = 이케아


export default createStore({
  state: {
    page: [
      {
        id: 1,
        name: '포트폴리오',
        title: 'Portfolio',
        sub_title: '메인페이지',
        siteLink: '/',
        codeLink: 'https://github.com/baekweb/portfolio_vue',
        mainImg: [
          {
            src: require("@/assets/images/common/portfolio.jpg"),
            alt: '포트폴리오로 가기',
            position: 0,
            transform: 'translate(-50%, -50%)'
          }
        ],
        infomation: [
          {
            classify: '클론코딩',
            years: '2020',
            period: '약 2주',
            Contribution: '퍼블리싱 100%',
            font: '맑은 고딕',
            colors: [
              {
                mainColor: '#f5ca00',
                subColor_01: '#eeeced',
                subColor_02: '#373737',
              }
            ]
          },
        ],
        siteIntro:
        `
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Ipsa quaerat commodi consectetur similique mollitia beatae dolor veritatis atque,
        rerum excepturi vero quia quae eius repellat a molestias quo unde corporis.
        `,
        siteExplanation: [
          {
            name: 'Header',
            text: [
              {
                text_01: `dropdown 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_header.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Visual',
            text: [
              {
                text_01: `swiper slide 를 통해 autoSlide 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_visual.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Content',
            text: [
              {
                text_01: `상단 : flex로 구현`,
                text_02: `하단: grid로 구현`,
                text_03: 
                `
                테블릿이나 모바일 영역에서의
                layout 변화로 인해 grid로 구현
                `,
                text_04:
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른쪽으로 색상 변경
                `,
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_content.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Banner',
            text: [
              {
                text_01: `hover시 bgimg에 scale 효과`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_banner.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Story',
            text: [
              {
                text_01: 
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른 쪽으로 색상 변경
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_story.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'News',
            text: [
              {
                text_01: 
                `
                타이틀옆 bar를 가상선택자로 구현했으며,
                flex-box를 활용하여 content 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_news.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Footer',
            text: [
              {
                text_01:
                `
                pc화면에서는 dropMenu가 없으며,
                옆에 보이시는 이미지는 모바일 화면으로 
                모바일화면에서 dropMenu 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_footer.jpg"),
                alt: '',
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '한솥',
        title: 'Hansot',
        sub_title: '메인페이지',
        siteLink: 'https://baekweb.github.io/hansot/',
        codeLink: 'https://github.com/baekweb/hansot',
        mainImg: [
          {
            src: require('@/assets/images/common/hansot.jpg'),
            alt: '한솥 가기',
            position: 50,
            transform: 'translate(-50%, -50%)'
          }
        ],
        infomation: [
          {
            classify: '클론코딩',
            years: '2020',
            period: '약 2주',
            Contribution: '퍼블리싱 100%',
            font: '맑은 고딕',
            colors: [
              {
                mainColor: '#f5ca00',
                subColor_01: '#eeeced',
                subColor_02: '#373737',
              }
            ]
          },
        ],
        siteIntro:
        `
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Ipsa quaerat commodi consectetur similique mollitia beatae dolor veritatis atque,
        rerum excepturi vero quia quae eius repellat a molestias quo unde corporis.
        `,
        siteExplanation: [
          {
            name: 'Header',
            text: [
              {
                text_01: `dropdown 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_header.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Visual',
            text: [
              {
                text_01: `swiper slide 를 통해 autoSlide 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_visual.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Content',
            text: [
              {
                text_01: `상단 : flex로 구현`,
                text_02: `하단: grid로 구현`,
                text_03: 
                `
                테블릿이나 모바일 영역에서의
                layout 변화로 인해 grid로 구현
                `,
                text_04:
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른쪽으로 색상 변경
                `,
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_content.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Banner',
            text: [
              {
                text_01: `hover시 bgimg에 scale 효과`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_banner.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Story',
            text: [
              {
                text_01: 
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른 쪽으로 색상 변경
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_story.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'News',
            text: [
              {
                text_01: 
                `
                타이틀옆 bar를 가상선택자로 구현했으며,
                flex-box를 활용하여 content 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_news.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Footer',
            text: [
              {
                text_01:
                `
                pc화면에서는 dropMenu가 없으며,
                옆에 보이시는 이미지는 모바일 화면으로 
                모바일화면에서 dropMenu 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_footer.jpg"),
                alt: '',
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '렛츠코레일',
        title: 'lets Korail',
        sub_title: '메인페이지',
        siteLink: 'https://baekweb.github.io/korail/',
        codeLink: 'https://github.com/baekweb/korail',
        mainImg: [
          {
            src: require('@/assets/images/common/letkorail.jpg'),
            alt: '코레일 가기',
            position: 30,
            transform: 'translate(-35%, -50%)'
          }
        ],
        infomation: [
          {
            classify: '클론코딩',
            years: '2020',
            period: '약 2주',
            Contribution: '퍼블리싱 100%',
            font: '맑은 고딕',
            colors: [
              {
                mainColor: '#f5ca00',
                subColor_01: '#eeeced',
                subColor_02: '#373737',
              }
            ]
          },
        ],
        siteIntro:
        `
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Ipsa quaerat commodi consectetur similique mollitia beatae dolor veritatis atque,
        rerum excepturi vero quia quae eius repellat a molestias quo unde corporis.
        `,
        siteExplanation: [
          {
            name: 'Header',
            text: [
              {
                text_01: `dropdown 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_header.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Visual',
            text: [
              {
                text_01: `swiper slide 를 통해 autoSlide 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_visual.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Content',
            text: [
              {
                text_01: `상단 : flex로 구현`,
                text_02: `하단: grid로 구현`,
                text_03: 
                `
                테블릿이나 모바일 영역에서의
                layout 변화로 인해 grid로 구현
                `,
                text_04:
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른쪽으로 색상 변경
                `,
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_content.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Banner',
            text: [
              {
                text_01: `hover시 bgimg에 scale 효과`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_banner.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Story',
            text: [
              {
                text_01: 
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른 쪽으로 색상 변경
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_story.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'News',
            text: [
              {
                text_01: 
                `
                타이틀옆 bar를 가상선택자로 구현했으며,
                flex-box를 활용하여 content 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_news.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Footer',
            text: [
              {
                text_01:
                `
                pc화면에서는 dropMenu가 없으며,
                옆에 보이시는 이미지는 모바일 화면으로 
                모바일화면에서 dropMenu 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_footer.jpg"),
                alt: '',
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: '이케아',
        title: 'Ikea',
        sub_title: '메인페이지',
        siteLink: 'https://baekweb.github.io/ikea/',
        codeLink: 'https://github.com/baekweb/ikea',
        mainImg: [
          {
            src: require('@/assets/images/common/ikea.jpg'),
            alt: '이케아 가기',
            position: 50,
            transform: 'translate(-50%, -50%)'
          }
        ],
        infomation: [
          {
            classify: '클론코딩',
            years: '2020',
            period: '약 2주',
            Contribution: '퍼블리싱 100%',
            font: '맑은 고딕',
            colors: [
              {
                mainColor: '#f5ca00',
                subColor_01: '#eeeced',
                subColor_02: '#373737',
              }
            ]
          },
        ],
        siteIntro:
        `
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Ipsa quaerat commodi consectetur similique mollitia beatae dolor veritatis atque,
        rerum excepturi vero quia quae eius repellat a molestias quo unde corporis.
        `,
        siteExplanation: [
          {
            name: 'Header',
            text: [
              {
                text_01: `dropdown 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_header.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Visual',
            text: [
              {
                text_01: `swiper slide 를 통해 autoSlide 구현`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_visual.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Content',
            text: [
              {
                text_01: `상단 : flex로 구현`,
                text_02: `하단: grid로 구현`,
                text_03: 
                `
                테블릿이나 모바일 영역에서의
                layout 변화로 인해 grid로 구현
                `,
                text_04:
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른쪽으로 색상 변경
                `,
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_content.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Banner',
            text: [
              {
                text_01: `hover시 bgimg에 scale 효과`
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_banner.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Story',
            text: [
              {
                text_01: 
                `
                hover시 아이콘의 색상 변화와
                하단에 gauge bar 왼쪽에서 오른 쪽으로 색상 변경
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_story.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'News',
            text: [
              {
                text_01: 
                `
                타이틀옆 bar를 가상선택자로 구현했으며,
                flex-box를 활용하여 content 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_news.jpg"),
                alt: '',
              }
            ]
          },
          {
            name: 'Footer',
            text: [
              {
                text_01:
                `
                pc화면에서는 dropMenu가 없으며,
                옆에 보이시는 이미지는 모바일 화면으로 
                모바일화면에서 dropMenu 구현
                `
              }
            ],
            img: [
              {
                src: require("@/assets/images/common/hansot_footer.jpg"),
                alt: '',
              }
            ]
          }
        ]
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

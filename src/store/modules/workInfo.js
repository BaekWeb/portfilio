import { createStore } from 'vuex'

// 찾고싶은 정보는 ctrl + f 하고
//  id: 1 입력하세요
// id: 1 = 포트폴리오
// id: 2 = 한솥
// id: 3 = 렛츠코레일
// id: 4 = 이케아

// color - 사이트 사용한 컬러
// mainImg - 사이트 메인 이미지
// infomation - 사이트 분류에 대한 정보
// siteIntro - 사이트 타이틀 및 텍스트
// siteExplanation - 사이트의 디테일한 설명 및 spot의 위치조정

export default createStore({
  state: {
    page: [
      {
        id: 1,
        name: '포트폴리오',
        title: 'Portfolio',
        sub_title: '메인페이지 & 서브페이지',
        font: '"나눔고딕" , "Roboto"',
        siteLink: 'https://baekweb.com',
        codeLink: 'https://github.com/baekweb/portfolio',
        color: [
          {
            mainColor: '#FA3B3B',
            subColor_01: '#ffffff',
            subColor_02: '#121212',
          }
        ],
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
            info_name: '분류',
            info_text: '반응형',
          },
          {
            info_name: '제작년도',
            info_text: '2021',
          },
          {
            info_name: '제작기간',
            info_text: '1개월',
          },
          {
            info_name: '기여도',
            info_text: '디자인 100% & 퍼블리싱 100%',
          },
        ],
        siteIntro: [
          {
            intro_main: `나만의 웹을 만들어 나아가다`,
            intro_sub: `작업물을 모아둔 포트폴리오로써
            Vue를 통해 제작한 웹 작업물`,
            intro_text: [
              {
                text: `Vue를 통해 작업하며,
                Html은 header & footer 와 같이 페이지마다 사용하는 코드를
                템플릿을 통해 관리함으로써 보다 코드를 간결하게 할 수 있었다.`
              },
              {
                text: `v-for 을 통해 Card 템플릿으로 반복되는 Code를 줄이고
                Scss 와 maxin 사용하여 Css 간결화 하였다.`
              },
              {
                text: `하지만, 그에 반면에 Vue의 숙련도 부족문제로 작업시간 증가와
                데이터 관리와 폴더에 대한 정리가 아직은 부족한 점,
                또한 메소드외 스크립트 사용능력을 보완해야 할 것 같다.`
              }
            ]
          }
        ],
        siteExplanation: [
          {
            siteWeb_src: require("@/assets/images/common/portfolio_web.png"),
            siteWeb_alt: '포트폴리오 웹 전체 캡쳐 이미지',
            item: [
              {
                name: 'Header',
                spot: [
                  {
                    top: '0.5%',
                    left: '30%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: 'auto',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: '스크롤시 fixed',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'View',
                spot: [
                  {
                    top: '5%',
                    left: '80%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'Swiper slide사용',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Profile',
                spot: [
                  {
                    top: '22%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: 'hover 시 icon',
                        text02: '하단 content 모바일에서 dropdown으로 변경',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Skill',
                spot: [
                  {
                    top: '53%',
                    left: '64%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'grid를 활용',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Work',
                spot: [
                  {
                    top: '78%',
                    left: '70%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'grid 활용',
                        text02: 'hover시 이미지 영역 변경',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Mail',
                spot: [
                  {
                    top: '90%',
                    left: '30%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: 'email.js를 통해 메일 구현',
                        text02: '메일 내용 전체가 채워지지 않으면 실패 메시지',
                        text03: '정상적인 메일이 발송시 성공',
                      }
                    ],
                  }
                ],
              },
            ]
          },
        ]
      },
      {
        id: 2,
        name: '한솥',
        title: 'Hansot',
        sub_title: '메인페이지',
        font: '"맑은고딕"',
        siteLink: 'https://baekweb.github.io/hansot/',
        codeLink: 'https://github.com/baekweb/hansot',
        color: [
          {
            mainColor: '#f5ca00',
            subColor_01: '#fcfdfb',
            subColor_02: '#373737',
          }
        ],
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
            info_name: '분류',
            info_text: '클론코딩',
          },
          {
            info_name: '제작년도',
            info_text: '2021',
          },
          {
            info_name: '제작기간',
            info_text: '약 2주',
          },
          {
            info_name: '기여도',
            info_text: '퍼블리싱 100%',
          },
        ],
        siteIntro: [
          {
            intro_main: `한솥을 그대로 재현하다`,
            intro_sub: `한솥의 이미지를 그대로 가져와
            재현한 클론코딩 사이트로
            나만의 코드로 한솥을 그대로 제작`,
            intro_text: [
              {
                text: `한솥은 깔끔한 레이아웃과 가독성 좋은 웹으로
                처음으로 제작한 클론코딩 이다.`
              },
              {
                text: `2020년에 제작한 코드를 최근에 수정을 다시 하였으며,
                기존의 코드는 무분별한 position 사용 및 가상선택자 사용으로
                보기 좋은 코드가 아니었다고 생각되어 수정을 하게 되었다.`
              },
              {
                text: `현재 수정한 코드는 flex 와 grid를 사용하여 유동적인 웹이
                되도록 하였으며, Scss 사용을 통해 중복되는 코드를 간결화하였다.`
              },
              {
                text: `또한 기존의 visual영역의 슬라이드에 문제가 많았던 점에서
                Swiper를 사용하여 보완한 웹이다.`
              }
            ]
          }
        ],
        siteExplanation: [
          {
            siteWeb_src: require("@/assets/images/common/hansot_web.png"),
            siteWeb_alt: '한솥 웹 전체 캡쳐 이미지',
            item: [
              {
                name: 'Header',
                spot: [
                  {
                    top: '1%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: '스크롤 시 fixed & style 변경',
                        text02: 'dropdown 메뉴',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Visual',
                spot: [
                  {
                    top: '8%',
                    left: '70%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'Swiper slide사용',
                        text02: 'auto 슬라이드',
                        text03: 'hover 시 slide stop',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Store',
                spot: [
                  {
                    top: '22%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: 'auto',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'hover 시 icon 변경',
                        text02: 'hover 시 icon 하단 색상 채워지는 효과',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Franchise',
                spot: [
                  {
                    top: '37%',
                    left: '64%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'grid를 활용로 반응형으로 유동적인 레이아웃 변화'
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Banner',
                spot: [
                  {
                    top: '52%',
                    left: '70%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'hover 시 확대 효과',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Story',
                spot: [
                  {
                    top: '69%',
                    left: '21%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: 'hover 효과',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'News',
                spot: [
                  {
                    top: '84%',
                    left: '77%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Footer',
                spot: [
                  {
                    top: '94%',
                    left: '50%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '-250%',
                    bottom: '120%',
                    left: 'auto',
                    text: [
                      {
                        text01: '모바일 화면에서 dropdown으로 변경',
                      }
                    ],
                  }
                ],
              },
            ]
          },
        ]
      },
      {
        id: 3,
        name: '렛츠코레일',
        title: 'lets Korail',
        sub_title: '메인페이지',
        font: '"맑은고딕"',
        siteLink: 'https://baekweb.github.io/korail/',
        codeLink: 'https://github.com/baekweb/korail',
        color: [
          {
            mainColor: '#083b82',
            subColor_01: '#0397d6',
            subColor_02: '#e9e9e9',
          }
        ],
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
            info_name: '분류',
            info_text: '클론코딩',
          },
          {
            info_name: '제작년도',
            info_text: '2021',
          },
          {
            info_name: '제작기간',
            info_text: '약 2주',
          },
          {
            info_name: '기여도',
            info_text: '퍼블리싱 100%',
          },
        ],
        siteIntro: [
          {
            intro_main: `grid를 활용한 렛츠코레일 제작`,
            intro_sub: `Grid를 활용하여 제작한 웹`,
            intro_text: [
              {
                text: `렛츠코레일은 기본기를 다지기 좋은 사이트이기 때문에
                클론코딩을 하게 되었으며, 최근에 코드를 수정한 웹이다.`
              },
              {
                text: `수정전 렛츠코레일은 grid를 사용하지 않아 가상선택자를 많이 사용하여
                코드가 알아보기 힘든 점과 코드의 양이 많았던 반면,`
              },
              {
                text: `수정후 렛츠코레일은 컨텐츠영역에 grid를 활용하여 가상선택자를
                최소화하여 코드를 보기좋게 하였으며, 각 영역과 레이아웃 css분리하여
                추후 수정에 용의하게 하였다.`
              },
            ]
          }
        ],
        siteExplanation: [
          {
            siteWeb_src: require("@/assets/images/common/letkorail_web.png"),
            siteWeb_alt: '렛츠코레일 웹 전체 캡쳐 이미지',
            item: [
              {
                name: 'Header',
                spot: [
                  {
                    top: '1%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'dropdown 메뉴',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Navigation',
                spot: [
                  {
                    top: '6%',
                    left: '70%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'dropdown 이벤트',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Reservation',
                spot: [
                  {
                    top: '22%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: 'auto',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'Tab Bar 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Visual',
                spot: [
                  {
                    top: '25%',
                    left: '52%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'swiper slide 사용',
                        text02: 'bullet 적용',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Content',
                spot: [
                  {
                    top: '16%',
                    left: '85%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'Content 영역 grid 사용',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Notice & News',
                spot: [
                  {
                    top: '64%',
                    left: '21%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: '소식 영역',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Goods',
                spot: [
                  {
                    top: '66%',
                    left: '60%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: '베스트 & 할인 상품',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Guide',
                spot: [
                  {
                    top: '53%',
                    left: '76%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: '가이드',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Footer',
                spot: [
                  {
                    top: '86%',
                    left: '50%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '-250%',
                    bottom: '120%',
                    left: 'auto',
                    text: [
                      {
                        text01: 'footer영역',
                      }
                    ],
                  }
                ],
              },
            ]
          },
        ]
      },
      {
        id: 4,
        name: '이케아',
        title: 'Ikea',
        sub_title: '메인페이지',
        font: '"맑은고딕"',
        siteLink: 'https://baekweb.github.io/ikea/',
        codeLink: 'https://github.com/baekweb/ikea',
        color: [
          {
            mainColor: '#fbd914',
            subColor_01: '#f4f4f4',
            subColor_02: '#131313',
          }
        ],
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
            info_name: '분류',
            info_text: '리뉴얼',
          },
          {
            info_name: '제작년도',
            info_text: '2021',
          },
          {
            info_name: '제작기간',
            info_text: '약 2주',
          },
          {
            info_name: '기여도',
            info_text: '퍼블리싱 100%',
          },
        ],
        siteIntro: [
          {
            intro_main: `이케아의 작은 변화`,
            intro_sub: `이케아의 다단구조의 사이드메뉴를 재현해보면서
            비쥬얼 영역에 약간의 변화를 주었다.
            `,
            intro_text: [
              {
                text: `기존의 이케아의 특징은 가구쇼핑몰으로 다양한 메뉴가 잘 정도되어 있는
                사이드메뉴와 검색부문 이였다고 생각합니다.`
              },
              {
                text: `이케아의 다단구조인 사이드메뉴를 최대한 구현해 보았지만,
                아직은 코드적인 부문에서 미숙한 점이 많다고 생각되며,`
              },
              {
                text: `검색영역은 아직 구현하지 못한점이 많이 아쉬운 사이트로
                추후에 프론트엔드 공부를 하고 다시 제작해보고 싶은 사이트 입니다.`
              },
            ]
          }
        ],
        siteExplanation: [
          {
            siteWeb_src: require("@/assets/images/common/ikea_web.png"),
            siteWeb_alt: '이케아 웹 전체 캡쳐 이미지',
            item: [
              {
                name: 'Header',
                spot: [
                  {
                    top: '1%',
                    left: '25%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'sideMenu - 다단구조의 사이드메뉴 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Visual',
                spot: [
                  {
                    top: '10%',
                    left: '70%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: '갤러리 형식의 slide 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Homedeco',
                spot: [
                  {
                    top: '18%',
                    left: '40%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: 'auto',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: '홈데코영역',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Content',
                spot: [
                  {
                    top: '31%',
                    left: '54%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'hover 시 확대효과',
                        text02: 'flex-box사용',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Main Infomation',
                spot: [
                  {
                    top: '50%',
                    left: '28%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: 'grid 사용',
                        text02: 'hover 이미지 확대',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Today',
                spot: [
                  {
                    top: '66%',
                    left: '60%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: '오늘의 공간',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Footer',
                spot: [
                  {
                    top: '86%',
                    left: '30%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: '모바일 - dropdown',
                      }
                    ],
                  }
                ],
              },
            ]
          },
        ]
      },
      {
        id: 5,
        name: '광주광역시교육청',
        title: 'Office_of_Education',
        sub_title: '메인페이지',
        font: '"Noto Sans KR"',
        siteLink: 'https://baekweb.github.io/Gwangju-Office_of_Education/',
        codeLink: 'https://github.com/BaekWeb/Gwangju-Office_of_Education',
        color: [
          {
            mainColor: '#1954A4',
            subColor_01: '#4A78B6',
            subColor_02: '#ff8e20',
          }
        ],
        mainImg: [
          {
            src: require('@/assets/images/common/Gwanju.jpg'),
            alt: '광주광역시교육청 가기',
            position: 50,
            transform: 'translate(-50%, -50%)'
          }
        ],
        infomation: [
          {
            info_name: '분류',
            info_text: '클론코딩',
          },
          {
            info_name: '제작년도',
            info_text: '2021',
          },
          {
            info_name: '제작기간',
            info_text: '5일',
          },
          {
            info_name: '기여도',
            info_text: '퍼블리싱 100%',
          },
        ],
        siteIntro: [
          {
            intro_main: `광주광역시 교육청을 그대로...`,
            intro_sub: `광주광역시 교육청 PC사이트를 그대로 재현.
            `,
            intro_text: [
              {
                text: `기존의 광주광역시 교육청의 웹의 특징은 많은 슬라이드 사용과
                탭바에 있다고 생각합니다.`
              },
              {
                text: `기존의 웹과 오차가 있다는 점이 아쉬운 점이라고 생각하지만
                기존 광주광역시 교육청을 제대로 잘 구현했다고 생각하며,`
              },
              {
                text: `탭바 기능을 그대로 구현을 잘했다고 생각한 웹입니다.`
              },
            ]
          }
        ],
        siteExplanation: [
          {
            siteWeb_src: require("@/assets/images/common/Gwangju_web.png"),
            siteWeb_alt: '광주광역시 교육청 웹 전체 캡쳐 이미지',
            item: [
              {
                name: 'Header',
                spot: [
                  {
                    top: '1%',
                    left: '50%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'dropdown 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Zoom',
                spot: [
                  {
                    top: '6%',
                    left: '30%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: '클릭시 확대 & 축소 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Visual',
                spot: [
                  {
                    top: '18%',
                    left: '40%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: 'auto',
                    bottom: 'auto',
                    left: '100%',
                    text: [
                      {
                        text01: 'Visual slide',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Card-Slide',
                spot: [
                  {
                    top: '29%',
                    left: '84%',
                  }
                ],
                drop: [
                  {
                    top: '100%',
                    right: '100%',
                    bottom: 'auto',
                    left: 'auto',
                    text: [
                      {
                        text01: 'gif 확장자로 인한 slide 구조',
                        text02: '버튼클릭시 slide 기능',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Notice',
                spot: [
                  {
                    top: '38%',
                    left: '53%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: '탭바 기능',
                        text02: '각 탭바에 slide 기능',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'QuickMenu',
                spot: [
                  {
                    top: '57%',
                    left: '73%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: 'slide 기능 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Service',
                spot: [
                  {
                    top: '68%',
                    left: '53%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: '탭바 구현 - 2중 구조',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Banner',
                spot: [
                  {
                    top: '86%',
                    left: '28%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: 'auto',
                    bottom: '100%',
                    left: '100%',
                    text: [
                      {
                        text01: '그룹 slide 구현',
                      }
                    ],
                  }
                ],
              },
              {
                name: 'Footer',
                spot: [
                  {
                    top: '94%',
                    left: '79%',
                  }
                ],
                drop: [
                  {
                    top: 'auto',
                    right: '100%',
                    bottom: '100%',
                    left: 'auto',
                    text: [
                      {
                        text01: 'Footer영역',
                      }
                    ],
                  }
                ],
              },
            ]
          },
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

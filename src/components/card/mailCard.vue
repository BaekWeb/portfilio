<template>
  <div class="mailCard">
    <h2 class="logo">
      <a href="#">
        <img src="~@/assets/images/icon/logo.png" alt="로고">
      </a>
    </h2>

    <form class="contact-form" method="post" autocomplete="off" @submit.prevent="sendEmail">
      <fieldset>
        <legend class="blind">메일보내기</legend>

        <ul class="contentBox">
          <li v-for="mail in mail" :key="mail" >
            <label :for="mail.id" class="blind">{{mail.label}}</label>

            <i class="icon">
              <img :src="mail.icon[0].iconSrc" :alt="mail.icon[0].iconAlt">
            </i>

            <input 
              :id="mail.id"
              :type="mail.type"
              :name="mail.name"
              :placeholder="mail.placeholder"
            >
          </li>
          <li>
            <label for="message">Massage</label>
            <textarea name="message" id="message" rows="5" placeholder="보내실 내용을 입력해주세요" resize="off"></textarea>
          </li>
          <li>
            <button type="submit" class="buttonBox">보내기</button>
          </li>
        </ul>
      </fieldset>
    </form>

    <FailedMsg :failedMsg="failedMsg" @close="failed" />
    <SuccessMsg :successMsg="successMsg" @close="success" />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import FailedMsg from "@/components/card/failed.vue";
import SuccessMsg from "@/components/card/success.vue";

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      msg: '',
      failedMsg: false,
      successMsg: false,

      mail: [
        {
          id: 'formName',
          type: 'text',
          name: 'form_name',
          placeholder: "your name",
          label: "Your Name",
          icon: [
            {
              iconSrc: require('@/assets/images/icon/user_w.png'),
              iconAlt: '메일보내기',
            }
          ]
        },
        {
          id: 'formPhone',
          type: 'tel',
          name: 'form_phone',
          placeholder: "your phone",
          label: "Your Phone",
          icon: [
            {
              iconSrc: require('@/assets/images/icon/phone_w.png'),
              iconAlt: '전화 아이콘',
            }
          ]
        },
        {
          id: 'formEmail',
          type: 'email',
          name: 'form_email',
          placeholder: "your email",
          label: "Your Email",
          icon: [
            {
              iconSrc: require('@/assets/images/icon/email_w.png'),
              iconAlt: '메일 아이콘',
            }
          ]
        },
      ]
    }
  },
  components: {
    FailedMsg,
    SuccessMsg,
  },
  methods: {
    // 메시지 보내기
    sendEmail(e) {
      let form = document.querySelector(".contact-form");
      let name = document.querySelector("#formName");
      let email = document.querySelector("#formPhone");
      let phone = document.querySelector("#formEmail");
      let msg = document.querySelector("#message");

      e.preventDefault();
      // value 하나라도 작성되지 않으면 실패 메시지를 보낸다
      if (
        name.value == "" ||
        email.value == "" ||
        phone.value == "" ||
        msg.value == ""
      ) {
        // console.log("실패");
        this.failedMsg = true;
      } else {
        emailjs.send(
          "bsi0228",
          "template_bsi0228",
          {
            form_name: name.value,
            form_email: email.value,
            form_phone: phone.value,
            message: msg.value,
          },
          "user_y2mRCr33Oqd1urNv7CUzo"
        );
        // console.log("성공");
        this.successMsg = true;
        form.reset();
      }
    },

    failed(close) {
      this.failedMsg = close
    },
    success(close) {
      this.successMsg = close
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.mailCard {
  width: 22.5rem;
  margin: -6rem 0 0 0;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem $black2;
  color: $white;
  background-color: $black;

  .logo {
    width: max-content;
    margin: 0 auto;
  }

  .contact-form {
    margin: 1rem 0 0 0;
    padding: 1rem 0 0 0;
    border-top: 1px solid $white2;

    fieldset {
      margin: 0;
      padding: 0;
      border: none;

      .contentBox {
        // li 전체
        li {
          position: relative;
          width: 100%;
          margin: 0 0 1rem 0;

          label {
            @include font-m;
            display: block;
            text-align: center;
          }

          .icon {
            @include setPosition(absolute, 50%, auto, auto, 0.75rem, 90);
            transform: translate(0, -50%);
            width: 0.8rem;
            height: 0.8rem;

            img {
              width: 100%
            }
          }

          input,
          textarea {
            @include font-m;
            width: 100%;
            border: 1px solid $white;
            border-radius: 1rem;
            box-sizing: border-box;
            color: $white;
            background-color: $trans;
            resize: none;

            &::placeholder {
              @include font-s;
              color: $white;
            }
          }
          
          input {
            height: 2rem;
            padding: 0.25rem 2.2rem;
          }

          textarea {
            margin: 0.5rem 0 0 0;
            padding: 1rem;
          }

          button[type="submit"] {
            color: $white; 
          }
        }
      }
    }
  }
}

// tablet
@include tablet {
  .mailCard {
    display: inline-block;
    margin: -6rem 0 0 0;

    .logo {
      width: max-content;
      margin: 0 auto;
    }
  }
}

// mo
@include mo-lg {
  .mailCard {
    width: 100%;
    display: inline-block;
    margin: -4rem auto 0 auto;

    .logo {
      width: max-content;
      margin: 0 auto;
    }

    .contact-form {
      margin: 1rem 0 0 0;
      padding: 1rem 0 0 0;
      border-top: 1px solid $white2;

      fieldset {
        margin: 0;
        padding: 0;
        border: none;

        .contentBox {
          // li 전체
          li {
            position: relative;
            width: 100%;
            margin: 0 0 1rem 0;

            label {
              @include font-m;
              display: block;
              text-align: center;
            }

            .icon {
              @include setPosition(absolute, 50%, auto, auto, 0.75rem, 90);
              transform: translate(0, -50%);
              width: 0.8rem;
              height: 0.8rem;

              img {
                width: 100%
              }
            }

            input,
            textarea {
              @include font-m;
              width: 100%;
              border: 1px solid $white;
              border-radius: 1rem;
              box-sizing: border-box;
              color: $white;
              background-color: $trans;
              resize: none;

              &::placeholder {
                @include font-s;
                color: $white;
              }
            }
            
            input {
              height: 2rem;
              padding: 0.25rem 2.2rem;
            }

            textarea {
              margin: 0.5rem 0 0 0;
              padding: 1rem;
            }

            button[type="submit"] {
              color: $white; 
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <footer class="footer">
    <div class="content">
      <section class="main">
        <article class="mail">
          <MailCard/>
        </article>
        <article class="text">
          <p>
            포트폴리오에 방문해 주셔서 감사합니다. <br>
            앞으로도 꾸준히 발전하는 웹 퍼블리셔가 되겠습니다.
          </p>

          <div>
            <strong>
              궁금한 점이 있으시다면?
            </strong>
            <p>
              내용을 채워 보내주세요. <br>
              비어있는 내용이 있으면, <br>
              메일발송이 되지 않습니다.
            </p>
          </div>
        </article>
      </section>
      <section class="copyright">
        이 사이트는 상업적 용도로 사용하지 않습니다.
      </section>
    </div>
  </footer>
</template>

<script>
import MailCard from "@/components/card/mailCard.vue";

export default {
  components: {
    MailCard
  }
}
</script>

<style>

</style>
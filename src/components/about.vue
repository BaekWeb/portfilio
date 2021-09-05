<template>
  <section class="about">
    <article class="info">
      <h2 class="title">
        정보를 효과적으로<br>
        전달하는<br>
        웹 퍼블리셔 입니다.
      </h2>

      <ul>
        <li>- 웹디자인 기능사 취득  </li>
        <li>- SBS 아카데미 웹퍼블리셔 과정 수료</li>
      </ul>
    </article>

    <Profile/>
    <Myself/>
  </section>
</template>

<script>
import Profile from "@/components/profile.vue";
import Myself from "@/components/myself.vue";

export default {
  components: {
    Profile,
    Myself
  }
}
</script>

<style>

</style>
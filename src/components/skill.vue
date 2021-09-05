<template>
  <section class="skill">
    <section class="content">
      <div class="box">
        <div class="title">
          <h2>
            제가 생각하는 <br> 
            저의 능력 <br>
            확인해보세요
          </h2>
        </div>
      </div>

      <div class="bgImg">
        <img src="~@/assets/images/common/skill_bg.jpg" alt="스킬 back image">
      </div>

    </section>
    <InfoSkill/>
  </section>
</template>

<script>
import InfoSkill from "@/components/skill_Info.vue";

export default {
  components: {
    InfoSkill
  }
}
</script>

<style lang="scss" scoped>

</style>
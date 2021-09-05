<template>
  <div class="card" 
  :style="{
    backgroundImage: 'url(' + workItem.mainImg[0].src + ')',
    backgroundPosition: workItem.mainImg[0].position +'%'
  }">  
    <a :href="workItem.siteLink">
      <span>한솥 바로가기</span>
    </a>

    <div class="box">
      <a :href="workItem.siteLink">
        <strong>{{workItem.name}}</strong>
        <span>{{workItem.sub_title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['workItem'],
}
</script>

<style>

</style>
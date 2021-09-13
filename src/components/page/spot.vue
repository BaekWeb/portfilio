<template>
  <div class="spot"
  :style="{
    top: webSite.spot[0].top,
    left: webSite.spot[0].left,
  }">
    <div class="drop"
    :style="{
      top: webSite.drop[0].top,
      right: webSite.drop[0].right,
      bottom: webSite.drop[0].bottom,
      left: webSite.drop[0].left,
      }">
      <h3>{{webSite.name}}</h3>

      <ul>
        <li v-for="(text) in webSite.drop[0].text[0]" :key="text">
          {{text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["webSite"]
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";
.spot {
  @include setPosition(absolute, auto, auto, auto, auto, 998);
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid $white;
  border-radius: 100%;
  background-color: $main;
  cursor: pointer;
  
  &::after {
    @include setPosition(absolute, 50%, auto, auto, 50%, 998);
    transform: translate(-50%, -50%) rotate(45deg);
    display: block;
    content: "";
    width: 1rem;
    height: 1rem;
    background: url("~@/assets/images/icon/close.png") no-repeat center;
    background-size: cover;
    transition: 0.5s;
  }

  &:hover {
    z-index: 999;
    &::after {
      transform: translate(-50%, -50%);
    }
    .drop {
      visibility: inherit;
      opacity: 1;
    }
  }

  .drop {
    @include setPosition(absolute, auto, auto, auto, auto, 998);
    width: 10rem;
    min-height: 12.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
    color: $white;
    background-color: $black2;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;

    h3 {
      @include font-l;
    }

    ul {
      @include font-s;
      margin-top: 1rem;

      li {
        margin: 0.5rem 0 0 0.75rem;
        list-style: auto;
      }
    }
  }
}

// mo 
@include mo-lg {
  .spot {
    width: 1.2rem;
    height: 1.2rem;
    
    &::after {
      width: 0.6rem;
      height: 0.6rem;
    }

    .drop {
      width: 8rem;
      min-height: max-content;
      padding: 0.5rem;

      h3 {
        @include font-m-2;
      }

      ul {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
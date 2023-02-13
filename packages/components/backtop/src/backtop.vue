<template>
  <div v-show="btnShow" class="tas-backtop" @click="backTop">
    <tass-icon name="rocket"  class="tas-backtop-icon"></tass-icon>
  </div>
</template>

<script lang="ts" setup name="TassBacktop">
  import '../style/';
  import {onMounted, ref,onBeforeMount} from "vue";

  const btnShow = ref(true);
  onMounted(() => {
    window.addEventListener('scroll', scrollToTop);
    window.addEventListener('beforeunload', (e) => {
      window.scroll(0, 0);
    });
  });
  let timer = null;
  function backTop() {
    timer = setInterval(function () {
      let backTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let speedTop = backTop / 10;
      document.documentElement.scrollTop = backTop - speedTop;
      if(Math.abs(backTop) < 1){
        clearInterval(timer)
      }
    }, 10);
  }
  function scrollToTop() {
    //界面总高度
    let pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scroll = document.documentElement.scrollTop;
    btnShow.value = scroll >= pageLookHeight * 0.01;
  }
</script>
<style scoped>
</style>

<template>
  <div v-show="btnShow" class="tas-backtop">
    <tass-icon name="rocket"  class="tas-backtop-icon" :src="BackTop"  @click="backTop"></tass-icon>
  </div>
</template>

<script lang="ts" setup name="TassBacktop">
  import '../style/';
  import {onMounted, ref} from "vue";

  const btnShow = ref(false);
  onMounted(() => {
    window.addEventListener('scroll', scrollToTop);
  });
  let timer = null;
  function backTop() {
    timer = setInterval(function () {
      let backTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let speedTop = backTop / 10;
      document.documentElement.scrollTop = backTop - speedTop;
      if(backTop === 0){
        clearInterval(timer)
      }
    }, 10);
  }
  function scrollToTop() {
    let pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scroll = document.documentElement.scrollTop;
    btnShow.value = scroll >= pageLookHeight * 0.618;
  }
</script>
<style scoped>
</style>

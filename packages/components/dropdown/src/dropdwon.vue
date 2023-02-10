<!--
    * @Name: dropdwon
    * @Author: cxy
    * @Date: 2023/2/1 17:55
    * @Description：dropdwon
    * @Update: 2023/2/1 17:55
-->
<template>
    <div class="tass-dropdown"
         @mouseenter="mouseenter"
         @mouseleave="mouseleave">
        <button class="dropdown-button">
            <span class="tass-dropdown-link" >
                下拉菜单
                <tass-icon name="chevrondown"></tass-icon>
            </span>
        </button>
        <slot></slot>
    </div>

  <!--hover触发-->
<!--  <div @mouseenter="toggleMenuHoverEnter"  @mouseleave="toggleMenuHoverOut" class="btn-group" ref="dropdown-hover">-->
<!--      <li  class="dropdown-toggle" v-if="state.selectedOptionHover !== null">-->
<!--          {{ state.selectedOptionHover }}-->
<!--          <tass-icon name="chevrondown"></tass-icon>-->
<!--      </li>-->
<!--      <li-->
<!--          class="dropdown-toggle dropdown-toggle-placeholder"-->
<!--          v-if="state.selectedOptionHover === null"-->
<!--      >-->
<!--          {{ state.placeholderTextHover }}-->
<!--          <tass-icon name="chevrondown"></tass-icon>-->
<!--      </li>-->
<!--      <transition name="drop-transition">-->
<!--          <ul class="dropdown-menu" v-if="state.showMenuHover">-->
<!--             <li v-for="(option, idx) in state.orgOptionsHover" :key="idx">-->
<!--                <a @click="updateoptionHover(option)">-->
<!--                   {{ option }}-->
<!--                </a>-->
<!--             </li>-->
<!--          </ul>-->
<!--      </transition>-->
<!--  </div>-->

</template>

<script setup lang="ts">
  import '../style/'
  import { reactive } from 'vue';
  import mitt from "./event";

  const emits = defineEmits(['updateoption']);
  let state = reactive({
    showMenu: false,
    showMenuHover: false,
    placeholderText: '下拉菜单（click）',
    placeholderTextHover: '下拉菜单（hover）',
    selectedOption: null,
    selectedOptionHover: null,

  });
  // const mouseclick = () => {
  //   state.showMenu = true;
  //   console.log(state.showMenu+' in dropdown');
  //   mitt.emit('updateShowMenu', state.showMenu)
  // };
  const mouseenter = () => {
      state.showMenu = true
      mitt.emit('updateShowMenu', state.showMenu)
  }
  const mouseleave = () => {
     state.showMenu = false;
     mitt.emit('updateShowMenu', state.showMenu)
  }

</script>


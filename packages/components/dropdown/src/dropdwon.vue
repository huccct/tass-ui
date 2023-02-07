<!--
    * @Name: dropdwon
    * @Author: cxy
    * @Date: 2023/2/1 17:55
    * @Description：dropdwon
    * @Update: 2023/2/1 17:55
-->
<template>
  <span>下拉菜单</span> <br/>
  <div class="btn-group" @mouseleave="toggleMenuOut" ref="dropdown">
    <li @click="toggleMenu" class="dropdown-toggle" v-if="state.selectedOption !== null">
      {{ state.selectedOption }}
      <span class="caret"></span>
    </li>

    <li
      @click="toggleMenu"
      class="dropdown-toggle dropdown-toggle-placeholder"
      v-if="state.selectedOption === null"
    >
      {{ state.placeholderText }}
      <span class="caret"></span>
    </li>
    <transition name="drop-transition">
    <ul class="dropdown-menu" v-if="state.showMenu">
      <li v-for="(option, idx) in state.orgOptions" :key="idx">
        <a @click="updateoption(option)">
          {{ option }}
        </a>
      </li>
    </ul>
    </transition>
  </div>

  <!--hover触发-->
  <div @mouseenter="toggleMenuHoverEnter"  @mouseleave="toggleMenuHoverOut" class="btn-group" ref="dropdown-hover">
      <li  class="dropdown-toggle" v-if="state.selectedOptionHover !== null">
          {{ state.selectedOptionHover }}
          <span class="caret"></span>
      </li>
      <li
          class="dropdown-toggle dropdown-toggle-placeholder"
          v-if="state.selectedOptionHover === null"
      >
          {{ state.placeholderTextHover }}
          <span class="caret"></span>
      </li>
      <transition name="drop-transition">
          <ul class="dropdown-menu" v-if="state.showMenuHover">
             <li v-for="(option, idx) in state.orgOptionsHover" :key="idx">
                <a @click="updateoptionHover(option)">
                   {{ option }}
                </a>
             </li>
          </ul>
      </transition>
  </div>

</template>

<script setup lang="ts">
  import { reactive, onMounted, onBeforeUnmount, ref } from 'vue';

  const props = defineProps({
    options: {
      type: [Array, Object]
    },
    selected: {},
    closeOnOutsideClick: {
      type: [Boolean],
      default: true
    }
  });
  const emits = defineEmits(['updateoption']);
  let state = reactive({
    showMenu: false,
    showMenuHover: false,
    placeholderText: '下拉菜单（click）',
    placeholderTextHover: '下拉菜单（hover）',
    selectedOption: null,
    selectedOptionHover: null,
    orgOptions: null,
    orgOptionsHover: null
  });
  const dropdown = ref(null);

  const updateoption = option => {
    state.selectedOption = option;
    state.showMenu = false;
    // vue3.x emit  传值到父类
    emits('updateoption', state.selectedOption);
  };
  const updateoptionHover = option => {
      state.selectedOptionHover = option;
      state.showMenuHover = false;
      // vue3.x emit  传值到父类
      emits('updateoptionHover', state.selectedOptionHover);
  };
  const toggleMenu = () => {
    state.showMenu = !state.showMenu;
  };
  const toggleMenuBase = () => {
     state.showMenu = false;
  }
  const toggleMenuOut = () => {
      setTimeout(toggleMenuBase,500)
  }
  const toggleMenHover = () => {
      state.showMenuHover = !state.showMenuHover;
  }
  const toggleMenuHoverEnter = () => {
      setTimeout(toggleMenHover,500)

  };
  const toggleMenuHoverOut = () => {
      setTimeout(toggleMenHover,500)
  }

  const toggleMenuHoverLeave = () => {
      state.showMenuHover = !state.showMenuHover;
  }

  const clickHandler = event => {
    const { target } = event;
    const { value } = dropdown;
    if (!value.contains(target)) {
      //如果包含
      state.showMenu = false;
    }
  };

  onMounted(() => {
    state.orgOptions = props.options;
    state.orgOptionsHover = props.options;
    if (props.closeOnOutsideClick) {
      document.addEventListener('click', clickHandler);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', clickHandler);
  });
</script>

<style lang="scss">
  .btn-group {
    min-width: 160px;
    height: 40px;
    position: relative;
    margin: 10px 1px;
    display: inline-block;
    vertical-align: middle;
  }
  .btn-group a:hover {
    text-decoration: none;
  }

  .dropdown-toggle {
    color: #636b6f;
    min-width: 160px;
    padding: 10px 20px 10px 10px;
    text-transform: none;
    font-weight: 300;
    margin-bottom: 7px;
    border: 0;
    background-image: linear-gradient(#009688, #009688), linear-gradient(#d2d2d2, #d2d2d2);
    background-size: 0 2px, 100% 1px;
    background-repeat: no-repeat;
    background-position: center bottom, center calc(100% - 1px);
    background-color: transparent;
    transition: background 0s ease-out;
    float: none;
    box-shadow: none;
    border-radius: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dropdown-toggle:hover {
    background: #e1e1e1;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
  }

  .dropdown-menu > li > a {
    padding: 10px 30px;
    display: block;
    clear: both;
    font-weight: normal;
    line-height: 1.6;
    color: #333333;
    white-space: nowrap;
    text-decoration: none;
  }
  .dropdown-menu > li > a:hover {
    background: #efefef;
    color: #409fcb;
  }

  .dropdown-menu > li {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin: 0;
  }

  .caret {
    width: 0;
    position: absolute;
    top: 19px;
    height: 0;
    margin-left: -24px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    right: 10px;
  }

  li {
    list-style: none;
  }

  .drop-transition-leave-active, .drop-transition-enter-active {
      -webkit-transition: opacity .3s ease, -webkit-transform .3s ease;
      transition: opacity .3s ease, -webkit-transform .3s ease;
      transition: transform .3s ease, opacity .3s ease;
      transition: transform .3s ease, opacity .3s ease, -webkit-transform .3s ease;
      -webkit-transform-origin: left top;
      transform-origin: left top
  }
  .drop-transition-enter, .drop-transition-leave-active {
      opacity: 0;
      -webkit-transform: scaleY(.8);
      transform: scaleY(0.8);
  }
</style>

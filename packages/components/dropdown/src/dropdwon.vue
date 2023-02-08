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


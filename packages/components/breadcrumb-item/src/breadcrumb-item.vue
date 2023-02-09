<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-06 11:57:03
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-09 22:04:35
-->
<template>
  <div class="tas-bread-item">
    <a
      class="tas-breadcrumb-item__link"
      v-if="to"
      @click="handleClick">
      <slot/>
    </a>
    <span v-else><slot /></span>
    <!-- <tass-icon name="chevronright"></tass-icon> -->
  </div>
</template>
<script setup lang="ts" name="TassBreadcrumbItem">
  import '../style/';
  import { getCurrentInstance} from 'vue'
  import type { Router } from 'vue-router'
  const props=defineProps({
    to: {
      type: [String, Object]
    },
    replace:{
      type:Boolean,
      default:false
    }
  })
  const instance = getCurrentInstance()!
  const router = instance.appContext.config.globalProperties.$router as Router
  const handleClick=()=>{
    if (!props.to || !router) return
    props.replace ? router.replace(props.to) : router.push(props.to)
  }
</script>

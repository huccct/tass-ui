<!--
    * @Name: dropdownMenu
    * @Author: cxy
    * @Date: 2023/2/8 21:13
    * @Description：dropdownMenu  实现下拉的item是否出现
    * @Update: 2023/2/8 21:13
-->
<template>
    <transition name="tas-dropdown-transition" >
        <ul class="tas-dropdown-menu" v-if="state.showMenu">
            <slot></slot>
        </ul>
    </transition>
</template>

<script setup lang="ts">
import '../style'
import {onMounted, reactive} from "vue";
import mitt from "./event";

let state = reactive({
    showMenu: false,
})

onMounted(() => {   // 初始化两个值都会传入
    mitt.on("updateShowMenu", isOption => {  // 发生两次
        if (typeof isOption === "boolean") {
            state.showMenu = isOption
        }
    })
    mitt.on("mouseleave", isOption => {
        if (typeof isOption === "boolean") {
            state.showMenu = false
        }
    })


});
</script>

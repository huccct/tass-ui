<!--
    * @Name: dropdownMenu
    * @Author: cxy
    * @Date: 2023/2/8 21:13
    * @Description：dropdownMenuClick  实现下拉的item是否出现  元素里只有一个实现
    * @Update: 2023/2/8 21:13
-->
<template>
    <transition name="tas-dropdown-transition" @mouseenter="mouseenter">
        <ul class="tas-dropdown-menu" v-if="state.showMenuClick">
            <slot></slot>
        </ul>
    </transition>
</template>

<script setup lang="ts">
import '../style'
import {onMounted, reactive} from "vue";
import mitt from "./event";

let state = reactive({
    showMenuClick: false,
})
const mouseenter = () => {
    state.showMenuClick = true
}
onMounted(() => {   // 初始化两个值都会传入
    mitt.on("updateShowMenuClick", isOption => {  // 发生两次
        if (typeof isOption === "boolean") {
            state.showMenuClick = isOption
        }
    })

    mitt.on("mouseleave", isOption => {
        if (typeof isOption === "boolean") {
            state.showMenuClick = isOption
        }
    })


});
</script>

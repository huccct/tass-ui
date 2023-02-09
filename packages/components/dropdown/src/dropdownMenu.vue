<!--
    * @Name: dropdownMenu
    * @Author: cxy
    * @Date: 2023/2/8 21:13
    * @Description：dropdownMenu  实现下拉的item是否出现
    * @Update: 2023/2/8 21:13
-->
<template>
    <transition name="drop-transition" v-show="state.showMenu">
        <ul class="tass-dropdown-menu" >
            <slot></slot>
        </ul>
    </transition>
</template>

<script setup lang="ts">
import '../style'
import {onMounted, reactive} from "vue";
import mitt from "./event";

let state = reactive({
    showMenu: false
})
const props = defineProps({
    showMenu:{
        type: [Boolean],
        default: false
    }
})
onMounted(() => {
    mitt.on("updateShowMenu", isOption => {
        if (typeof isOption === "boolean") {
            state.showMenu = isOption
        }
    })


});
</script>

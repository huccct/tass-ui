<!--
    * @Name: dropdownItem
    * @Author: cxy
    * @Date: 2023/2/8 21:13
    * @Description：dropdownItem
    * @Update: 2023/2/8 21:13
-->
<template>
    <li class="tass-dropdown-item" >
        <a>
            <slot></slot>
        </a>
    </li>
</template>

<script setup lang="ts">
import '../style'
import {onMounted, reactive} from "vue";
import mitt from "./event";

// let state = reactive({
//     showMenu: false,
//     showMenuClick: false,
// })
// const props = defineProps({
//     trigger:{
//         type: String,
//         default: ''
//     }
// })
// onMounted(()=>{
//     mitt.on("updateItem", isOption => {
//         if (typeof isOption === "boolean") {
//             state.showMenuClick = isOption
//         }
//     })
// })
</script>

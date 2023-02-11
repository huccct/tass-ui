<template>
  {{ checkList }}<br /><br />
  <tass-checkbox-group v-model="checkList">
    <tass-checkbox v-for="(item, index) in showList" :key="index" :label="item"></tass-checkbox>
  </tass-checkbox-group>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let checkList = ref(['OptionA', 'OptionB']);
  let showList = ref(['OptionA', 'OptionB', 'OptionC', 'OptionD']);
</script>
<style></style>

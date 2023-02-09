<template>
  <tass-alert show-icon title="hello tassUI"  type="error" closeable> </tass-alert>
 <tass-alert show-icon title="hello tassUI"  type="success" closeable @close="alertClose">alert with callback</tass-alert>
</template>
<script setup lang="ts">
const alertClose= () =>{
 alert('hello tassUI')
}
</script>
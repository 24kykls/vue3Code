<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
let selected=ref('')
const logSelected=()=>{
  console.log(selected.value);
}
</script>

<template>
  <div id="app">
    <div @click="logSelected()">Selected: {{ selected }}</div>

    <select v-model="selected" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

</template>

<style scoped>
#main-content{
  display: inline-block;
}
#navigate{
  display: inline-block;
  width: 300px;
  height: 100%;
}
</style>


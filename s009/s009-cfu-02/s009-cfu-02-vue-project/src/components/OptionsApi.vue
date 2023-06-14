<template>
  <div class="composition-api">
    <h1>Composition API</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("Hello World");
</script>

<style scoped>

.composition-api{
    background-color: grey;
    padding: 10px;
}

</style>

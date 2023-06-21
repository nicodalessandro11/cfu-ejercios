<script setup>
import { ref, watch } from 'vue';
const inputValue = ref("");

watch(inputValue, (oldValue, newValue) => {
    console.log(newValue);
})

const reset = () => inputValue.value = "";
</script>

<template>
    <input type="text" v-model.lazy="inputValue">
    <button @click="reset">Reset</button>
</template>

<style scoped></style>
<script setup>
import { ref } from "vue";

const isEnabled = ref(true);
</script >

<template>
    <button :disabled="isActive">Try Me</button>
</template>

<style scoped>
button {
    background-color: rgb(60, 60, 60);
    color: white;
}
</style>
<script setup>
import { computed, ref } from 'vue';

const name = ref("Nico")
const surname = ref("D'Alessandro")

const fullName = computed(() => name.value + ' ' + surname.value)

const changeName = (parameter) => name.value = parameter


</script>

<template>
    <h2 v-text="fullName"></h2>
    <input type="text" v-model="newName">
    <button @click="changeName(newName)">Change Name</button>
</template>

<style scoped></style>
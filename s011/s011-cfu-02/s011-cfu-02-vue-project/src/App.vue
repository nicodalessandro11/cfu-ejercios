<template>
  <div>
    <h1>CFU02 - Week #11</h1>
    <h2 v-text="store.count"></h2>
    <button @click="store.increment">Add one</button>
    <button @click="store.decrement">Decrease One</button>
    <button @click="store.reset">Reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from './store.js'

const store = useCounterStore();

</script>

<style scoped></style>
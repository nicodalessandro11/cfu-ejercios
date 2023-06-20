<script setup>
import { ref } from 'vue';
import Modal from "./components/Modal.vue";

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

</script>

<template>
  <div class="container">
    <button @click="showModal">Show Modal</button>
    <Modal v-show="isModalVisible" @closeFunction="closeModal" />
  </div>
</template>

<style scoped></style>

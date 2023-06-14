<script setup>
import { ref } from "vue";

const login = ref(false);

const changeLogin = () => login.value ? login.value = false : login.value = true;
</script >

<template>
    <div>
        <h1>CFU 07 - Usage of Vue Conditional Rendering</h1>
        <button class="login-button" @click="changeLogin" v-if="login">Log in</button>
        <button class="logout-button" @click="changeLogin" v-else>Exit</button>
    </div>
</template>

<style scoped>
.login-button,
.logout-button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}

.login-button {
    background-color: #2196F3;
    color: #FFFFFF;
    border: none;
}

.logout-button {
    background-color: #F44336;
    color: #FFFFFF;
    border: none;
}
</style>
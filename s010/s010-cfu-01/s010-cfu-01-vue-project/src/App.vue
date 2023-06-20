<script setup>
import Card from './components/Card.vue';

</script>

<template>
    <Card>
        <template #title>
            <h1>This is a h1 title</h1>
            <h2>This is h2</h2>
        </template>
        <template #description>
            <p>Here some description</p>
        </template>
    </Card>
</template>

<style scoped>
Card{
    background-color: red;
}
</style>
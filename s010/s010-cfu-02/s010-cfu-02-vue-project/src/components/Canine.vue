<script setup>
const props = defineProps({
    name: {
        type: String
    },
    img: {
        type: String
    },
    rating: {
        type: Number
    }
});
</script>

<template>
    <div class="canine">
        <h2 class="canine__name">{{ name }}</h2>
        <img class="canine__image" :src="img" />
        <p>Rating: {{ rating }}</p>
    </div>
</template>

<style scoped>
.canine {
    display: flex;
    flex-direction: column;
}
.canine__image{
    width: 50px;
    height: 40px;
}
</style>

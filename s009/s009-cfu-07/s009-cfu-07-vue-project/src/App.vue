<script setup>
import { ref } from 'vue';

const shoppingList = ref([
    'Milk',
    'Eggs',
    'Bread',
    'Apples',
    'Chicken',
    'Rice',
    'Tomatoes',
    'Potatoes'
]);

const handleCheckboxChange = (event) => {
    const selectedCheck = event.target
    const isChecked = event.target.checked;

    if (isChecked) {
        selectedCheck.nextElementSibling.style.textDecoration = 'line-through';
        selectedCheck.nextElementSibling.style.textDecorationThickness = '2px';
    } else {
        selectedCheck.nextElementSibling.style.textDecoration = 'none';
    }
}

</script >

<template>
    <div>
        <h1>CFU - 07 - Rendering a list using the v-for directive</h1>
        <ul>
            <li v-for="element in shoppingList" :key="element">
                <input type="checkbox" v-model="checkedItems" :value="element" @change="handleCheckboxChange" />
                <span>{{ element }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
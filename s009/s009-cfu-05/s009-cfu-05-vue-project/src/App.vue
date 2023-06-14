<script setup>
import { ref } from "vue";

const selectedItems = ref([]);
const inputObject = ref("Change Me!")
const checkBox = ref("false");
const checkedAnimals = ref([]);
</script >

<template>
    <div>
        <h1>CFU 05 - Checkpoint Understanding: Two-Way Data Binding in Vue.js</h1>
        <section id="binding1">
            <h2>Usage of Vue Data Binding #1 - Checkboxes</h2>
            <div>
                <h3>I need to buy: {{ selectedItems.join(", ") }}</h3>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="milk" v-model="selectedItems" @click="print">
                    Milk
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="eggs" v-model="selectedItems">
                    Eggs
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="bread" v-model="selectedItems">
                    Bread
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="apple" v-model="selectedItems">
                    Apples
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="chicken" v-model="selectedItems">
                    Chicken
                </label>
            </div>
        </section>
        <section id="binding2">
            <h2>Usage of Vue Data Binding #2 - Two-Way Data Binding</h2>
            <div id="input-first">
                <h2>Put some text in here:</h2>
                <label for="input">
                    <input type="text" id="input" v-model="inputObject">
                    {{ inputObject }}
                </label>
            </div>
            <div id="input-second">
                <h2>Put some text in here:</h2>
                <label for="checkbox">
                    <input type="checkbox" id="checkbox" v-model="checkBox">
                    Checked: {{ checkBox }}
                </label>
            </div>
            <div id="input-third">
                <h2>Select any or none of the following animals</h2>
                <label for="orangutan">
                    <input type="checkbox" id="orangutan" value="Orangutan" v-model="checkedAnimals">
                    Orangutan
                </label>
                <label for="mammoth">
                    <input type="checkbox" id="mammoth" value="Mammoth" v-model="checkedAnimals">
                    Mammoth
                </label>
                <label for="dog">
                    <input type="checkbox" id="dog" value="Dog" v-model="checkedAnimals">
                    Dog
                </label>
                <h4> Checked animals:</h4>
                <p v-show="checkedAnimals.length > 0">
                <pre>{{ checkedAnimals }}</pre>
                </p>
            </div>

        </section>

    </div>
</template>

<style scoped></style>
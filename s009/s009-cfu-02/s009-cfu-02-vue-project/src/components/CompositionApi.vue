<template>
  <div class="options-api">
    <h1>Composition API</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message: "Hello World"
        }
    }
}
</script>

<style scoped>

.options-api{
    background-color: blue;
    padding: 10px;
}

</style>

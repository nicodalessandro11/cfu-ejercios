<template>
  <div class="container">
    <nav>
      <router-link class="nav-link" to="/">Go to Home</router-link>
      <router-link class="nav-link" to="/about">Go to About</router-link>
    </nav>
    <h1>CFU01 - Week #11</h1>
    <router-view></router-view>

  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
}

nav .nav-link {
  margin-top: 10px;
}

.container {
  text-align: center;
  background-color: lightgray;
  padding-bottom: 50px;

}
</style>
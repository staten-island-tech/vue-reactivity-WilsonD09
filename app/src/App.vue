<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="flex items-center">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <HelloWorld msg="You did it!" /> -->

    <nav class="m-auto mt-[2rem]">
      <RouterLink class="p-[1rem]" to="/">Home</RouterLink>
      <RouterLink class="p-[1rem]" to="/about">Card</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

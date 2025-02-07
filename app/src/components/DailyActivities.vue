<template>
  <div
    class="card w-[22%] h-[30rem] border-[0.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
    <img :src="activity.picture" :alt="activity.alt" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
  },
})
</script>

<style scoped></style>

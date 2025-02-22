<template>
  <div
    class="card w-[95%] h-[5rem] border-[0.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
  </div>
</template>

<script setup>
import { dayList } from './dayList'

const props = defineProps({
  activity: Object,
})
</script>

<style scoped></style>

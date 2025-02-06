<template>
  <div class="card">
    <img :src="activity.picture" :alt="activity.alt" />
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>

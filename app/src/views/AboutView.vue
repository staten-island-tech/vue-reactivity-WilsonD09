<template>
  <div class="container flex flex-wrap flex-row items-center justify-around w-[90vw] mx-auto">
    <DailyActivities v-for="activity in activities" :activity="activity" :key="activity.id" />
  </div>
</template>

<script setup>
import { activities } from '@/components/activities'
import DailyActivities from '@/components/DailyActivities.vue'
</script>

<style scoped></style>
